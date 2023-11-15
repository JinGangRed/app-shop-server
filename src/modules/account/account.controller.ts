import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { upperFirst } from 'lodash';

import { AccountService } from './account.service';
import {
  CreateAccountDTO,
  LoginAccountDTO,
  UpdateAccountDTO,
} from './account.model';

const contollerName = 'account';
@ApiTags(upperFirst(contollerName))
@Controller(contollerName)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/login')
  @ApiOperation({
    description: '登录接口',
    summary: '用户登录',
  })
  @ApiBody({
    type: () => LoginAccountDTO,
    description: '登录的账户',
  })
  public login(@Body() loginAccount: LoginAccountDTO) {
    return loginAccount;
  }

  @Post()
  public create(@Body() createAccountDTO: CreateAccountDTO) {
    return this.accountService.create(createAccountDTO);
  }

  @Delete(':id')
  public delete(@Param('id') id: ObjectId | string) {
    return this.accountService.delete(id);
  }

  @Put(':id')
  public update(
    @Param('id') id: ObjectId | string,
    @Body() updateAccountDTO: UpdateAccountDTO,
  ) {
    return this.accountService.update(id, updateAccountDTO);
  }
}
