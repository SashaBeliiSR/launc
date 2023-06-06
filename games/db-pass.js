function updateData() {
  var urlParams = new URLSearchParams(window.location.search);
  var passId = urlParams.get('id');

  if (!passId) {
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var game = response.find(function(item) {
        return item.id === passId;
      });

      if (!game) {
        return;
      }
	  
	  if(game.rating >= 5) {
		game.rating = 0;
	}

      var titleElement = document.getElementById('game-title');
      titleElement.innerHTML = game.title;

      document.getElementById('company').innerHTML = game.developer;
      document.getElementById('rating').innerHTML = game.rating;
      document.getElementById('size').innerHTML = game.size;
      document.getElementById('description').innerHTML = game.description;
      document.getElementById('appid').innerHTML = game.id;
      document.getElementById('donwload').href = game.url;

      document.getElementById('screen1').src = game.screen1;
      document.getElementById('screen2').src = game.screen2;
      document.getElementById('screen3').src = game.screen3;

      document.getElementById('icon').src = game.icon;
    }
  };
  xhttp.open("GET", "https://647f2f10c246f166da904909.mockapi.io/api/v1/marketplace", true);
  xhttp.send();
}

function rateGame(rating) {
  var urlParams = new URLSearchParams(window.location.search);
  var passId = urlParams.get('id');

  var user = localStorage.getItem('user');
  if (user) {
    var userName = JSON.parse(user).name;
    var ratingElement = document.getElementById('rating');
    var currentRating = parseInt(ratingElement.innerHTML);

    // Check if the rating is already set by the user for this game
    if (localStorage.getItem(passId)) {
      alert('You have already rated this game.');
      return;
    }

    // Update the rating
    var updatedRating = currentRating + rating;
    ratingElement.innerHTML = updatedRating;

    // Save the rating for the user and game
    localStorage.setItem(passId, 'rated');

    // Disable all star ratings
    var stars = document.querySelectorAll('.star');
    for (var i = 0; i < stars.length; i++) {
      stars[i].onclick = null;
      stars[i].onmouseover = null;
      stars[i].style.cursor = 'default';
    }

    // Send the updated rating to the server
    var data = {
      rating: updatedRating
    };

    fetch('https://647f2f10c246f166da904909.mockapi.io/api/v1/marketplace/' + passId, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
  } else {
    alert('Please log in to rate the game.');
  }
}
