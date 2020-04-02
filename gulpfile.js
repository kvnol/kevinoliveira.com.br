const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const files = {
  'js': [ 
    'assets/js/*.js'
  ],
  'cssVendor': [
    'node_modules/normalize.css/normalize.css'
  ]
};

function js() {
  return src(files.js)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('assets/js'))
}

function css() {
  return src(files.cssVendor)
    .pipe(concat('vendor.css'))
    .pipe(dest('assets/css'))
}

exports.js = js;
// exports.jsVendor = jsVendor;
exports.css = css;
exports.default = parallel(js, css);
