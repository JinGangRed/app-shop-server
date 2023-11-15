import { Schema } from 'mongoose';

const isActivePlugin = (schema: Schema) => {
  schema.add({ isActive: { type: Boolean, default: true } });
  // schema.pre(['find', 'findOne', ''], function () {
  //   this.where({ IsActive: true });
  // });
};

export default isActivePlugin;
