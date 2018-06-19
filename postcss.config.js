var postCSSConfig = [
  /* autoprefix for different browser vendors */
  /* require global variables */
  require('postcss-import'),
  require('postcss-simple-vars')({
    silent: true ,
    variables: function variables() {
      return require('./src/_variables.js')
    },
    onVariables(variables) {
      console.log(variables)
    },
    unknown: function unknown(node, name, result) {
      node.warn(result, 'Unknown variable ' + name)
    }
  }),
  require('autoprefixer'),
  /* reset inherited rules */
  require('postcss-initial')({
    reset: 'inherited' // reset only inherited rules
  }),
  /* enable mixins like Sass/Less */
  require('postcss-mixins')({
    mixins: require('./src/_mixins.js')
  }),
  /* enable nested css selectors like Sass/Less */
  require('postcss-nested'),
  /* PostCSS plugin for making calculations with math.js  */
  require('postcss-math'),
  /* transform W3C CSS color function to more compatible CSS. */
  require('postcss-color-function')
]

// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig;
