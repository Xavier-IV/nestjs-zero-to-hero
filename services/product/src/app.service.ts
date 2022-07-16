import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class AppService {
  products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(product: Product): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...product
    };

    this.products.push(newProduct);

    return newProduct;
  }
}
