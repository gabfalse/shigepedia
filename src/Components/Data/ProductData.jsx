export const PRODUCT_DATA = [
  {
    id: "star",
    title: "Per Bintang",
    description: "Cocok untuk push beberapa bintang sesuai kebutuhan.",

    type: "star",

    discount: 0,

    requiredStars: null,
    requireRankUp: false,
  },

  {
    id: "package10",
    title: "Paket 10 Bintang",
    description: "Hemat 5% untuk pembelian tepat 10 bintang.",

    type: "package",

    discount: 5,

    requiredStars: 10,
    requireRankUp: false,
  },

  {
    id: "rankup",
    title: "Paket Naik Rank",
    description: "Naik rank lebih hemat dengan potongan 10%.",

    type: "rankup",

    discount: 10,

    requiredStars: null,
    requireRankUp: true,
  },
];