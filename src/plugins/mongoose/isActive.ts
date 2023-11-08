import { Schema } from 'mongoose';

const isActivePlugin = (schema: Schema) => {
  schema.add({ IsActive: { type: Boolean, default: true } });
  schema.post(['deleteOne', 'deleteMany', 'findOneAndDelete'], function (docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    docs.forEach((doc) => {
      doc.IsActive = false;
    });
  });
};

export default isActivePlugin;
