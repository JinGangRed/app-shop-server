import { prop } from '@typegoose/typegoose';
import { Date, ObjectId } from 'mongoose';

export class BaseEntity {
  @prop({})
  createBy: string | ObjectId;

  @prop()
  createTime: Date | Date;

  IsActive: boolean;
}
