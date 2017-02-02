// URL for the JSON file.  Normally it comes from the line below, but due to http/https issues I saved a local copy.
// var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';

var url = 'https://jeffbautista.github.io/NBA-combined-player-weight/profiles.JSON';

// When the button is clicked, run a callback function
$('#quote').click(function() {

  // Retrieve the data from the endpoint 
  // Store the player data in a variable
  $.getJSON (url, function(data) {
    var playerData = data['resultSets'][0]['rowSet'];
 
    // Use array.reduce() to find the combined player weight
    var total = 0;
    playerData.forEach(function(a) {
      total+= a[7].valueAsNumber;
      console.log(typeof a[7]);
    });
    
    // var total = playerData.reduce(function(a,b) 
    //   return a[7]+b[7];                  
    // });

    // Iterate through playerData array and build a string
    var output = "<li>The combined weight of all players is " + total + " pounds.</li>"
    
    // Output string to HTML
    var textBlock = document.getElementById('text-block');
    textBlock.innerHTML = output;
      
  });

});
