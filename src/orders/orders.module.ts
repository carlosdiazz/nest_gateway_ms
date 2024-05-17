import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/nats/nats.module';
//import { ClientsModule, Transport } from '@nestjs/microservices';
//import { envs, ORDER_SERVICE } from 'src/config';

@Module({
  imports: [NatsModule],
  controllers: [OrdersController],
})
export class OrdersModule {}
