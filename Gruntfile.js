module.exports = function(grunt) {

    grunt.initConfig({
        /**
         *  Get package meta data
         **/
        pkg: grunt.file.readJSON('package.json'),
        /** 
         *  Globbing sass files into single file
         **/
        sass_globbing: {
            unify: {
                files: {
                    'resources/main.scss': [
                        'resources/vendor/bourbon/app/assets/stylesheets/_bourbon.scss',
                        'resources/sass/**/*.scss'
                    ],
                },
                options: {
                    useSingleQuotes: true,
                    signature: false
                }
            }
        },
        /** 
         *  sass to css convertion
         **/
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/main.css': [
                        'resources/main.scss'
                    ]
                }
            }
        },

        /** 
         *  watch task configuration
         **/
        watch: {
            sass: {
                files: ['resources/sass/**/*.scss'],
                tasks: ['default']
            },
            js: {
                files: ['resources/js/**/*.js'],
                tasks: ['default']
            },
            livereload: {
              // Here we watch the files the sass task will compile to
              // These files are sent to the live reload server after sass compiles to them
              options: {
                    livereload: true 
                },
              files: ['dist/**/*'],
            },
        },

        /** 
         *  concat task configuration goes here.
         **/
        concat: {
            vendor: {
                src: [
                    'resources/vendor/jquery/dist/jquery.js'
                ],
                dest: 'dist/vendor.js',
            },
            main: {
                src: [
                    'resources/js/*.js'
                ],
                dest: 'dist/main.js',
            },
        }

    });

    // loading tasks
    grunt.loadNpmTasks('grunt-sass-globbing');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // registaring tasks
    grunt.registerTask('default', ['sass_globbing:unify', 'sass', 'concat', 'watch']);


}
