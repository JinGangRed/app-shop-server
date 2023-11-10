import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionProvider } from './permission.model';

@Module({
  providers: [PermissionService, PermissionProvider],
  controllers: [PermissionController],
  exports: [PermissionService],
})
export class PermissionModule {}
