import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Product } from './product.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private client: ClientProxy,
  ){}

  products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(product: Product): Product {
    const pattern = { event: 'product.created' };

    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };

    this.products.push(newProduct);
    this.client.emit(pattern, 'New product created');

    return newProduct;
  }
}
