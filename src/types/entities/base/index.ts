import { modelOptions, prop, Ref, Severity } from '@typegoose/typegoose';
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

export type ExculdeTrackType<T> = Pick<T, Exclude<keyof T, keyof TimeStamps>>;

export type ReplaceRef<T> = {
  [P in keyof T]: T[P] extends Ref<infer U>
    ? ReplaceRef<U>
    : T[P] extends Ref<infer U>[]
    ? ReplaceRef<U>[]
    : T[P];
};
