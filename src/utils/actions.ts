

import { toast } from "@/hooks/use-toast";
import { AllLikedProps, CartProductProps, findProductProps, ProductTypes, ShoesType } from "./types";


export const staticShoesData: ShoesType[] = [
  {
    id: "1",
    brandName: "Nike",
    product: [
      {
        id: "nike-1",
        name: "Nike Product 1",
        totalProducts:10,
        price: 100,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1", url:"/image/v1.webp"}, {id:"2",url:"/image/v2.webp"},{id:"3",url: "/image/v3.webp"}, {id:"4",url:"/image/v4.webp"}],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-2",
        name: "Nike Product 2",
        totalProducts:10,
        price: 110,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/nike3.png"}, {id:"2",url:"/image/nike.png"}, {id:"3", url: "/image/nike4.png"}, {id:"4",url:"/image/nike5.png"}],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-3",
        name: "Nike Product 3",
        totalProducts:10,
        price: 120,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
         pictures: [{id:"1", url:"/image/nike.png"}, {id:"2", url:"/image/nike.png"},{id:"3", url:"/image/nike.png"},{id:"4", url:"/image/nike.png"}],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-4",
        name: "Nike Product 4",
        totalProducts:10,
        price: 130,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: [{id:"1", url:"/image/nike.png"}, {id:"2",url:"/image/nike.png"}, {id:"3", url:"/image/nike.png"}, {id:"4", url:"/image/nike.png"}],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-5",
        name: "Nike Product 5",
        totalProducts:10,
        price: 140,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: [{id:"1", url:"/image/nike.png"}, {id:"2",url:"/image/nike.png"}, {id:"3", url:"/image/nike.png"}, {id:"4", url:"/image/nike.png"}],

        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-6",
        name: "Nike Product 6",
        totalProducts:10,
        price: 150,
        liked:false,
          pictures: [{id:"1", url:"/image/nike.png"}, {id:"2",url:"/image/nike.png"}, {id:"3", url:"/image/nike.png"}, {id:"4", url:"/image/nike.png"}],

        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-7",
        name: "Nike Product 7",
        totalProducts:10,
        price: 160,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: [{id:"1", url:"/image/nike.png"}, {id:"2",url:"/image/nike.png"}, {id:"3", url:"/image/nike.png"}, {id:"4", url:"/image/nike.png"}],

        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-8",
        name: "Nike Product 8",
        totalProducts:10,
        price: 170,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: [{id:"1", url:"/image/nike.png"}, {id:"2",url:"/image/nike.png"}, {id:"3", url:"/image/nike.png"}, {id:"4", url:"/image/nike.png"}],

        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: "2",
    brandName: "Adidas",
    product: [
      {
        id: "adidas-1",
        name: "Adidas Product 1",
        totalProducts:10,
        price: 120,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-2",
        name: "Adidas Product 2",
        totalProducts:10,
        price: 130,
        liked:false,
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-3",
        name: "Adidas Product 3",
        totalProducts:10,
        price: 140,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],

        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-4",
        name: "Adidas Product 4",
        totalProducts:30,
        price: 150,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",

        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],

        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-5",
        name: "Adidas Product 5",
        totalProducts:10,
        price: 160,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],

        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-6",
        name: "Adidas Product 6",
        totalProducts:10,
        price: 170,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],
        
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-7",
        name: "Adidas Product 7",
        totalProducts:10,
        price: 180,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],
        
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-8",
        name: "Adidas Product 8",
        totalProducts:10,
        price: 190,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/adida.webp"}, {id:"2", url:"/image/adida.webp"}, {id:"3", url:"/image/adida.webp"}, {id:"4", url:"/image/adida.webp"}],
        
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
    ],
  },
  {
    id: "3",
    brandName: "Puma",
    
    product: [
      {
        id: "puma-1",
        name: "Puma Product 1",
        totalProducts:10,
        price: 90,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-2",
        name: "Puma Product 2",
        totalProducts:10,
        price: 100,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-3",
        name: "mashami",
        totalProducts:10,
        price: 110,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-4",
        name: "Puma Product 4",
        totalProducts:10,
        price: 120,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-5",
        name: "Puma Product 5",
        totalProducts:10,
        price: 130,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-6",
        name: "Puma Product 6",
        totalProducts:10,
        price: 140,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-7",
        name: "Puma Product 7",
        totalProducts:10,
        price: 150,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-8",
        name: "Puma Product 8",
        totalProducts:10,
        price: 160,
        liked:true,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma.avif"}, {id:"2",url:"/image/puma.avif"},{id:"3",url:"/image/puma.avif"},{id:"4",url:"/image/puma.avif"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
    ],
  },
];







export const handleFilterShoes = ({productId, brandId}:findProductProps) => {
   
    const brand = staticShoesData.find((shoes) => shoes.id === brandId);

    if (!brand) {
      console.warn("Brand not found.");
      return;
    }

    const singleProduct = brand.product.find((product) => product.id === productId);

    if (!singleProduct) {
      console.warn("Product not found in the selected brand.");
      return;
    }

    return singleProduct as ProductTypes;
  };




export const handleUpdateLiked = ({ productId, brandId }: findProductProps) => {
 
  const singleProduct = handleFilterShoes({ productId, brandId });

  if (!singleProduct) {
    console.warn("Product not found, cannot update liked status.");
    return;
  }
  singleProduct.liked = !singleProduct.liked;
};


export const findLikedProducts = (): AllLikedProps[] => {
  const likedProducts: AllLikedProps[] = [];

  staticShoesData.forEach((brand) => {
    brand.product.forEach((product) => {
      if (product.liked) {
        likedProducts.push({
          product,
          brandId: brand.id,
          brandName: brand.brandName,
        });
      }
    });
  });

  return likedProducts as AllLikedProps[];
};


export const searchProduct = (keyword: string): ShoesType[] => {
  const lowerCaseKeyword = keyword.toLowerCase();

  return staticShoesData
    .map((brand) => {
      
      const filteredProducts = brand.product.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseKeyword)
      );

      
      if (
        brand.brandName.toLowerCase().includes(lowerCaseKeyword) ||
        filteredProducts.length > 0
      ) {
        return {
          ...brand,
          product: filteredProducts, 
        };
      }
      return null;
    })
    .filter((brand) => brand !== null); 
};



export const cartProducts: CartProductProps[] = [];


export const addProductCart = (product: CartProductProps) => {
  
  const isAlreadyInCart = cartProducts.some(
    (item) => item.product.id === product.product.id && item.brandId === product.brandId
  );

  if (isAlreadyInCart) {
    toast({
      title: "Product is already in the cart.",
      className: "w-fit"
    });
   
    return;
  }

  cartProducts.push(product);
};


export const getCartProducts = (): CartProductProps[] => {
  return cartProducts;
};

 export const getProductDetails = ({brandId,productId}:findProductProps) => {
 const getProduct: ProductTypes | undefined = handleFilterShoes({
      productId,
      brandId
    })
   
    return getProduct
  }






export const removeProductCart = ({productId,brandId}:findProductProps) => {
  
  const productIndex = cartProducts.findIndex(
    (item) => item.product.id === productId && item.brandId === brandId
  );

  if (productIndex === -1) {
    toast({
      variant:"destructive",
      title: "Not found",
      className: "w-fit"
    });
    return;
  }

  return  cartProducts.splice(productIndex, 1) as CartProductProps[]
    
  
};



export const checkInCartHandle = (brandId: string, productId: string) => {
    const getAllCartProducts: AllLikedProps[] = getCartProducts();
    const filterCarts = getAllCartProducts.map(
      (cart) => cart.brandId === brandId && cart.product.id === productId
    );

    return filterCarts.includes(true);
  };


 export const getAllCartProducts = (): CartProductProps[] => {
  const storedCart = localStorage.getItem("cartProducts");
  return storedCart ? JSON.parse(storedCart) : cartProducts;
};



  export const updateCartProducts = (updatedCart: CartProductProps[]) => {
  localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
};


interface editTypes{
  brandId:string,
  productId:string,
  productUpdated:ProductTypes

}
// const {setFilteredShoes} = useAppContext()
export const editProductById =({brandId,
  productId,
  productUpdated}:editTypes
)=> {
  return staticShoesData.map((brand) => {
    if (brand.id === brandId) {
      return {
        ...brand,
        product: brand.product.map((product) =>
          product.id === productId ? { ...product, ...productUpdated } : product
        ),
      };
    }
   
    return brand;
  });
}
