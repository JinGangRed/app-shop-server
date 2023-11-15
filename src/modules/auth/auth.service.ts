import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AccountService } from '@/modules/account/account.service';
import { TokenResult } from '@/types/security';
import { JWTConfig } from '@/constants/security.constant';
import { LoginAccountDTO } from '@/modules/account/account.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(loginAccount: LoginAccountDTO): Promise<TokenResult> {
    const account = await this.accountService.findOne({
      username: loginAccount.username,
    });
    if (account?.password !== loginAccount.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      throw new UnauthorizedException();
    }
    const payload = { username: account.username, sub: account._id };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      expiresIn: JWTConfig.JWTExpiresIn,
    };
  }
}
