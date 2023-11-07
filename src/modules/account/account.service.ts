import { InjectModel } from '@/transformers/model.transformer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { JWTConfig } from '@/constants/security.constant';
import { TokenResult } from '@/types/security';
import { Account, CreateAccountDTO, LoginAccountDTO } from '@/types/account';
import { assignIn } from 'lodash';
@Injectable()
export class AccountService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(Account) private readonly accountModel: Model<Account>,
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

  public create(account: CreateAccountDTO): Account {
    const accountDoc = new Account();
    assignIn(accountDoc, account, { createTime: Date.now });
    this.accountModel.create(account);
  }
}
