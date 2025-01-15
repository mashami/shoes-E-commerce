"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react";
import { findProductProps, ProductTypes, ShoesType } from "../types";
import { handleFilterShoes, searchProduct, staticShoesData } from "../actions";

interface AppContextData {
  setOpenCartDialog: Dispatch<React.SetStateAction<boolean>>;
  openCartDialog: boolean;
  openingCartHandle: ({ productId, brandId }: findProductProps) => void;
  dataFilled: ProductTypes | null;
  setDataFilled: Dispatch<SetStateAction<ProductTypes | null>>;
  filteredShoes: ShoesType[];
  handleSearch: (value: string) => void;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setActiveMenu: Dispatch<SetStateAction<string>>;
  setFilteredShoes: Dispatch<SetStateAction<ShoesType[]>>;
  activeMenu: string;
}

const AppContext = createContext<AppContextData | null>(null);

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [openCartDialog, setOpenCartDialog] = useState<boolean>(false);
  const [dataFilled, setDataFilled] = useState<ProductTypes | null>(null);
  const [filteredShoes, setFilteredShoes] =
    useState<ShoesType[]>(staticShoesData);
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");

  const openingCartHandle = ({ productId, brandId }: findProductProps) => {
    const getProduct: ProductTypes | undefined = handleFilterShoes({
      productId,
      brandId
    });
    setDataFilled(getProduct || null);
    setOpenCartDialog(true);
  };

  const handleSearch = (keyword: string) => {
    if (searchValue) {
      const result = searchProduct(keyword);
      setFilteredShoes(result?.length > 0 ? result : staticShoesData);
    } else {
      setFilteredShoes(staticShoesData);
    }
  };

  console.log("dataFilled  =>", dataFilled);

  const value: AppContextData = {
    openCartDialog,
    searchValue,
    setSearchValue,
    handleSearch,
    filteredShoes,
    setOpenCartDialog,
    openingCartHandle,
    dataFilled,
    setDataFilled,
    activeMenu,
    setActiveMenu,
    setFilteredShoes
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
