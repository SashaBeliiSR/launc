function updateData() {
            var urlParams = new URLSearchParams(window.location.search);
            var gameId = urlParams.get('id');
            
            if (!gameId) {
                return;
            }
            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var response = JSON.parse(this.responseText);
                    var game = response.find(function(item) {
                        return item.id === gameId;
                    });
                    
                    if (!game) {
                        return;
                    }
                    
                    var titleElement = document.getElementById('game-title');
                    titleElement.innerHTML = game.title;
                    
                    document.getElementById('company').innerHTML = game.developer;
					document.getElementById('rating').innerHTML = "50/"+game.rating;
                    document.getElementById('description').innerHTML = game.description;
					document.getElementById('appid').innerHTML = game.id;
                    
                    document.getElementById('screen1').src = game.screen1;
                    document.getElementById('screen2').src = game.screen2;
                    document.getElementById('screen3').src = game.screen3;
                    
                    document.getElementById('icon').src = game.icon;
                }
            };
            xhttp.open("GET", "https://6455f3055f9a4f2361374d32.mockapi.io/games", true);
            xhttp.send();
        }
