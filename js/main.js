var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

  xhttp.onload = function() {
    if (xhttp.status >= 200 && xhttp.status < 400) {
      var data = JSON.parse(xhttp.responseText);
      renderHTML(data);
    } else {
      console.log('We connected to the server but it returned an error.');
    }
  };

  xhttp.onerror = function() {
    console.log("Connection error");
  }

  xhttp.send();
  pageCounter ++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me")
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat "

    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    };

    htmlString += ' and dislikes '

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    };

    htmlString += '.</p>';
  }
  animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
