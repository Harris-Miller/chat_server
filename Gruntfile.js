module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: true,
				ignores: ['node_modules/**/*.js']
			},
			files: {
				src: ['**/*.js']
			}
		},

		less: {
			styles: {
				files: {
					'public/styles/default.css': 'public/styles/default.less'
				}
			}
		},

		watch: {
			jshint: {
				files: ['*.js'],
				tasks: ['jshint']
			},
			less: {
				files: ['public/styles/*.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['jshint', 'less']);
};