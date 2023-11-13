import { ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { MongooseDoc, MongooseModel } from '@/types/database';
import { CreateRoleDTO, Role, UpdateRoleDto } from '@/types/entities/role';
import { InjectModel } from '@/transformers/model.transformer';
import { PermissionService } from '@/modules/permission/permission.service';
import { Permission } from '@/types/entities/permission';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleModel: MongooseModel<Role>,
    private readonly permissionService: PermissionService
  ) {}

  public async create(createRoleDTO: CreateRoleDTO) {
    let permissions:MongooseDoc<Permission>[];
    if(createRoleDTO.permissions){
      permissions = await this.permissionService.insertMany(createRoleDTO.permissions)
    }
    const role = await this.roleModel.create({...createRoleDTO,permissions:permissions});
    return role;
  }

  public async update(id: ObjectId | string, updateRoleDTO: UpdateRoleDto) {
    const role = await this.roleModel.findByIdAndUpdate(id, updateRoleDTO);
    return role;
  }

  public async delete(id: ObjectId | string) {
    return await this.roleModel.findByIdAndDelete(id);
  }
}
