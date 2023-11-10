import { prop } from '@typegoose/typegoose';
export class RoleEntity {
  @prop({ required: true })
  name: string;

  @prop({ default: '' })
  description: string;
}

export enum Role {
  Guest = 'guest',
  Admin = 'admin',
}
