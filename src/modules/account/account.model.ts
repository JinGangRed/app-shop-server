import { ApiProperty, PickType } from '@nestjs/swagger';

import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { TrackActionDTO } from '@/types/base';
import { Account, ExculdeTrackType, ReplaceRef } from '@/types/entities';

export const AccountProvider = getProviderByTypegooseClass(Account);

export type CreateAccountDTO = ReplaceRef<ExculdeTrackType<Account>>;

export type UpdateAccountDTO = Partial<CreateAccountDTO>;

export type QueryAccountDTO = Partial<CreateAccountDTO>;

export class AccountDTO extends TrackActionDTO {
  @ApiProperty({
    description: '账户',
  })
  username: string;

  @ApiProperty({
    description: '密码',
  })
  password: string;
}

export class LoginAccountDTO extends PickType<
  AccountDTO,
  'username' | 'password'
>(AccountDTO, ['username', 'password'] as const) {}
