// <div id="tweets-here"></div> 
window.addEvent('domready',function() {
  // get information
  var myTwitterGitter = new TwitterGitter($('username').value,{
  	count: 5,
  	onComplete: function(tweets,user) {
  		tweets.each(function(tweet,i) {
  			new Element('div',{
  				html: '<img src="' + user.profile_image_url.replace("\\",'') + '" align="left" alt="' + user.name + '" /> <strong>' + user.name + '</strong><br />' + tweet.text + '<br /><span>' + tweet.created_at + ' via ' + tweet.source.replace("\\",'') + '</span>',
  				'class': 'tweet clear'
  			}).inject('tweets-here');
  		});
  	}
  }).retrieve();
});
