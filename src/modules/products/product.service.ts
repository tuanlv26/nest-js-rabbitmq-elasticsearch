import {Injectable} from '@nestjs/common';
import { Product } from 'src/models/product.model';
@Injectable()
export class ProductService {

    private products: Product[] = [
        {id: 1, category: 1, productName: 'Product 1', price: 1000},
        {id: 2, category: 2, productName: 'Product 2', price: 2000},
        {id: 3, category: 3, productName: 'Product 3', price: 3000},
        {id: 4, category: 4, productName: 'Product 4', price: 4000},
    ]

    getProducts(): Product[] {
        return this.products;
    }

    createProduct(): string {
        return 'POST PRODUCT';
    }

    detailProduct(id: number): Product{
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(): string{
        return 'UPDATE PRODUCT';
    }

    deleteProduct(): string{
        return 'DELETE PRODUCT';
    }
}