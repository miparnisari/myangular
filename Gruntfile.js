module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.initConfig({
        jshint: {
            all: ['src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    _: false,
                    $: false
                },
                browser: true,
                devel: true
            }
        }
    });
}