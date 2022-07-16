import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ event: 'product.created' })
  getHello(data: string): void {
    this.appService.sendEmail();
    this.appService.sendPush();
  }
}
