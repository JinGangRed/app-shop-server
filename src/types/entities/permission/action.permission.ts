import { prop } from '@typegoose/typegoose';

export class ActionPermission {
  @prop({ required: true })
  action!: string;

  @prop({ required: true })
  actionCode!: string;
}
