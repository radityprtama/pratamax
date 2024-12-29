const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const pwaConfig = require("./wb.config");

const nextConfig = {
  images: {
    domains: ["i.scdn.co"], // Pastikan domain sudah benar
  },

  async redirects() {
    return [
      {
        source: "/buy",
        destination: "/", // Isi dengan path tujuan yang benar, "/" jika kosong
        permanent: false,
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // Ganti React dengan Preact hanya untuk build client-side di production
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = withPlugins(
  [[withPWA, { pwa: pwaConfig }]], // Konfigurasi PWA
  nextConfig
);
