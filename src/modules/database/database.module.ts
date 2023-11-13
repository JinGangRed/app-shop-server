import { Global, Logger, Module } from '@nestjs/common';

import { databaseProvider } from './database.provider';

@Global()
@Module({
  providers: [databaseProvider,Logger],
  exports: [databaseProvider],
})
export class DatabaseModule {}
