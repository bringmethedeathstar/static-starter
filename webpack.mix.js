let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

// Paths
const paths = {
  sass: {
    source: './src/assets/sass/main.scss',
    dest: 'dist/css/',
  },
  javascript: {
    source: './src/assets/js/main.js',
    singles: './src/assets/js/singles/*',
    dest: 'dist/js/',
  },
};

// Run mix
mix
  .webpackConfig({})
  .copyDirectory('./src/static', 'dist/')

  // Concatenate & Compile Javascript
  .js(paths.javascript.source, paths.javascript.dest)

  // Compile singles
  // .js(paths.javascript.singles, paths.javascript.dest)

  // Compile SCSS & TailwindCSS
  .sass(paths.sass.source, paths.sass.dest)
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  });

// Production only
if (mix.inProduction()) {
  mix
    .purgeCss({
      folders: ['src/site'],
      extensions: ['html', 'njk'],
      whitelist: [],
    })
    .minify(paths.sass.dest + 'main.css')
    .minify(paths.javascript.dest + 'main.js');
}
