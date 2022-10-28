var container = document.getElementById("card-container")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a2643924fmsh0cb566851c2d3b0p11453fjsn7b544bc19636',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

fetch('https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso', options)
	.then(response => response.json())
	.then(data => displayGames(data))
	.catch(err => console.error(err));


function displayGames (games) {
    console.log(games)
    // for each game in the array...
    // if an NBA game exists 
    // create a new game card
    for(var game of games) {
        console.log(game.sport_title)
        var isNBAgame = game.sport_title == "NBA"

        if (isNBAgame) {
            console.log("it's NBA")
           
            // create a new card
            cardEl = document.createElement('div');

            cardEl.setAttribute('id','game-card');
            cardEl.setAttribute('class','col-sm-6');
            
            var card = document.createElement('div')
            card.setAttribute('class','card')
            cardEl.appendChild(card)

            var cardBody = document.createElement('div')
            cardBody.setAttribute('class','card-body')
            card.appendChild(cardBody)

            var teams = document.createElement('h5')
            teams.setAttribute('class','teams')
            card.appendChild(teams)

            var awayTeam = document.createElement('div')
            awayTeam.setAttribute('id','away-team')
            
            var homeTeam = document.createElement('div')
            homeTeam.setAttribute('id','home-team')
            
            
            awayTeam.innerHTML = game.away_team
            homeTeam.innerHTML = game.home_team
            
            teams.appendChild(awayTeam)
            var at = document.createTextNode("@")
            teams.appendChild(at)
            teams.appendChild(homeTeam)


            var addGameBtn = document.createElement('a')
            addGameBtn.setAttribute('href',"#")
            addGameBtn.setAttribute('class','btn btn-primary')

            card.appendChild(addGameBtn)
            addGameBtn.textContent = "Add to Tracklist"

            container.appendChild(cardEl)

        }
    }
    // populate card with Away Team

}

const options2 = {
	method: 'GET',
	headers: {
		Authentication: 'undefined',
		'X-RapidAPI-Key': '495246583emsh15deb529f27d5d1p14c766jsn5809976c5634',
		'X-RapidAPI-Host': 'cocktails.p.rapidapi.com'
	}
};

fetch('https://cocktails.p.rapidapi.com/api/v1/cocktails?name=mojito&description=made%20with%20rum&categories%5B0%5D=classic&categories%5B1%5D=old_school&rating=8&ingredients%5B0%5D=rum&ingredients%5B1%5D=whiskey&ingredients%5B2%5D=orange%20juice&iba=true&random=3', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// const options2 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '495246583emsh15deb529f27d5d1p14c766jsn5809976c5634',
// 		'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
// 	}
// };

// fetch('https://cocktails3.p.rapidapi.com/random', options2)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));