import { ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { MongooseModel } from '@/types/database';
import { CreateRoleDTO, Role, UpdateRoleDto } from '@/types/entities/role';
import { InjectModel } from '@/transformers/model.transformer';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleModel: MongooseModel<Role>,
  ) {}

  public async create(createRoleDTO: CreateRoleDTO) {
    const role = await this.roleModel.create(createRoleDTO);
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
