import { getProviderByTypegooseClass } from '@/transformers/model.transformer';
import { Product } from '@/types/entities';

export const ProductProvider = getProviderByTypegooseClass(Product);
