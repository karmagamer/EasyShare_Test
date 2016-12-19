Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('home', {
		path:'/',
		template: 'home'
	});	this.route('userscore', {
			path:'/userscore',
			template: 'userscore',
			data: function(){
				return Meteor.user().profile.points;
			}
		});this.route('dashboard', {
				path:'/dashboard',
				template: 'dashboard',
				data: function(){
					templateData = {
						message: contents.find({email: Meteor.user().emails[0].address})
					};
					return templateData;
				}
			});
			

});

//Router.route( '/verify-email/:token', {
//  name: 'verify-email',
//  action( params ) {
//    Accounts.verifyEmail( params.token, ( error ) =>{
//      if ( error ) {
  //      Bert.alert( error.reason, 'danger' );
  //    } else {
  //      Router.go( '/' );
  //      Bert.alert( 'Email verified! Thanks!', 'success' );
  //    }
    //});
  //}
//});
