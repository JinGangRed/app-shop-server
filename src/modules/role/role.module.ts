import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleProvider } from './role.model';

@Module({
  providers: [RoleService, RoleProvider],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
