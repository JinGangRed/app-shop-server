import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

import { DB_CONNECTION_TOKEN } from '@/constants/database.constant';
import envConstants from '@/constants/env.constants';
import setupPlugins from '@/plugins/mongoose';

export const databaseProvider: Provider = {
  inject: [ConfigService],
  provide: DB_CONNECTION_TOKEN,
  useFactory: async (configService: ConfigService) => {
    const dbConnection = configService.get(envConstants.dbConnection);
    const connection = () => {
      mongoose.connect(dbConnection, {}).catch((error) => console.log(error));
    };

    mongoose.plugin(setupPlugins);
    mongoose.connection.on('connecting', () => {
      console.log('connecting...');
    });

    mongoose.connection.on('connected', () => {
      console.log('connected.');
    });
    if (dbConnection) {
      return await connection();
    }
  },
};
