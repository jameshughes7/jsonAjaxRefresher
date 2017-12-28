var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');

xhttp.onload = function() {
  console.log(xhttp.responseText);
};
xhttp.send();
