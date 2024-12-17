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
        price: 100,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/v1.webp", "/image/v2.webp", "/image/v3.webp", "/image/v4.webp"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-2",
        name: "Nike Product 2",
        price: 110,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/nike3.png", "/image/nike.png", "/image/nike4.png", "/image/nike5.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-3",
        name: "Nike Product 3",
        price: 120,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
         pictures: ["/image/nike.png", "/image/nike.png", "/image/nike.png", "/image/nike.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-4",
        name: "Nike Product 4",
        price: 130,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: ["/image/nike.png", "/image/nike.png", "/image/nike.png", "/image/nike.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-5",
        name: "Nike Product 5",
        price: 140,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: ["/image/nike.png", "/image/nike.png", "/image/nike.png", "/image/nike.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-6",
        name: "Nike Product 6",
        price: 150,
        liked:false,
         pictures: ["/image/nike.png", "/image/nike.png", "/image/nike.png", "/image/nike.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-7",
        name: "Nike Product 7",
        price: 160,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
         pictures: ["/image/nike.png", "/image/nike.png", "/image/nike.png", "/image/nike.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-8",
        name: "Nike Product 8",
        price: 170,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
          pictures: ["/image/nike.png", "/image/nike.png", "/image/nike.png", "/image/nike.png"],
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
        price: 120,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-2",
        name: "Adidas Product 2",
        price: 130,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
       pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-3",
        name: "Adidas Product 3",
        price: 140,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
       pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-4",
        name: "Adidas Product 4",
        price: 150,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-5",
        name: "Adidas Product 5",
        price: 160,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-6",
        name: "Adidas Product 6",
        price: 170,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-7",
        name: "Adidas Product 7",
        price: 180,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
       pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-8",
        name: "Adidas Product 8",
        price: 190,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
       pictures: ["/image/adida.webp", "/image/adida.webp","/image/adida.webp", "/image/adida.webp"],
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
        price: 90,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-2",
        name: "Puma Product 2",
        price: 100,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-3",
        name: "mashami",
        price: 110,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-4",
        name: "Puma Product 4",
        price: 120,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-5",
        name: "Puma Product 5",
        price: 130,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-6",
        name: "Puma Product 6",
        price: 140,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-7",
        name: "Puma Product 7",
        price: 150,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
       pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-8",
        name: "Puma Product 8",
        price: 160,
        liked:true,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
       pictures: ["/image/puma.avif", "/image/puma.avif", "/image/puma.avif", "/image/puma.avif"],
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

      // If the brandName or any product matches, include the result
      if (
        brand.brandName.toLowerCase().includes(lowerCaseKeyword) ||
        filteredProducts.length > 0
      ) {
        return {
          ...brand,
          product: filteredProducts, // Only include matched products
        };
      }
      return null;
    })
    .filter((brand) => brand !== null); // Remove null values
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
    console.warn("Product not found in the cart.");
    return;
  }

  return cartProducts.splice(productIndex, 1);
};



export const checkInCartHandle = (brandId: string, productId: string) => {
    const getAllCartProducts: AllLikedProps[] = getCartProducts();
    const filterCarts = getAllCartProducts.map(
      (cart) => cart.brandId === brandId && cart.product.id === productId
    );

    return filterCarts.includes(true);
  };