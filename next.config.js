const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const pwaConfig = require("./wb.config");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/buy",
        destination: "/",
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

  experimental: {
    mdxRs: true,
  },
};

module.exports = withPlugins(
  [[withPWA, { pwa: pwaConfig }]], // Konfigurasi PWA
  nextConfig
);
