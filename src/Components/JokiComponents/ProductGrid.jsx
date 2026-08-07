import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
}) {
  return (
    <div className="grid-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}