'use strict';

/*
 * TABLE OF CONTENTS
 * ---------------------
 *    1. imports
 *    2. action
 * ---------------------
 */

/*
 * -----------------------------
 *  1. imports
 * -----------------------------
 */

const gulp   = require('gulp');
const babel  = require('gulp-babel');
const terser = require('gulp-terser');

/*
 * -----------------------------
 *  2. action
 * -----------------------------
 */

gulp.task('compile-js',  function() {
  return gulp.src('./src/*.js')
    .pipe(babel({ presets: ['@babel/env']}))
    .pipe(terser())
    .pipe(gulp.dest( './scripts/' ))
})
