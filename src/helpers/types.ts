import { Decimal } from '@prisma/client/runtime';

export type Product = {
  name: string;
  description: string;
  price: Decimal;
};
