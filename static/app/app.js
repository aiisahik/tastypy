/*global $*/
define(
  ['backbone','marionette','storage'],
  function(Backbone,Marionette,Storage){
    "use strict";

    var storage = Storage.get();
    
    var app = new Marionette.Application();
    
    app.addRegions({
      // supplierNavRegion: "#supplierNavRegion",
      // funcNavRegion: "#funcNavRegion",
      mainRegion: "#main",
    });
    

    return app;
});