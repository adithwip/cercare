// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1385908171504811',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // This function is called when someone finishes with the Login
   // Button.  See the onlogin handler attached to it in the sample
   // code below.
     FB.getLoginStatus(function(response) {
       statusChangeCallback(response);
     });
   }

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      $('#login-btn').fadeOut('slow')
      $('#welcome').fadeIn('slow')
    }
  }

  function FBLogin() {
    FB.login(response => {
      console.log('fblogin response ', response)
      if (response.authResponse) {
        localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      } else {
        console.log('User cancelled login or did not fully authorized.');
      }
    }, {scope:
      'public_profile, email, publish_actions, user_posts'
    });
  }

  function getTimelineFB() {
    axios.get('http://localhost:3000/facebook/fbtimeline', {
      headers: {
        accesstoken:
        localStorage.getItem('fbaccesstoken')
      }
    })
    .then(data_timeline => {
      console.log(data_timeline);
    })
    .catch(err => {
      console.log(err);
    })
  }
