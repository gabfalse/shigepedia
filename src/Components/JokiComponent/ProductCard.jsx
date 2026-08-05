import { FaArrowRight } from "react-icons/fa6";

const products = [
  {
    id: "star",
    title: "Per Bintang",
    description: "Cocok untuk push beberapa bintang sesuai kebutuhan.",
    discount: null,
  },
  {
    id: "package10",
    title: "Paket 10 Bintang",
    description: "Hemat 5% dibandingkan harga normal.",
    discount: "Diskon 5%",
  },
  {
    id: "rankup",
    title: "Paket Naik Rank",
    description: "Naik rank lebih hemat dengan potongan 10%.",
    discount: "Diskon 10%",
  },
];

const ProductCard = ({ onSelectProduct }) => {
  return (
    <section>
      <p className="section-title">Pilih Layanan</p>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="price-card">
            <div className="gradient-line" />

            {product.discount && (
              <div className="discount-badge">
                {product.discount}
              </div>
            )}

            <div className="pt-5">
              <h3 className="text-2xl font-bold">
                {product.title}
              </h3>

              <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-zinc-400">
                {product.description}
              </p>

              <button
                onClick={() => onSelectProduct?.(product)}
                className="primary-btn mt-8 w-full"
              >
                <span>Pesan Sekarang</span>

                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;