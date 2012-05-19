
//
// Our project gruntfile
// =====================
//
// Type grunt --help to see the support tasks, or browse the support/grunt-*.js
// files for further informations.
//
// Type grunt lint to run jshint through the sources.
//
// Type grunt test (or npm test) to run the default test suite (wrapper to Mocha)
//
// Type grunt test:<subtarget> to run the tests on a subset of files.
//
// Test
// ----
//
// Tests are stored in test/tasks/*.js. They run agains the files in test/h5bp
// which is a submodule pointing to h5bp/html5-boilerplate repository.
//
// test/helpers/* include utility functions to run grunt in a spawned process
// for a given task.
//
// test/features/*.feature are Gherkin feature file (cucumber) from which tests
// can be autogenerated. These are not unit tests, and may be seen more as
// functional tests. test/features/steps/*.js may contain step definitions, and
// are used to bootstrap basic and shared codes / assertions throughout our
// test suite.
//
// test/fixtures/* includes files that gets either copied before running a test,
// or expected files that get compared to files when a task is complete.
// Usually, they're stored within a folder mapping the related task's name.
//
// Type open test/index.html to see the generated documentation from our tests,
// done using the really neat mocha documentation reporter.
//
// Unit tests for each helpers defined remains to be done.
//

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      grunt: ['grunt.js', 'tasks/*.js'],
      lib: ['lib/plugins/*.js']
    },
    watch: {
      files: '<config:lint.grunt>',
      tasks: 'lint:grunt'
    },
    jshint: {
      options: {
        es5: true,
        node: true,
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: false,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      }
    },
    test: {
      // each task is tested individually, with basic files comparison with
      // what is in test/fixtures/
      tasks: ['test/tasks/test-*.js']

      // css:    'test/tasks/test-css.js'
      // img:    'test/tasks/test-img.js'
      // tar:    'test/tasks/test-tar.js'
      // usemin: 'test/tasks/test-usemin.js'

      // default task with default options
      // runThemAll: ['test/tasks/default.js']
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');

  // load support for tasks, not part of the plugin functionnality.
  // This gruntfile is our dev gruntfile.
  grunt.loadTasks('./support/');
};
