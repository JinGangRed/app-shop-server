import { CreateAccountDTO } from '@/types/account';

export const defaultAccount: CreateAccountDTO[] = [
  {
    name: 'Admin',
    password: 'admin',
    avatar: '',
  },
  {
    name: 'Guest',
    password: 'guest',
    avatar: '',
  },
];
