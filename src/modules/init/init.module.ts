import { Module } from '@nestjs/common';

import { InitController } from './init.controller';
import { InitService } from './init.service';

import { AccountProvider } from '@/modules/account/account.model';
import { RoleProvider } from '@/modules/role/role.model';
import { PermissionProvider } from '@/modules/permission/permission.model';
import { RoleModule } from '@/modules/role/role.module';
import { PermissionModule } from '@/modules/permission/permission.module';
import { AccountModule } from '@/modules/account/account.module';

@Module({
  imports: [AccountModule, RoleModule, PermissionModule],
  controllers: [InitController],
  providers: [InitService, AccountProvider, RoleProvider, PermissionProvider],
})
export class InitModule {}
