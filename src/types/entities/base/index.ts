import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId } from 'mongoose';

export class TrackActionModel extends TimeStamps {
  @prop()
  createBy?: string | ObjectId;
  @prop()
  updateBy?: string | ObjectId;
}
