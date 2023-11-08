import { Controller, Get } from '@nestjs/common';

@Controller('account')
export class AccountController {
  @Get()
  public syaHello() {
    return 'Hello';
  }
}
