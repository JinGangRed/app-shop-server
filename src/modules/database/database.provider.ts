import { Logger, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

import { DB_CONNECTION_TOKEN } from '@/constants/database.constant';
import envConstants from '@/constants/env.constants';
import setupPlugins from '@/plugins/mongoose';

export const databaseProvider: Provider = {
  inject: [ConfigService, Logger],
  provide: DB_CONNECTION_TOKEN,
  useFactory: async (configService: ConfigService, logger: Logger) => {
    const dbConnection = configService.get(envConstants.dbConnection);
    const connection = () => {
      mongoose.connect(dbConnection, {}).catch((error) => console.log(error));
    };

    mongoose.plugin(setupPlugins);
    mongoose.connection.on('connecting', () => {
      logger.log('database is connecting...');
    });

    mongoose.connection.on('connected', () => {
      logger.log('database is connected.');
    });

    mongoose.connection.on('error', (err) => {
      logger.error(`database connection has error:${err}`);
    });

    try {
      return await connection();
    } catch (error) {
      logger.error(`database has error occors:${error}`);
    }
  },
};
