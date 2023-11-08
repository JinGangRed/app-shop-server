import { MongooseDoc, MongooseModel } from '@/types/database/index';
import { InjectModel } from '@/transformers/model.transformer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTConfig } from '@/constants/security.constant';
import { TokenResult } from '@/types/security';
import {
  Account,
  CreateAccountDTO,
  LoginAccountDTO,
  UpdateAccountDTO,
} from '@/types/account';
import lodash from 'lodash';
import { ObjectId } from 'mongoose';
@Injectable()
export class AccountService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(Account) private readonly accountModel: MongooseModel<Account>,
  ) {}

  /**
   * createToken
   */
  public createToken(account: LoginAccountDTO): TokenResult {
    return {
      accessToken: this.jwtService.sign({ ...account }),
      expiresIn: JWTConfig.JWTExpiresIn,
    };
  }
  /**
   * create a account
   * @param {CreateAccountDTO} accountDTO
   * @returns the created account
   */
  public async create(
    accountDTO: CreateAccountDTO,
  ): Promise<MongooseDoc<Account>> {
    const account = new Account();
    lodash.assignIn(account, accountDTO, { createTime: Date.now });
    const accountDoc = await this.accountModel.create(account);
    return accountDoc;
  }

  /**
   * Delete a Account
   * @param id
   * @returns
   */
  public async delete(id: ObjectId): Promise<MongooseDoc<Account>> {
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
    id: ObjectId,
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
    return account || Promise.reject(`Account ${id} not found`);
  }
}
