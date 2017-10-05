module.exports = function (grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
        dev: {
            options: {
                config: 'config.rb',
                force: true
            }
        }
    },
    watch: {
        css: {
          files: ['scss/*.scss'],
          tasks: ['compass']
        },
    },
    browserSync: {
        bsFiles: {
            src : ['css/*.css', '*.php']
        },
        options: {
            watchTask: true,
            proxy: "localhost/ccbdc-framework/"
        }
    }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['compass', 'browserSync', 'watch']);
};