

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
        pictures: [{id:"1", url:"/image/nike/nike1/1.jpg"}, {id:"2",url:"/image/nike/nike1/2.jpg"},{id:"3",url:"/image/nike/nike1/3.jpg"}, {id:"4",url:"/image/nike/nike1/4.jpg"}],
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
        pictures: [{id:"1", url:"/image/nike/nike2/1.jpg"}, {id:"2",url:"/image/nike/nike2/2.jpg"},{id:"3",url:"/image/nike/nike2/3.jpg"}, {id:"4",url:"/image/nike/nike2/4.jpg"}],
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
        pictures: [{id:"1", url:"/image/nike/nike3/3.png"}, {id:"2",url:"/image/nike/nike3/2.jpg"},{id:"3",url:"/image/nike/nike3/1.jpg"}, {id:"4",url:"/image/nike/nike3/4.jpg"}],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-4",
        name: "Nike Product 4",
        totalProducts:10,
        price: 130,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1", url:"/image/nike/nike4/2.jpg"}, {id:"2",url:"/image/nike/nike4/1.jpg"},{id:"3",url:"/image/nike/nike4/3.jpg"}, {id:"4",url:"/image/nike/nike4/4.jpg"}],
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
        pictures: [{id:"1", url:"/image/nike/nike5/1.jpg"}, {id:"2",url:"/image/nike/nike5/2.jpg"},{id:"3",url:"/image/nike/nike5/3.jpg"}, {id:"4",url:"/image/nike/nike5/4.jpg"}],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-6",
        name: "Nike Product 6",
        totalProducts:10,
        price: 150,
        liked:false,
        pictures: [{id:"1", url:"/image/nike/nike6/1.jpg"}, {id:"2",url:"/image/nike/nike6/2.jpg"},{id:"3",url:"/image/nike/nike6/3.jpg"}, {id:"4",url:"/image/nike/nike6/4.jpg"}],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-7",
        name: "Nike Product 7",
        totalProducts:10,
        price: 160,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1", url:"/image/nike/nike7/1.webp"}, {id:"2",url:"/image/nike/nike7/2.webp"},{id:"3",url:"/image/nike/nike7/3.webp"}, {id:"4",url:"/image/nike/nike7/4.webp"}],
        size: [7, 8, 9, 10, 11],
      },
      {
        id: "nike-8",
        name: "Nike Product 8",
        totalProducts:10,
        price: 170,
        liked:false,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1", url:"/image/nike/nike8/1.jpg"}, {id:"2",url:"/image/nike/nike8/2.jpg"},{id:"3",url:"/image/nike/nike8/3.jpg"}, {id:"4",url:"/image/nike/nike8/4.jpg"}],

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
        pictures: [{id:"1",url:"/image/adidas/adidas1/1.webp"}, {id:"2", url:"/image/adidas/adidas1/2.jpg"}, {id:"3", url:"/image/adidas/adidas1/3.jpeg"}, {id:"4", url:"/image/adidas/adidas1/4.jpeg"}],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      },
      {
        id: "adidas-2",
        name: "Adidas Product 2",
        totalProducts:10,
        price: 130,
        liked:false,
        pictures: [{id:"1",url:"/image/adidas/adidas2/1.jpg"}, {id:"2", url:"/image/adidas/adidas2/2.jpeg"}, {id:"3", url:"/image/adidas/adidas2/3.jpeg"}, {id:"4", url:"/image/adidas/adidas2/4.jpeg"}],

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
        pictures: [{id:"1",url:"/image/adidas/adidas3/1.avif"}, {id:"2", url:"/image/adidas/adidas3/2.jpeg"}, {id:"3", url:"/image/adidas/adidas3/3.jpeg"}, {id:"4", url:"/image/adidas/adidas3/4.jpeg"}],

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

       pictures: [{id:"1",url:"/image/adidas/adidas4/1.webp"}, {id:"2", url:"/image/adidas/adidas4/2.jpeg"}, {id:"3", url:"/image/adidas/adidas4/3.jpeg"}, {id:"4", url:"/image/adidas/adidas4/4.jpeg"}],

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
        pictures: [{id:"1",url:"/image/adidas/adidas5/1.jpeg"}, {id:"2", url:"/image/adidas/adidas5/2.jpeg"}, {id:"3", url:"/image/adidas/adidas5/3.jpeg"}, {id:"4", url:"/image/adidas/adidas5/4.jpeg"}],

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
        pictures: [{id:"1",url:"/image/adidas/adidas6/1.jpeg"}, {id:"2", url:"/image/adidas/adidas6/2.jpeg"}, {id:"3", url:"/image/adidas/adidas6/3.jpeg"}, {id:"4", url:"/image/adidas/adidas6/4.jpeg"}],

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
        pictures: [{id:"1",url:"/image/adidas/adidas7/1.jpeg"}, {id:"2", url:"/image/adidas/adidas7/2.jpeg"}, {id:"3", url:"/image/adidas/adidas7/3.jpeg"}, {id:"4", url:"/image/adidas/adidas7/4.jpeg"}],

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
        pictures: [{id:"1",url:"/image/adidas/adidas8/1.jpeg"}, {id:"2", url:"/image/adidas/adidas8/2.jpeg"}, {id:"3", url:"/image/adidas/adidas8/3.jpeg"}, {id:"4", url:"/image/adidas/adidas8/4.jpeg"}],

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
        pictures: [{id:"1",url:"/image/puma/puma1/1.avif"}, {id:"2",url:"/image/puma/puma1/2.avif"},{id:"3",url:"/image/puma/puma1/3.avif"},{id:"4",url:"/image/puma/puma1/4.avif"}],
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
        pictures: [{id:"1",url:"/image/puma/puma2/1.avif"}, {id:"2",url:"/image/puma/puma2/2.avif"},{id:"3",url:"/image/puma/puma2/3.avif"},{id:"4",url:"/image/puma/puma2/4.avif"}],
        
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
         pictures: [{id:"1",url:"/image/puma/puma3/1.avif"}, {id:"2",url:"/image/puma/puma3/2.avif"},{id:"3",url:"/image/puma/puma3/3.avif"},{id:"4",url:"/image/puma/puma3/4.avif"}],
        
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
        pictures: [{id:"1",url:"/image/puma/puma4/1.webp"}, {id:"2",url:"/image/puma/puma4/2.webp"},{id:"3",url:"/image/puma/puma4/3.jpeg"},{id:"4",url:"/image/puma/puma4/4.jpeg"}],
        
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
       pictures: [{id:"1",url:"/image/puma/puma5/1.webp"}, {id:"2",url:"/image/puma/puma5/2.jpeg"},{id:"3",url:"/image/puma/puma5/3.jpeg"},{id:"4",url:"/image/puma/puma5/4.jpeg"}],
        
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      },
      {
        id: "puma-6",
        name: "Puma Product 6",
        totalProducts:10,
        price: 140,
        description:"Bardi AirFoce is a portable ioniser with H11 HEPA",
        pictures: [{id:"1",url:"/image/puma/puma6/1.jpg"}, {id:"2",url:"/image/puma/puma6/2.jpeg"},{id:"3",url:"/image/puma/puma6/3.jpeg"},{id:"4",url:"/image/puma/puma6/4.jpeg"}],
       
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
        pictures: [{id:"1",url:"/image/puma/puma7/1.jpeg"}, {id:"2",url:"/image/puma/puma7/2.jpeg"},{id:"3",url:"/image/puma/puma7/3.jpeg"},{id:"4",url:"/image/puma/puma7/4.jpeg"}],
       
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
        pictures: [{id:"1",url:"/image/puma/puma8/1.jpeg"}, {id:"2",url:"/image/puma/puma8/2.jpeg"},{id:"3",url:"/image/puma/puma8/3.jpeg"},{id:"4",url:"/image/puma/puma8/4.jpeg"}],
       
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
