import { IsMongoId, IsString } from 'class-validator';

export class FindOneDto {
  @IsMongoId()
  @IsString()
  id: string;
}
