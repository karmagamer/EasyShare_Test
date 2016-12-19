if (Meteor.isClient) {
	Template.dashboard.helpers({
    shareData: function() {
      return {title: '#DeMonetisation Ndtv article on DeMonetisation',
      summary: 'DeMonetisation article',
      url:'http://www.ndtv.com/opinion/with-notes-ban-disaster-struck-at-midnight-on-nov-8-1638693',
    article: 'DeMonetisation'
    }

  }, shareData2: function() {
		return {title: '#UPElection2017 Uttar Pradesh Geography',
		summary: 'UP election poll results',
		url:'https://en.wikipedia.org/wiki/Uttar_Pradesh',
	article: 'UP election'
	}

},
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
  ShareIt.init({
    siteOrder: ['facebook', 'twitter'],
    sites: {
      'facebook': {
        'appId': '1840408616235354',
        'version': 'v2.8',
        'buttonText': 'Share on FB'
      }
    },
    iconOnly: true,
    applyColors: false
  });

}
		//Template.dashboard.events({
//  'click .resend-verification-link' ( event, template ) {
//    Meteor.call( 'sendVerificationLink', ( error, response ) => {
  //    if ( error ) {
  //      Bert.alert( error.reason, 'danger' );
//      } else {
  //      let email = Meteor.user().emails[ 0 ].address;
  //      Bert.alert( `Verification sent to ${ email }!`, 'success' );
  //    }
//    });
//  }
//});
//{{#unless currentUser.emails.[0].verified}}
  //  <p class="alert alert-warning">You need to verify your email address before using GoDunk. <a href="#" class="resend-verification-link">Resend verification link</a>.</p>

  //{{else}}
    //<h3>From all the way Downtown!</h3>
    //<h3> Welcome</h3>
    //<img src="https://media.giphy.com/media/dpu95OTQ9rDPi/giphy.gif">

//  {{/unless}}
