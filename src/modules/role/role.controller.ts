import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { upperFirst } from 'lodash';
import { ObjectId } from 'mongoose';

import { RoleService } from './role.service';
import { CreateRoleDTO } from './role.model';

const controllerName = 'role';

@ApiTags(upperFirst(controllerName))
@Controller(controllerName)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  public async create(@Body() createRoleDto: CreateRoleDTO) {
    this.roleService.create(createRoleDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: ObjectId | string) {
    this.roleService.delete(id);
  }
}
