import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { CreatePermissionDTO } from './permission.model';

import { InjectModel } from '@/transformers/model.transformer';
import { MongooseDoc, MongooseModel } from '@/types/database';
import { Permission } from '@/types/entities';

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

  public async insertMany(
    createPermissionDTOs: CreatePermissionDTO[],
  ): Promise<MongooseDoc<Permission>[]> {
    return this.permissionModel.insertMany(createPermissionDTOs);
  }

  public async delete(id: ObjectId | string) {
    return await this.permissionModel.findByIdAndDelete(id);
  }
}
