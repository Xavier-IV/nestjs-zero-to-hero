import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private client: ClientProxy,
  ){}

  sendEmail() {
    console.log('Mock: Sending email to subscribed customer');
  }

  sendPush() {
    console.log('Mock: Sending push notification to subscribed customer');
  }
}
