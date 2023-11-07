import { Module } from '@nestjs/common';
import { AccountProvider } from './account.model';
import { AccountService } from './account.service';

@Module({
  providers: [AccountProvider, AccountService],
})
export class AccountModule {}
