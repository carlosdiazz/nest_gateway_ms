import { Module } from '@nestjs/common';
//import { ClientsModule, Transport } from '@nestjs/microservices';

//Propio
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/nats/nats.module';
//import { envs, NATS_SERVER } from './../config';

@Module({
  imports: [
    //ClientsModule.register([
    //  {
    //    name: NATS_SERVER,
    //    transport: Transport.NATS,
    //    options: {
    //      servers: envs.NATS_SERVERS,
    //      //host: envs.PRODUCTS_MS_HOST,
    //      //port: envs.PRODUCTS_MS_PORT,
    //    },
    //  },
    //]),
    NatsModule,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
