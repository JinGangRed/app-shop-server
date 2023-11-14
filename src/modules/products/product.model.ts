import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Product } from '@/types/entities/product';

export const ProductProvider = getProviderByTypegooseClass(Product);
