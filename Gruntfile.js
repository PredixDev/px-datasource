module.exports = function(grunt) {
    'use strict';

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Jshint
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: [
                    'src/**/*.js',
                    '!bower_components/**/*.js'
                ]
            }
        },
        //RequireJS Automation
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'config.js',
                    out: 'dist/px-datasource.min.js',
                    include: ['px-datasource'],
                    name: '../bower_components/almond/almond',
                    optimize: 'none',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    skipDirOptimize: false,
                    wrap: {
                        startFile: 'build/start.frag',
                        endFile: 'build/end.frag'
                    },
                    paths: {
                        angular: 'empty:',
                        'underscore': 'empty:'
                    }
                }
            }
        },

        //Clean test directory
        clean: {
            dist: ['dist']
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'jshint', 'requirejs']);

    grunt.registerTask('dist', ['default']);
};
