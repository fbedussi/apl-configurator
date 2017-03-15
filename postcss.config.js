
module.exports = {
  plugins: [
    require('postcss-partial-import'),
    //require('postcss-custom-properties'),
    require('postcss-cssnext')({ /* ...options */ })
  ]
}