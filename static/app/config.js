// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    marionette: "../assets/js/libs/backbone.marionette",
    backbone_localstorage: "../assets/js/libs/backbone.localstorage",
    backbone_relational: "../assets/js/libs/backbone-relational",
    backbone_tastypie: "../assets/js/libs/backbone-tastypie",
    mustache: "../assets/js/libs/mustache",
    // icanhaz: "../assets/js/libs/iCanHaz",

    // Shim Plugin
    use: "../assets/js/plugins/use"
  },

  use: {
    backbone_tastypie: {
      deps: ["use!backbone", "use!underscore", "jquery"],
      attach: "Backbone"
    },

    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },
    marionette: {
      exports : 'Backbone.Marionette',
      deps: ["use!backbone", "use!underscore", "jquery"]
    },

    icanhaz: {
      deps: ["use!mustache"],
      attach: "ich"
    },

    underscore: {
      attach: "_"
    },

    mustache: {
      attach: "Mustache"
    },
    jqueryui : {
      deps : ['jquery']
    },
    bootstrap : {
      deps : ['jquery']
    },

  }
});
