var container = document.getElementById("card-container");
var button = document.getElementById("drinkBtn");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a2643924fmsh0cb566851c2d3b0p11453fjsn7b544bc19636",
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

fetch(
  "https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso",
  options
)
  .then((response) => response.json())
  .then((data) => displayGames(data))
  .catch((err) => console.error(err));

function displayGames(games) {
  // for each game in the array...
  // if an NBA game exists
  // create a new game card
  for (var game of games) {
    var isNBAgame = game.sport_title == "NBA";

    if (isNBAgame) {
      // create a new card
      cardEl = document.createElement("div");

      cardEl.setAttribute("id", "game-card");
      cardEl.setAttribute("class", "col-sm-6");

      var card = document.createElement("div");
      card.setAttribute("class", "card");
      cardEl.appendChild(card);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      card.appendChild(cardBody);

      var teams = document.createElement("h5");
      teams.setAttribute("class", "teams");
      card.appendChild(teams);

      var awayTeam = document.createElement("div");
      awayTeam.setAttribute("id", "away-team");

      var homeTeam = document.createElement("div");
      homeTeam.setAttribute("id", "home-team");

      awayTeam.innerHTML = game.away_team;
      homeTeam.innerHTML = game.home_team;

      teams.appendChild(awayTeam);
      var at = document.createTextNode("@");
      teams.appendChild(at);
      teams.appendChild(homeTeam);

      var buttonWrap = document.createElement("div");
      buttonWrap.setAttribute("class", "button-wrap");

      var addGameBtn = document.createElement("a");
      addGameBtn.setAttribute("href", "#");
      addGameBtn.setAttribute("class", "btn btn-primary saveBtn");
      buttonWrap.appendChild(addGameBtn);

      card.appendChild(buttonWrap);
      addGameBtn.textContent = "Add to Tracklist";

      window.container.appendChild(cardEl);
    }
  }
  // populate card with Away Team
}

$(document).ready(function () {
  $(document).on("click", ".saveBtn", function () {
    event.preventDefault();
    var awayTeam = $(this)
      .parent()
      .siblings(".teams")
      .children("#away-team")
      .text();
    var homeTeam = $(this)
      .parent()
      .siblings(".teams")
      .children("#home-team")
      .text();
    var awayText = JSON.stringify(awayTeam);
    var homeText = JSON.stringify(homeTeam);
    localStorage.setItem(awayText + " @ " + homeText, "");
  });
});

$(document).ready(function () {
  $(document).on("click", "#show-games", function () {
    $("#saved-games").empty();
    var keys = Object.keys(localStorage),
      i = keys.length;

    keys.forEach((element) =>
      $("#saved-games").append("<div>" + element.replace(/\"/g, "") + "</div>")
    );
  });
});

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "495246583emsh15deb529f27d5d1p14c766jsn5809976c5634",
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  },
};
fetch("https://the-cocktail-db.p.rapidapi.com/random.php", options2)
  .then((response) => response.json())
  .then((rawData) => displayDrinks(rawData))
  .catch((err) => console.error(err));

function displayDrinks(drinks) {
  let drink = drinks.drinks[0].strDrink;
  document.getElementById("randomDrink").textContent = drink;
}
$(document).ready(function () {
  $(document).on("click", "#deleteBtn", function () {
    localStorage.clear();
    location.reload();
  });
});

//console.log(tickerText);
let ticker = document.getElementById("ticker-item");

for (var key in localStorage) {
  if (key.includes("@")) {
    let tickerText = key.toString();
    ticker.append(`${tickerText} || `);
    console.log("key: ", key);
  }
}
