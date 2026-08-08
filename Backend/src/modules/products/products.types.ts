export interface IProduct {

    name:string;
    description?:string;
    price:number;
    image?:string;
    stock:number;
    category?:string;
    sizes:string[];

    oldPrice?:number;
    rating?:number;
    badge?:string;

}