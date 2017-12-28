var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');

xhttp.onload = function() {
  var data = JSON.parse(xhttp.responseText);
  console.log(data[0]);
};
xhttp.send();
