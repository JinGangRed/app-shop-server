import { Module } from '@nestjs/common';
import { AccountProvider } from './account.model';
import { AccountService } from './account.service';
import { JwtModule } from '@nestjs/jwt';
import { JWTConfig } from '@/constants/security.constant';

@Module({
  imports: [
    JwtModule.register({
      secret: JWTConfig.JWTSecret,
      signOptions: { expiresIn: JWTConfig.JWTExpiresIn },
    }),
  ],
  providers: [AccountProvider, AccountService],
})
export class AccountModule {}
