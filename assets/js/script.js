function searchApi(query, format) {
    var locQueryUrl = 'https://AmI7oSNWUm61D2MFJwKvY6ql2t46Ld7oucWadgCQkphEjOuV-FqFHrU0d1stfOO2/?fo=json';
  
    if (format) {
      locQueryUrl = 'https://AmI7oSNWUm61D2MFJwKvY6ql2t46Ld7oucWadgCQkphEjOuV-FqFHrU0d1stfOO2/' + format + '/?fo=json';
    }
  
    locQueryUrl = locQueryUrl + '&q=' + query;
  
    fetch(locQueryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (locRes) {
        // write query to page so user knows what they are viewing
        resultTextEl.textContent = locRes.search.query;
  
        console.log(locRes);
  
        if (!locRes.results.length) {
          console.log('No results found!');
          resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
          resultContentEl.textContent = '';
          for (var i = 0; i < locRes.results.length; i++) {
            printResults(locRes.results[i]);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }