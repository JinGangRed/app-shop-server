import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { upperFirst } from 'lodash';

import { PermissionService } from './permission.service';
import { CreatePermissionDTO } from './permission.model';

const controllerName = 'permission';

@ApiTags(upperFirst(controllerName))
@Controller(controllerName)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  public async create(@Body() createPermissionDto: CreatePermissionDTO) {
    this.permissionService.create(createPermissionDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: ObjectId | string) {
    this.permissionService.delete(id);
  }
}
