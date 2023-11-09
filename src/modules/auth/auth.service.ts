import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from '@/modules/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { TokenResult } from '@/types/security';
import { JWTConfig } from '@/constants/security.constant';
import { LoginAccountDTO } from '@/types/account';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(loginAccount: LoginAccountDTO): Promise<TokenResult> {
    const account = await this.usersService.findOne(loginAccount.name);
    if (account?.password !== loginAccount.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      throw new UnauthorizedException();
    }
    const payload = { username: account.name, sub: account._id };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      expiresIn: JWTConfig.JWTExpiresIn,
    };
  }
}
