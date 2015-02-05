module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    concurrent: {
      watch: {
        tasks: ['watch', 'compass'],
        options: {
            logConcurrentOutput: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'style/scss',
          specify: 'style/scss/main.scss',
          cssDir: 'style/css',
          imagesDir: 'img',
          javascriptsDir: 'js',
          fontsDir: 'style/fonts',
          outputStyle: 'compressed',
          watch: true
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dist: {
        src: 'style/css/main.css',
        dest: 'style/css/main-prefixed.css'
      }
    },
    modernizr: {
      dist: {
        devFile: 'js/modules/modernizr.js',
        outputFile: 'js/modules/build-modernizr.js',
        // parseFiles: true,
        "files" : {
          "src": ['/style/css/main.css']
        },
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['modernizr'],
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['autoprefixer', 'modernizr'],
      }
    },
  });

  grunt.registerTask('default', 'concurrent');
};
