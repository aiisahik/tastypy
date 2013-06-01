define(['jquery','underscore','backbone','marionette','storage','text!views/signup.html'],
function($,_,Backbone,Marionette,storageObj,signupHTML){

	var storage = storageObj.get();
	var Profile = Backbone.Model.extend({});
	// var signupTemplate = _.template(signupHTML);
	var signupView = Marionette.ItemView.extend({
		template: "#signup-template",
		initialize: function(){
			
			this.model = new Profile();
			this.model.set({firstname: "Charlie"});
		},
		onBeforeRender: function(){
			console.log(this.model);
		},
		onRender: function(){
			console.log(this.el);
		}
	});
	return signupView;
});