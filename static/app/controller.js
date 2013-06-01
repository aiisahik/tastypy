/*global $*/
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'storage',
	'app',
	'views/signup'
	],
function($,_,Backbone,Marionette,Storage,App,SignupView) {
	'use strict';
	var storage = Storage.get();
	var Profile = Backbone.Model.extend({});
	var controller = Marionette.Controller.extend({
		home: function(){},
		signup: function(){
			var profile = new Profile();
	    	var view = new SignupView({
	    		model: profile
	    	});
	    	view.render();
			App.mainRegion.show(view);
	    }
	});
	return controller;
 });