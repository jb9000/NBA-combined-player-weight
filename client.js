// URL for the JSON file.  Normally it comes from the line below, but due to http/https issues I saved a local copy.
// var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';

var url = 'https://jeffbautista.github.io/NBA-combined-player-weight/profiles.JSON';

// When the button is clicked, run a callback function
$('#quote').click(function() {

  // Retrieve the data from the endpoint 
  // Store the player data in a variable
  $.getJSON (url, function(data) {
    var playerData = data['resultSets'][0]['rowSet'];
 
    // Use playerData.forEach() to find the combined player weight
    var total = 0;
    playerData.forEach(function(a) {
      total+= Number(a[7]);
    });
    
    // Iterate through playerData array and build a string
    var playerString = '<ul>';
    for (i=0; i<playerData.length; i++) {
      playerString+= '<li>';
      playerString+= b[3];
      playerString+= '</li>';
    }
    playerString+= '</ul>';

    var output = "The combined weight of the players below is " + total + " pounds."
    
    // Output string to HTML
    var intro = document.getElementById('intro');
    intro.innerHTML = output;
    var textBlock = document.getElementById('text-block');
    textBlock.innerHTML = playerString;
      
  });

});
