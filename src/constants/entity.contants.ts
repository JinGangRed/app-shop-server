import { CreateAccountDTO } from '@/types/account';

export const defaultAccount: CreateAccountDTO[] = [
  {
    username: 'Admin',
    password: 'admin',
    avatar: '',
  },
  {
    username: 'Guest',
    password: 'guest',
    avatar: '',
  },
];
