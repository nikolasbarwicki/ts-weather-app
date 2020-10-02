/* eslint-disable no-unused-vars */
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'london-background': "url('/assets/images/london.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
