import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { upperFirst } from 'lodash';
import { RoleService } from './role.service';
import { CreateRoleDTO } from '@/types/entities/role';
import { ObjectId } from 'mongoose';

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
