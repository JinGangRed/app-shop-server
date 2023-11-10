import { Permission, CreatePermissionDTO } from '@/types/entities/permission';
import { InjectModel } from '@/transformers/model.transformer';
import { Injectable } from '@nestjs/common';
import { MongooseDoc, MongooseModel } from '@/types/database';
import { ObjectId } from 'mongoose';

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
