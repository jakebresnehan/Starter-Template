'use strict';

module.exports = function (grunt) {

// load all grunt tasks
require('load-grunt-tasks')(grunt);

// elapsed time at the end of the grunt task.
require('time-grunt')(grunt);

grunt.initConfig({

    //https://github.com/gruntjs/grunt-contrib-watch
    watch: {
        options: {
            livereload: true,
        },
        sass: {
                // watch the .scss files in the sass directory and children directories
                files: ['sass/*.scss'],
                // this task is run when the watch sees a .scss file changed
                tasks: ['sass'],

        },
        html: {
                // watch the .scss files in the sass directory and children directories
                files: ['*.html'],
                // this task is run when the watch sees a .scss file changed
        }
    },

    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
        dist: {
            files: [
                {
                    // sass output style
                    expand: true,
                    src: ['**/*.scss', '!**/_*.scss'],
                    cwd: 'sass',
                    dest: 'css',
                    ext: '.css'
                }
            ],
            options : {
                style : 'expanded' //compressed
            }
        }
    },

   // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
      build: {
        options: {
          browsers: ['last 2 versions', '> 1%']
        },
        files: [
          {
            src : ['**/*.css', '!**/*autoprefixed.css'],
            cwd : 'css',
            dest : 'css',
            ext : '.autoprefixed.css',
            expand : true
          }
        ]
      }
    },

    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    },

});

// default task which is run with the command `grunt`
// 'grunt watch' or 'grunt sass' to access the individual tasks.

grunt.registerTask('default', ['sass', 'autoprefixer']);

grunt.registerTask('dev', ['connect', 'watch']);

};