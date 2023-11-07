import { DB_CONNECTION_TOKEN } from '@/constants/database.constant';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

export const databaseProvider: Provider = {
  inject: [ConfigService],
  provide: DB_CONNECTION_TOKEN,
  useFactory: async (configService: ConfigService) => {
    const dbConnection = configService.get('mongoosedbConnection');
    const connection = () => {
      mongoose.connect(dbConnection, {});
    };
    if (dbConnection) {
      return await connection();
    }
  },
};
