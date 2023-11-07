import { MongooseDoc, MongooseModel } from '@/types/database/index';
import { InjectModel } from '@/transformers/model.transformer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTConfig } from '@/constants/security.constant';
import { TokenResult } from '@/types/security';
import { Account, CreateAccountDTO, LoginAccountDTO } from '@/types/account';
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

  public async delete(id: ObjectId): Promise<MongooseDoc<Account>> {
    const account = this.accountModel.findByIdAndUpdate(
      id,
      { IsActive: false },
      { returnDocument: 'after' },
    );
    return account;
  }
}
