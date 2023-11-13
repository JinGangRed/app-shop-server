import { RoleModule } from '@modules/role/role.module';
import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AccountProvider } from './account.model';
import { AccountService } from './account.service';

@Module({
  imports: [RoleModule],
  providers: [AccountProvider, AccountService],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
