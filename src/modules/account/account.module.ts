import { Module } from '@nestjs/common';
import { AccountProvider } from './account.model';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [],
  providers: [AccountProvider, AccountService],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
