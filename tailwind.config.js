module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    ".src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: () => ({
        "80vh": "70vh",
        "screen/2": "50vh",
      }),
    },
  },
  variants: {},
  plugins: [],
};
