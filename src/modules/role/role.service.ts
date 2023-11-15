import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { CreateRoleDTO, UpdateRoleDto } from './role.model';

import { PermissionService } from '@/modules/permission/permission.service';
import { InjectModel } from '@/transformers/model.transformer';
import { MongooseDoc, MongooseModel } from '@/types/database';
import { Permission, Role } from '@/types/entities';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleModel: MongooseModel<Role>,
    private readonly permissionService: PermissionService,
  ) {}

  public async create(
    createRoleDTO: CreateRoleDTO,
  ): Promise<MongooseDoc<Role>> {
    let permissions: MongooseDoc<Permission>[];
    if (createRoleDTO.permissions) {
      permissions = await this.permissionService.insertMany(
        createRoleDTO.permissions,
      );
    }
    const role = await this.roleModel.create({
      ...createRoleDTO,
      permissions: permissions,
    });
    return role;
  }

  public async insertMany(
    createRoleDTOs: CreateRoleDTO[],
  ): Promise<Promise<MongooseDoc<Role>>[]> {
    return await createRoleDTOs.map((data) => this.create(data));
  }

  public async update(id: ObjectId | string, updateRoleDTO: UpdateRoleDto) {
    const role = await this.roleModel.findByIdAndUpdate(id, updateRoleDTO);
    return role;
  }

  public async delete(id: ObjectId | string) {
    return await this.roleModel.findByIdAndDelete(id);
  }
}
