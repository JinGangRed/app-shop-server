import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { CreatePermissionDTO, Permission } from '@/types/entities/permission';
import { InjectModel } from '@/transformers/model.transformer';
import { MongooseDoc, MongooseModel } from '@/types/database';

@Injectable()
export class PermissionService {
  constructor(
    @InjectModel(Permission)
    private readonly permissionModel: MongooseModel<Permission>,
  ) {}

  public async create(
    createPermissionDTO: CreatePermissionDTO,
  ): Promise<MongooseDoc<Permission>> {
    return await this.permissionModel.create(createPermissionDTO);
  }

  public async delete(id: ObjectId | string) {
    return await this.permissionModel.findByIdAndDelete(id);
  }
}
