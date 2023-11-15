import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { upperFirst } from 'lodash';

import { InitService } from './init.service';
const controllerName = 'init';

@ApiTags(upperFirst(controllerName))
@Controller(controllerName)
export class InitController {
  constructor(private readonly initService: InitService) {}

  @Get()
  public init() {
    return this.initService.initAccounts();
  }
}
