import { Severity, modelOptions, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId } from 'mongoose';

@modelOptions({
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class TrackActionModel extends TimeStamps {
  @prop()
  createBy?: string | ObjectId;
  @prop()
  updateBy?: string | ObjectId;
}
