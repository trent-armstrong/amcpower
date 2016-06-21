module.exports = function(grunt) {

    grunt.initConfig({

        // Minimize JavaScript
        uglify: {
            my_target: {
                files: {
                    'public/dist/amc-power.min.js': 'public/js/**/*.js'
                }
            }
        },

        // Compiles SASS
        sass: {
            dist: {
                files: {
                    'public/dist/amc-power.css': 'public/sass/main.scss'
                }
            }
        },

        // Minimize CSS
        cssmin: {
            target: {
                files: {
                    'public/dist/amc-power.min.css': 'public/dist/amc-power.css'
                }
            }
        },

        // Watch for changes.
        watch: {
            css: {
                files: 'public/sass/**/*.scss',
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: 'public/js/**/*.js',
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },

        // TODO: Minify HTML.
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default',
        [
            'uglify', 'sass',
            'cssmin'
        ]
    );
    grunt.registerTask('dev', ['watch']);

};