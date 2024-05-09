import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/orders.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Is Valid ${OrderStatusList}`,
  })
  status: OrderStatus;
}

export class ChangeStatusDto {
  @IsEnum(OrderStatusList, {
    message: `Status is requerid or Is Valid ${OrderStatusList}`,
  })
  status: OrderStatus;
}
