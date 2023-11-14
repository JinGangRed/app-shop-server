import { prop } from '@typegoose/typegoose';

import { ExculdeTrackType, ReplaceRef, TrackActionModel } from '../base';
export class Product extends TrackActionModel {
  @prop()
  name: string;

  @prop()
  description: string;

  @prop()
  price: number;

  @prop()
  stock: number;
}
export type CreateProductDto = ReplaceRef<ExculdeTrackType<Product>>;

export type UpdateProductDto = Partial<CreateProductDto>;
