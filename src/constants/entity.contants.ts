import { CreateAccountDTO } from '@/modules/account/account.model';
import { PermissionType } from '@/types/entities';

export const defaultAccount: CreateAccountDTO[] = [
  {
    username: 'Admin',
    password: 'admin',
    avatar: '',
    roles: [
      {
        name: 'Admin',
        displayName: 'Admin',
        permissions: [
          {
            displayName: 'aaa',
            type: PermissionType.Route,
          },
        ],
      },
    ],
  },
  // {
  //   username: 'Guest',
  //   password: 'guest',
  //   avatar: '',
  // },
];
