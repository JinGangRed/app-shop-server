import { Module } from '@nestjs/common';

import { RoleController } from './role.controller';
import { RoleProvider } from './role.model';
import { RoleService } from './role.service';

import { PermissionModule } from '@/modules/permission/permission.module';

@Module({
  imports: [PermissionModule],
  providers: [RoleService, RoleProvider],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
