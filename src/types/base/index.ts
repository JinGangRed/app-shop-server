import { modelOptions, prop, Severity } from '@typegoose/typegoose';
import { Date, ObjectId } from 'mongoose';

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class BaseEntity {
  @prop({})
  createBy: string | ObjectId;

  @prop()
  createTime: Date | Date;

  IsActive: boolean;
}
