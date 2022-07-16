import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  pool = [
    {
      uid: "user+1@gmail.com",
      topic: [
        'product.created',
        'discount.created'
      ],
      channel: ['email', 'push'],
      brand: ['Adidas']
    },
    {
      uid: "user+2@gmail.com",
      topic: [
        'discount.created'
      ],
      channel: ['email'],
      brand: ['Nike']
    }
  ]

  constructor(
    @Inject('NOTIFICATION_SERVICE') private client: ClientProxy,
  ){}

  sendEmail(payload) {
    const subscribers = this.pool.filter(v => {
      return v.topic.includes(payload.topic) && v.brand.includes(payload.brand) && v.channel.includes('email');
    })
    if (subscribers.length === 0) return;
    console.log('Mock: Sending email to subscribed customer');
    console.log(`Mock: Sending email to - ${subscribers.length} user`)
  }

  sendPush(payload) {
    const subscribers = this.pool.filter(v => {
      return v.topic.includes(payload.topic) && v.brand.includes(payload.brand) && v.channel.includes('push');
    })
    if (subscribers.length === 0) return;
    console.log('Mock: Sending push notification to subscribed customer');
    console.log(`Mock: Sending push notification to - ${subscribers.length} user`)
  }
}
