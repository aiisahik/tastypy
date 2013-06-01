/*global $*/

define(['marionette','storage','controller'],
function(Marionette,storageObj,appController) {
	'use strict';
	var storage = storageObj.get();

  	var AppRouter = Marionette.AppRouter.extend({
	    appRoutes: {
	      "": "home",
	      ":supplierID/metrics" : "viewMetrics",
	      ":supplierID/posts": "viewPosts",
	      ":supplierID/posts/:postID": "viewPosts",
	      ":supplierID/rules/:npcID": "viewRules",
	      ":supplierID/npc": "viewNpcs",
	      ":supplierID/notes": "viewNotes",
	      ":supplierID/activity": "viewActivity",
	      ":supplierID": "supplierSwitch"
	    },
	    // controller: appController
  	});
	return AppRouter;
});