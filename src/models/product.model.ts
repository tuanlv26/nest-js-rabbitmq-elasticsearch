export class Product{
    id?: number;
    category?: number;
    productName: string;
    price?: number;
    constructor(id, category, productName, price){
        if(id !== null) this.id = id;
        if(category !== null) this.category = category;
        if(productName !== null) this.productName = productName;
        if(price !== null) this.price = price;
    }
}