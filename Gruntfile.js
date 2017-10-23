module.exports = function (grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        dist: {
            src: ['jquery/main.js'],
            dest: 'jquery/core.js'
        }
    },
    compass: {
        dev: {
            options: {
                config: 'config.rb',
                force: true
            }
        }
    },
    uglify: {
        dist: {
            src : 'jquery/core.js',
            dest : 'js/core.min.js'
        }
    },
    watch: {
        css: {
          files: ['scss/*.scss'],
          tasks: ['compass']
        },
        js: {
           files: ['jquery/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
                atBegin: true
            } 
        }
    },
    browserSync: {
        bsFiles: {
            src : ['css/*.css', '*.php', 'includes/*.php', 'js/*.js']
        },
        options: {
            watchTask: true,
            proxy: "localhost/ccbdc-framework/"
        }
    }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['concat:dist', 'compass', 'uglify', 'browserSync', 'watch']);
};