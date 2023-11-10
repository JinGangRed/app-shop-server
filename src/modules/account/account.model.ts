import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Account } from '@/types/entities/account';

export const AccountProvider = getProviderByTypegooseClass(Account);
