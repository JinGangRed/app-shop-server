import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { upperFirst } from 'lodash';

import { AccountService } from './account.service';
import { CreateAccountDTO, UpdateAccountDTO } from './account.model';

import { defaultAccount } from '@/constants/entity.contants';
const contollerName = 'account';
@ApiBearerAuth()
@ApiTags(upperFirst(contollerName))
@Controller(contollerName)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('init')
  public init() {
    return this.accountService.bulkInsert(defaultAccount);
  }

  @Post()
  // @ApiBody({ type: CreateAccountDTO })
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
