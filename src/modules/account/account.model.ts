import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { prop } from '@typegoose/typegoose';

export class Account {
  @prop({ required: true })
  name: string;
}

export const AccountProvider = getProviderByTypegooseClass(Account);
