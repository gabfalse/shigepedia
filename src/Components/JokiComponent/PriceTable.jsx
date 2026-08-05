const prices = [
  {
    rank: "Master",
    price: "Rp2.000",
    color: "text-gray-300",
  },
  {
    rank: "Grandmaster",
    price: "Rp3.000",
    color: "text-green-400",
  },
  {
    rank: "Epic",
    price: "Rp4.000",
    color: "text-purple-400",
  },
  {
    rank: "Legend",
    price: "Rp5.000",
    color: "text-orange-400",
  },
  {
    rank: "Mythic",
    price: "Rp8.000",
    color: "text-red-400",
  },
  {
    rank: "Mythic Honor",
    price: "Rp10.000",
    color: "text-yellow-400",
  },
  {
    rank: "Mythic Glory",
    price: "Rp15.000",
    color: "text-cyan-400",
  },
  {
    rank: "Mythic Immortal",
    price: "Rp20.000",
    color: "text-pink-400",
  },
];

const PriceTable = () => {
  return (
    <section>
      <p className="section-title">Daftar Harga</p>

      <div className="glass-card-lg">
        <h2 className="text-2xl font-bold">
          Harga Per Bintang
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Harga mengikuti rank yang sedang dikerjakan.
        </p>

        <div className="mt-8 divide-y divide-white/10">
          {prices.map((item) => (
            <div
              key={item.rank}
              className="flex items-center justify-between py-4"
            >
              <span className={`font-semibold ${item.color}`}>
                {item.rank}
              </span>

              <span className="font-bold">
                {item.price}
                <span className="ml-1 text-sm font-normal text-zinc-400">
                  / Bintang
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;