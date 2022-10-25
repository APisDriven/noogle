// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a2643924fmsh0cb566851c2d3b0p11453fjsn7b544bc19636',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

fetch('https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



    const optionsE1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8a2643924fmsh0cb566851c2d3b0p11453fjsn7b544bc19636',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/games?live=all', optionsE1)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

