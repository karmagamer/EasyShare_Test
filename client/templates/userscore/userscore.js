Template.userscore.helpers({
	userEmail: function(){
		return Meteor.user().emails[0].address;
	},userfirstName: function(){
		return Meteor.user().profile.firstName;
	},userlastName: function(){
		return Meteor.user().profile.lastName;
	},userPoints: function(){
		return Meteor.user().profile.points;
	}

});
