import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Account } from '@/types/account';

export const AccountProvider = getProviderByTypegooseClass(Account);
