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
                    '!src/bower_components/**/*.js'
                ]
            }
        },
        //RequireJS Automation
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src',
                    mainConfigFile: 'config.js',
                    out: 'dist/px-oauth.min.js',
                    name : 'px-oauth-directive',
                    optimize: 'none',
                    skipDirOptimize: false,
                    paths: {
                        angular: 'empty:',
                        'angular-ui-router': 'empty:',
                        ngstorage: 'bower_components/ngstorage/ngStorage.min',
                        'oauth-ng': 'bower_components/oauth-ng/dist/oauth-ng'
                    },
                    shim: {
                        'oauth-ng': {
                            deps: ['angular', 'ngstorage'],
                            exports: 'oauth-ng'
                        }
                    }
                }
            }
        },
        clean: {
            dist: {
                // TODO: Remove build artifacts
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'requirejs']);

};
