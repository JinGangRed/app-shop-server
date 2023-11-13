import { CreateAccountDTO } from '@/types/entities/account';
import { PermissionType } from '@/types/entities/permission';

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
