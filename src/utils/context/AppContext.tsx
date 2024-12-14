"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react";
import { findProductProps, ProductTypes } from "../types";
import { handleFilterShoes } from "../actions";

interface AppContextData {
  setOpenCartDialog: Dispatch<React.SetStateAction<boolean>>;
  openCartDialog: boolean;
  openingCartHandle: ({ productId, brandId }: findProductProps) => void;
  dataFilled: ProductTypes | null;
  setDataFilled: Dispatch<SetStateAction<ProductTypes | null>>;
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

  const openingCartHandle = ({ productId, brandId }: findProductProps) => {
    const getProduct: ProductTypes | undefined = handleFilterShoes({
      productId,
      brandId
    });
    setDataFilled(getProduct || null);
    setOpenCartDialog(true);
  };

  const value: AppContextData = {
    openCartDialog,
    setOpenCartDialog,
    openingCartHandle,
    dataFilled,
    setDataFilled
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
