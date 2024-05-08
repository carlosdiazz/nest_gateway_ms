import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

//Propio
import { ProductsController } from './products.controller';
import { envs, PRODUCT_SERVICE } from './../config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.PRODUCTS_MS_HOST,
          port: envs.PRODUCTS_MS_PORT,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
