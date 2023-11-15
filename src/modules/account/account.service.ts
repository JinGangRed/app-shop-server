import { RoleService } from '@modules/role/role.service';
import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';

import {
  CreateAccountDTO,
  QueryAccountDTO,
  UpdateAccountDTO,
} from './account.model';

import { InjectModel } from '@/transformers/model.transformer';
import { MongooseDoc, MongooseModel } from '@/types/database';
import { Account } from '@/types/entities';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account) private readonly accountModel: MongooseModel<Account>,
    private readonly roleService: RoleService,
  ) {}

  /**
   * create a account
   * @param {CreateAccountDTO} accountDTO
   * @returns the created account
   */
  public async create(
    accountDTO: CreateAccountDTO,
  ): Promise<MongooseDoc<Account>> {
    return this.accountModel.create(accountDTO);
  }

  /**
   * Delete a Account
   * @param id
   * @returns
   */
  public async delete(id: ObjectId | string): Promise<MongooseDoc<Account>> {
    const account = this.accountModel.findByIdAndDelete(id, {
      returnDocument: 'after',
    });
    return account;
  }

  /**
   * update a account
   * @param id
   * @param accountDTO
   * @returns
   */
  public async update(
    id: ObjectId | string,
    accountDTO: UpdateAccountDTO,
  ): Promise<MongooseDoc<Account>> {
    const account = await this.accountModel.findByIdAndUpdate(id, accountDTO, {
      returnDocument: 'after',
    });
    return account;
  }

  /**
   * Query a account by ID
   * @param id
   * @returns
   */
  public async query(id: ObjectId): Promise<MongooseDoc<Account>> {
    const account = await this.accountModel.findById(id);
    return account;
  }

  /**
   * query one document by condations
   * @param query The condation of the query
   * @returns
   */
  public async findOne(query: QueryAccountDTO): Promise<MongooseDoc<Account>> {
    const account = await this.accountModel.findOne(query);
    return account;
  }
}
