import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountModule } from '@/modules/account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTConfig } from '@/constants/security.constant';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AccountModule,
    PassportModule,
    JwtModule.register({
      secret: JWTConfig.JWTSecret,
      signOptions: { expiresIn: JWTConfig.JWTExpiresIn },
    }),
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
