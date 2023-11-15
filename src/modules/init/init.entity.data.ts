import { Account, ReplaceRef } from '@/types/entities';

export const defaultInitAccount: ReplaceRef<Account>[] = [
  {
    name: 'Administrator',
    username: 'admin',
    password: 'admin',
    mail: '123@qq.com',
    roles: [
      {
        name: 'administrator',
        displayName: 'Administrator',
        description: '管理员',
      },
    ],
  },
  {
    name: 'Guest',
    username: 'guest',
    password: 'guest',
    mail: '456@qq.com',
    roles: [
      {
        name: 'guest',
        displayName: 'Guest',
        description: '访客',
      },
    ],
  },
];

export const defaultInitData = {
  accounts: defaultInitAccount,
};
