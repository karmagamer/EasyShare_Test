/*Template.dashboard.events({
  'click .resend-verification-link' ( event, template ) {
    Meteor.call( 'sendVerificationLink', ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        let email = Meteor.user().emails[ 0 ].address;
        Bert.alert( `Verification sent to ${ email }!`, 'success' );
      }
    });
  }
});

/*<a class="twitter-timeline"  href="https://twitter.com/hashtag/DeMonetisation" data-widget-id="810649120033636353">#DeMonetisation Tweets</a>
Template.home.rendered = function () {
  ! function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){js=d.createElement(s);
      js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")};
*/
//{{#unless currentUser.emails.[0].verified}}
  //  <p class="alert alert-warning">You need to verify your email address before using GoDunk. <a href="#" class="resend-verification-link">Resend verification link</a>.</p>

  //{{else}}
    //<h3>From all the way Downtown!</h3>
    //<h3> Welcome</h3>
    //<img src="https://media.giphy.com/media/dpu95OTQ9rDPi/giphy.gif">

//  {{/unless}}
