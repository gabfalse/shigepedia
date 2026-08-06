export const PROMO = {
  product: {
    star: {
      enabled: false,
      discount: 0,
    },

    pack5: {
      enabled: true,
      discount: 2,
    },

    pack10: {
      enabled: true,
      discount: 5,
    },

    rank: {
      enabled: true,
      discount: 10,
    },
  },

  manual: [
    {
      code: "SHIGE5",
      type: "percent", // percent | fixed
      value: 5,
      active: false,
    },

    {
      code: "WELCOME10",
      type: "fixed", // potong harga
      value: 10000,
      active: false,
    },

    {
      code: "WELCOME15",
      type: "percent",
      value: 10,
      active: true,
    },
  ],
};