import { Ref, Severity, isRefType, modelOptions, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId, RefType } from 'mongoose';

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

export type ExculdeType<Source,Condition> = Pick<Source,{
  [K in keyof Source]: Source[K] extends Condition ? never : K
}[keyof Source]>


export type ExculdeTrackType<T> = Exclude<T,keyof TrackActionModel>;
export type Override<Source, New> = Omit<Source, Extract<keyof Source,keyof New>> & New;



