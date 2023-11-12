import { Schema } from 'mongoose';

import isActivePlugin from './isActive';

const setupPlugins = (schema: Schema) => {
  isActivePlugin(schema);
};

export default setupPlugins;
