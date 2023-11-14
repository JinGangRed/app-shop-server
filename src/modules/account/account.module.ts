import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AccountProvider } from './account.model';
import { AccountService } from './account.service';

import { RoleModule } from '@/modules/role/role.module';

@Module({
  imports: [RoleModule],
  providers: [AccountProvider, AccountService],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
