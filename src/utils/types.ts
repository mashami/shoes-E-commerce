
export interface ProductProps{
    id:string
    name:string,
    price:number,
    pictures:string[]
    color:string[]
    size:number[]

}

export interface ShoesType{
    id:string
    brandName:string
    product:ProductProps[]
    

}