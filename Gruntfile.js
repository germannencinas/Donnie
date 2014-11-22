module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd:    "scss",
                    src:    ["*.scss"],
                    dest:   "dist",
                    ext:    ".css"
                }]
            }
		},

        watch: {
            files: ['*.html'],
            options: {
                nospawn: true,
                livereload: true
            },
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass']
            }
        }
		
	});

	grunt.registerTask('default', ['watch']);
};