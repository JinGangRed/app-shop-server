import { Model, Types } from 'mongoose';
import type { DocumentType } from '@typegoose/typegoose';

export type MongooseDoc<T> = Omit<DocumentType<T>, 'id' | '_id'> &
  T & { _id: Types.ObjectId };

export type MongooseModel<T> = Model<MongooseDoc<T>>;
