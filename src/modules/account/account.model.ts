import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Account, ExculdeTrackType, ReplaceRef } from '@/types/entities';

export const AccountProvider = getProviderByTypegooseClass(Account);

export type LoginAccountDTO = Pick<Account, 'username' | 'password'>;

export type CreateAccountDTO = ReplaceRef<ExculdeTrackType<Account>>;

export type UpdateAccountDTO = Partial<CreateAccountDTO>;

export type QueryAccountDTO = Partial<CreateAccountDTO>;
