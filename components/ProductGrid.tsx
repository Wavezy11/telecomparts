import ProductCard from './ProductCard';

type Product = {
  id: string;
  name: string;
  price: number;
  icon: string;
  colorVariants: string[];
  isSale?: boolean;
  originalPrice?: number;
};

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 py-24">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
