
export interface ProductTypes{
    id:string
    name:string,
    price:number,
    liked?:boolean
    description?:string
    pictures:string[]
    color:string[]
    size:number[]

}

export interface ShoesType {
    id:string
    brandName:string
    product:ProductTypes[]
}

export interface findProductProps{
    productId:string,
    brandId:string
}



export interface AllLikedProps {
  product: ProductTypes;
  brandId: string;
  brandName: string;
}