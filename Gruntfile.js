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
            }
        },

        /** 
         *  concat task configuration goes here.
         **/
        concat: {
            options: {
                separator: ';',
            },
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
        },

        // browserSync: {
        //     bsFiles: {
        //         src: [
        //             'index.html',
        //             'dist/main.css',
        //             'dist/main.js'
        //         ]
        //     },
        //     options: {
        //         server: './app'
        //     }
        // }


    });

    // loading tasks
    grunt.loadNpmTasks('grunt-sass-globbing');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-browser-sync');


    // registaring tasks
    grunt.registerTask('default', ['sass_globbing:unify', 'sass', 'concat', 'watch']);


}
