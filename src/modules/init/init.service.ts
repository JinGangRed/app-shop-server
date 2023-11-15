import { Injectable } from '@nestjs/common';
import { AccountService } from '@modules/account/account.service';
import { RoleService } from '@modules/role/role.service';
import { PermissionService } from '@modules/permission/permission.service';
import { ObjectId } from 'mongoose';

import { defaultInitData } from './init.entity.data';

import { InjectModel } from '@/transformers/model.transformer';
import { MongooseModel } from '@/types/database';
import { Account, Permission, ReplaceRef, Role } from '@/types/entities';

@Injectable()
export class InitService {
  constructor(
    @InjectModel(Account) private readonly accountModel: MongooseModel<Account>,
    @InjectModel(Role) private readonly roleModel: MongooseModel<Role>,
    @InjectModel(Permission)
    private readonly permissionModel: MongooseModel<Permission>,
  ) {}

  public async initAccount(account: ReplaceRef<Account>) {
    const { roles, ...acc } = account;
    let roleDocs = [];
    if (roles) {
      roleDocs = await this.initRoles(roles);
    }
    const accountDoc = await this.accountModel.findOneAndUpdate(
      {
        username: acc.username,
        name: acc.name,
      },
      { ...acc, roles: roleDocs.map((x) => x._id) },
      {
        upsert: true,
        returnDocument: 'after',
      },
    );
    return accountDoc;
  }

  public async initAccounts() {
    return Promise.all(
      defaultInitData.accounts.map(async (account) => {
        return await this.initAccount(account);
      }),
    );
  }

  public async initRole(role: ReplaceRef<Role>) {
    return await this.roleModel.findOneAndUpdate({ name: role.name }, role, {
      upsert: true,
      returnDocument: 'after',
    });
  }

  public async initRoles(roles: ReplaceRef<Role>[]) {
    return Promise.all(roles.map(async (role) => await this.initRole(role)));
  }

  public async initPermission() {}
}
