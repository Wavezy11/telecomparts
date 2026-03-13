export interface Product {
  id: string;
  name: string;
  price: number;
  icon: string;
  colorVariants: string[];
  isSale?: boolean;
  originalPrice?: number;
}
