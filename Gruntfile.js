'use strict';

// Directory reference:
//   css: stylesheets
//   javascript: javascripts
//   images: images
//   fonts: fonts

module.exports = function (grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Configurable paths
        yeoman: {
            css: 'stylesheets'
        },
        watch: {
            less: {
                files: ['<%= yeoman.css %>/*.{less}'],
                tasks: ['less:compile']
            },
            jekyll: {
                files: [
                    '_drafts/*.{html,md}',
                    '_includes/*.{html,md}',
                    '_layouts/*.{html,md}',
                    '_posts/*.{html,md}',
                    'documents/**',
                    'images/*',
                    'javascripts/*.js',
                    'presentations/*.{html,md}',
                    'stylesheets/*.css',
                    '*.{html,md,markdown,xml,txt,ico}'
                ],
                tasks: ['jekyll:compile']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '_site/**'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '_site'
                    ]
                }
            }
        },
        less: {
            compile: {
                options: {
                    paths: ['/stylesheets/'],
                    rootpath: 'stylesheets/',
                    cleancss: false,
                    ieCompat: true
                },
                files: {
                    'stylesheets/presentation.css': 'stylesheets/presentation.less',
                    'stylesheets/styles.css': 'stylesheets/styles.less'
                }
            }
        },
        jekyll: {
            options: {
                bundleExec: false,
                config: '_config.yml',
                src: '.'
            },
            compile: {
                options: {
                    dest: './_site'
                }
            },
            check: {
                options: {
                    doctor: true
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'javascripts/**/main.js'
            ]
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: [
                '<%= yeoman.css %>/*.css',
                '!<%= yeoman.css %>/prism.css'
            ]
        },
        lesslint: {
            options: {
                imports: ['<%= yeoman.css %>/*.less']
            },
            src: [
                '<%= yeoman.css %>/styles.less',
                '<%= yeoman.css %>/presentations.less',
            ]
        }
    });

    // Define Tasks
    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'less:compile',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('check', [
        'jekyll:check',
        'less:compile',
        'jshint:all',
        'csslint',
        'lesslint'
    ]);

    grunt.registerTask('default', ['serve']);
};
