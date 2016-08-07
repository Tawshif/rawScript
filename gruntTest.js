module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Start of style grunt 
        sass_globbing: {
            desktop: {
                files: {
                    'resources/assets/sass/main.scss': [
                        'resources/assets/sass/common/**/*.scss',
                        'resources/assets/sass/pages/**/*.scss'
                    ]
                },
                options: {
                    useSingleQuotes: true,
                    signature: false
                }
            },
            mobile: {
                files: {
                    'resources/assets/sass/main_mobile.scss': [
                        'resources/assets/sass/common/**/*.scss',
                        'resources/assets/sass/pages_mobile/**/*.scss'
                    ]
                },
                options: {
                    useSingleQuotes: true,
                    signature: false
                }
            }
        },
        sass: {
            desktop: {
                options: {
                    "sourcemap=none": '',
                    // nested, compact, compressed, expanded
                    'style': 'expanded'
                },
                files: {
                    'public/style/style.css': 'resources/assets/sass/main.scss'
                }
            },
            mobile: {
                options: {
                    "sourcemap=none": '',
                    // nested, compact, compressed, expanded
                    'style': 'expanded'
                },
                files: {
                    'public/style/style_mobile.css': 'resources/assets/sass/main_mobile.scss'
                }
            }
        },
        cssmin: {
            desktop: {
                files: [{
                    expand: true,
                    cwd: 'public/style',
                    src: ['style.css', '!*.min.css'],
                    dest: 'public/style',
                    ext: '.min.css'
                }]
            },
            mobile: {
                files: [{
                    expand: true,
                    cwd: 'public/style',
                    src: ['style_mobile.css', '!*.min.css'],
                    dest: 'public/style',
                    ext: '.min.css'
                }]
            }
        },
        // End of style grunt 

        watch: {
            js: {
                files: ['resources/assets/js/**/*.js'],
                tasks: ['concat:vendorJsDev', 'concat:appJsDev', 'concat:vendorMobileJsDev', 'concat:appMobileJsDev']
            },
            sass: {
                files: 'resources/assets/sass/**/*.scss',
                tasks: ['sass_globbing', 'sass', 'concat:mobile_css', 'concat:desktop_css', 'cssmin', 'clean:css']
            }
        },
        concat: {
            vendorJsProd: {
                src: [
                    'resources/assets/vendor/jquery/dist/jquery.min.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.min.js',
                    'resources/assets/vendor/jquery/dist/jquery-ui.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.columnFilter.js',
                    'resources/assets/vendor/moment/min/moment.min.js',
                    'resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/js/bootstrap-datepicker.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/locales/bootstrap-datepicker.ja.min.js',
                    'resources/assets/vendor/select2-3.5.4/select2.min.js',
                    'resources/assets/vendor/bxslider-4/dist/jquery.bxslider.min.js',
                    'resources/assets/vendor/d3/d3.min.js',
                    'resources/assets/vendor/c3/c3.min.js',
                    'resources/assets/vendor/jquery-bar-rating/dist/jquery.barrating.min.js',
                    'resources/assets/vendor/radar-chart-d3/src/radar-chart.min.js',
                    'resources/assets/vendor/tinymce/tinymce.min.js',
                    'resources/assets/vendor/tinymce/themes/modern/theme.min.js',
                    'resources/assets/vendor/tinymce/plugins/link/plugin.min.js',
                    'resources/assets/vendor/ath/addtohomescreen.js',
                    'resources/assets/vendor/angular/angular.min.js',
                    'resources/assets/vendor/angular/angular-animate.min.js',
                    'resources/assets/vendor/angular/angular-sanitize.min.js',
                    'resources/assets/vendor/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                    'resources/assets/vendor/angular-ui-select/dist/select.min.js',
                    'resources/assets/vendor/slick-carousel/slick/slick.min.js',
                    'resources/assets/vendor/angular-slick-carousel/dist/angular-slick.min.js',
                    'resources/assets/vendor/angular-ui/angular-ui.min.js'
                ],
                dest: 'public/js/prd/vendor/vendor_concat.js'
            },
            appJsProd: {
                src: 'resources/assets/js/app/**/*.js',
                dest: 'public/js/prd/app/app_concat.js'
            },
            // Mobile prd
            vendorMobileJsProd: {
                src: [
                    'resources/assets/vendor/jquery/dist/jquery.min.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.min.js',
                    'resources/assets/vendor/jquery/dist/jquery-ui.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.columnFilter.js',
                    'resources/assets/vendor/moment/min/moment.min.js',
                    'resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/js/bootstrap-datepicker.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/locales/bootstrap-datepicker.ja.min.js',
                    'resources/assets/vendor/select2-3.5.4/select2.min.js',
                    'resources/assets/vendor/bxslider-4/dist/jquery.bxslider.min.js',
                    'resources/assets/vendor/d3/d3.min.js',
                    'resources/assets/vendor/c3/c3.min.js',
                    'resources/assets/vendor/jquery-bar-rating/dist/jquery.barrating.min.js',
                    'resources/assets/vendor/radar-chart-d3/src/radar-chart.min.js',
                    'resources/assets/vendor/tinymce/tinymce.min.js',
                    'resources/assets/vendor/tinymce/themes/modern/theme.min.js',
                    'resources/assets/vendor/tinymce/plugins/link/plugin.min.js',
                    'resources/assets/vendor/ath/addtohomescreen.js',
                    'resources/assets/vendor/angular/angular.min.js',
                    'resources/assets/vendor/angular/angular-animate.min.js',
                    'resources/assets/vendor/angular/angular-sanitize.min.js',
                    'resources/assets/vendor/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                    'resources/assets/vendor/angular-ui-select/dist/select.min.js',
                    'resources/assets/vendor/slick-carousel/slick/slick.min.js',
                    'resources/assets/vendor/angular-slick-carousel/dist/angular-slick.min.js',
                    'resources/assets/vendor/angular-ui/angular-ui.min.js'

                ],
                dest: 'public/js/mobile/prd/vendor/vendor_concat.js'
            },
            appMobileJsProd: {
                src: 'resources/assets/js/mobile/**/*.js',
                dest: 'public/js/mobile/prd/app/app_concat.js'
            },
            vendorJsDev: {
                src: [
                    'resources/assets/vendor/jquery/dist/jquery.min.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.min.js',
                    'resources/assets/vendor/jquery/dist/jquery-ui.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.columnFilter.js',
                    'resources/assets/vendor/moment/min/moment.min.js',
                    'resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/js/bootstrap-datepicker.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/locales/bootstrap-datepicker.ja.min.js',
                    'resources/assets/vendor/select2-3.5.4/select2.min.js',
                    'resources/assets/vendor/bxslider-4/dist/jquery.bxslider.min.js',
                    'resources/assets/vendor/d3/d3.min.js',
                    'resources/assets/vendor/c3/c3.min.js',
                    'resources/assets/vendor/jquery-bar-rating/dist/jquery.barrating.min.js',
                    'resources/assets/vendor/radar-chart-d3/src/radar-chart.min.js',
                    'resources/assets/vendor/tinymce/tinymce.min.js',
                    'resources/assets/vendor/tinymce/themes/modern/theme.min.js',
                    'resources/assets/vendor/tinymce/plugins/link/plugin.min.js',
                    'resources/assets/vendor/ath/addtohomescreen.js',
                    'resources/assets/vendor/angular/angular.min.js',
                    'resources/assets/vendor/angular/angular-animate.min.js',
                    'resources/assets/vendor/angular/angular-sanitize.min.js',
                    'resources/assets/vendor/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                    'resources/assets/vendor/angular-ui-select/dist/select.min.js',
                    'resources/assets/vendor/slick-carousel/slick/slick.min.js',
                    'resources/assets/vendor/angular-slick-carousel/dist/angular-slick.min.js',
                    'resources/assets/vendor/angular-ui/angular-ui.min.js'
                ],
                dest: 'public/js/dev/vendor/vendor.js'
            },
            appJsDev: {
                src: 'resources/assets/js/app/**/*.js',
                dest: 'public/js/dev/app/app.js'
            },
            // Mobile dev
            vendorMobileJsDev: {
                src: [
                    'resources/assets/vendor/jquery/dist/jquery.min.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.min.js',
                    'resources/assets/vendor/jquery/dist/jquery-ui.js',
                    'resources/assets/vendor/jquery/dataTableJquery/jquery.dataTables.columnFilter.js',
                    'resources/assets/vendor/moment/min/moment.min.js',
                    'resources/assets/vendor/bootstrap/dist/js/bootstrap.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/js/bootstrap-datepicker.min.js',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/locales/bootstrap-datepicker.ja.min.js',
                    'resources/assets/vendor/select2-3.5.4/select2.min.js',
                    'resources/assets/vendor/bxslider-4/dist/jquery.bxslider.min.js',
                    'resources/assets/vendor/d3/d3.min.js',
                    'resources/assets/vendor/c3/c3.min.js',
                    'resources/assets/vendor/jquery-bar-rating/dist/jquery.barrating.min.js',
                    'resources/assets/vendor/radar-chart-d3/src/radar-chart.min.js',
                    'resources/assets/vendor/tinymce/tinymce.min.js',
                    'resources/assets/vendor/tinymce/themes/modern/theme.min.js',
                    'resources/assets/vendor/tinymce/plugins/link/plugin.min.js',
                    'resources/assets/vendor/ath/addtohomescreen.js',
                    'resources/assets/vendor/angular/angular.min.js',
                    'resources/assets/vendor/angular/angular-animate.min.js',
                    'resources/assets/vendor/angular/angular-sanitize.min.js',
                    'resources/assets/vendor/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                    'resources/assets/vendor/angular-ui-select/dist/select.min.js',
                    'resources/assets/vendor/slick-carousel/slick/slick.min.js',
                    'resources/assets/vendor/angular-slick-carousel/dist/angular-slick.min.js',
                    'resources/assets/vendor/angular-ui/angular-ui.min.js'
                ],
                dest: 'public/js/mobile/dev/vendor/vendor.js'
            },
            appMobileJsDev: {
                src: 'resources/assets/js/mobile/**/*.js',
                dest: 'public/js/mobile/dev/app/app.js'
            },
            desktop_css: {
                src: [
                    'resources/assets/vendor/bootstrap/dist/css/bootstrap.min.css',
                    'resources/assets/css/jquery-ui.css',
                    'resources/assets/vendor/font-awesome/css/font-awesome.min.css',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/css/bootstrap-datepicker3.min.css',
                    'resources/assets/vendor/select2-3.5.4/select2.css',
                    'resources/assets/vendor/bxslider-4/dist/jquery.bxslider.min.css',
                    'resources/assets/vendor/c3/c3.min.css',
                    'resources/assets/vendor/jquery-bar-rating/dist/themes/bars-1to10.css',
                    'resources/assets/vendor/radar-chart-d3/src/radar-chart.min.css',
                    'resources/assets/vendor/tinymce/skins/lightgray/skin.min.css',
                    'resources/assets/vendor/slick-carousel/slick/slick.css',
                    'resources/assets/vendor/ath/addtohomescreen.css',
                    'resources/assets/vendor/angular-ui-select/dist/select.min.css',
                    'public/style/style.css'
                ],
                dest: 'public/style/style.css'
            },
            mobile_css: {
                src: [
                    'resources/assets/vendor/bootstrap/dist/css/bootstrap.min.css',
                    'resources/assets/css/jquery-ui.css',
                    'resources/assets/vendor/font-awesome/css/font-awesome.min.css',
                    'resources/assets/vendor/bootstrap-datepicker-1.4.0-dist/css/bootstrap-datepicker3.min.css',
                    'resources/assets/vendor/select2-3.5.4/select2.css',
                    'resources/assets/vendor/bxslider-4/dist/jquery.bxslider.min.css',
                    'resources/assets/vendor/c3/c3.min.css',
                    'resources/assets/vendor/jquery-bar-rating/dist/themes/bars-1to10.css',
                    'resources/assets/vendor/radar-chart-d3/src/radar-chart.min.css',
                    'resources/assets/vendor/tinymce/skins/lightgray/skin.min.css',
                    'resources/assets/vendor/slick-carousel/slick/slick.css',
                    'resources/assets/vendor/ath/addtohomescreen.css',
                    'resources/assets/vendor/angular-ui-select/dist/select.min.css',
                    'public/style/style_mobile.css'
                ],
                dest: 'public/style/style_mobile.css'
            }
        },
        //End of concat
        uglify: {
            vendor: {
                files: {
                    'public/js/prd/vendor/vendor.js': ['public/js/prd/vendor/vendor_concat.js']
                },
                options: {
                    mangle: false,
                }
            },
            app: {
                files: {
                    'public/js/prd/app/app.js': ['public/js/prd/app/app_concat.js']
                },
                options: {
                    mangle: true,
                }
            },
            MobileVendor: {
                files: {
                    'public/js/mobile/prd/vendor/vendor.js': ['public/js/mobile/prd/vendor/vendor_concat.js']
                },
                options: {
                    mangle: false,
                }
            },
            MobileApp: {
                files: {
                    'public/js/mobile/prd/app/app.js': ['public/js/mobile/prd/app/app_concat.js']
                },
                options: {
                    mangle: true,
                }
            }
        },
        clean: {
            css: {
                src: [
                    'public/style/style.css',
                    'public/style/style_mobile.css'
                ]
            },
            js: {
                src: [
                    'public/js/prd/vendor/vendor_concat.js',
                    'public/js/prd/app/app_concat.js',
                    'public/js/mobile/prd/vendor/vendor_concat.js',
                    'public/js/mobile/prd/app/app_concat.js',
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    // Creating main.css
    grunt.loadNpmTasks('grunt-sass-globbing');
    // Concating js and css
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Uglify js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Uglify css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Clean concated files from build
    grunt.loadNpmTasks('grunt-contrib-clean');



    /*
     Command list
     
     grunt dev  
     grunt watch
     
     grunt deploy
     */

    // Start grunt mobile
    grunt.registerTask('mobile', ['sass_globbing:mobile', 'sass:mobile', 'concat:mobile_css', 'cssmin:mobile', 'clean:css', 'concat:vendorMobileJsDev', 'concat:appMobileJsDev']);

    // End grunt mobile

    grunt.registerTask('dev', ['sass_globbing:desktop', 'sass:desktop', 'concat:desktop_css', 'cssmin:desktop', 'clean:css', 'concat:vendorJsDev', 'concat:appJsDev']);


    // Start grunt deploy (js only)
    grunt.registerTask('jsdeploy', ['concat:vendorJsProd', 'concat:appJsProd', 'uglify', 'clean']);
    grunt.registerTask('mobile_jsdeploy', ['concat:vendorMobileJsProd', 'concat:appMobileJsProd', 'uglify', 'clean']);

    grunt.registerTask('deploy', ['concat:vendorJsProd', 'concat:appJsProd', 'concat:vendorMobileJsProd', 'concat:appMobileJsProd', 'uglify', 'clean']);

}
