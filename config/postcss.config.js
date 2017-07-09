module.exports = ({file, options, env}) => ({
  syntax: 'post-scss',
  plugins: {
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
});
