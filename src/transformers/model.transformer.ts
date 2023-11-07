import { DB_CONNECTION_TOKEN } from '@/constants/database.constant';
import { Inject, Provider } from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { Connection } from 'mongoose';

export interface TypegooseClass {
  new (...args: any[]);
}

export function getModelToken(modelName: string): string {
  return modelName;
}

export function getProviderByTypegooseClass(
  typegooseClass: TypegooseClass,
): Provider {
  return {
    provide: getModelToken(typegooseClass.name),
    useFactory: (connection: Connection) =>
      getModelForClass(typegooseClass, { existingConnection: connection }),
    inject: [DB_CONNECTION_TOKEN],
  };
}

export function InjectModel(model: TypegooseClass) {
  return Inject(getModelToken(model.name));
}
