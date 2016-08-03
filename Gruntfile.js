module.exports = function(grunt) {

    grunt.initConfig({
        /**
         *  Get package meta data
         **/
        pkg: grunt.file.readJSON('package.json'),
        /**	
         *  watch task configuration
         **/
        watch: {
            sass: {
                files: "resources/sass/*.scss",
                tasks: ['sass']
            }
        },
        /**	
         *  concat task configuration goes here.
         **/
        concat: {
            
        },
        /**	
         *  uglify task configuration goes here.
         **/
        uglify: {
            
        },



    });


}
