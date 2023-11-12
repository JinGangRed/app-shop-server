import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

import { AccountModule } from '@/modules/account/account.module';
import { JWTConfig } from '@/constants/security.constant';

@Module({
  imports: [
    JwtModule.register({
      secret: JWTConfig.JWTSecret,
      signOptions: { expiresIn: JWTConfig.JWTExpiresIn },
    }),
    AccountModule,
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
