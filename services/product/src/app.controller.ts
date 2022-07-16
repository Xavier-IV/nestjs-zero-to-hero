import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts(): Product[] {
    return this.appService.getAll();
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    return this.appService.create(product);
  }
}
