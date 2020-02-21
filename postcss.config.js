const plugins = [require('tailwindcss'), require('autoprefixer')]

if (process.env.NODE_ENV === 'production') {
  const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: ['./src/**/*.html', './src/**/*.vue'],
    whitelist: ['html'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  })

  plugins.push(purgecss)
}

module.exports = {
  plugins,
}
