import { defaultAccount } from '@/constants/entity.contants';
import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get()
  public syaHello() {
    return 'Hello';
  }

  @Get('init')
  public init() {
    return this.accountService.bulkInsert(defaultAccount);
  }
}
