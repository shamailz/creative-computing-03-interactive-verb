/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}

for ( var i = 0; i < 200; i++) {
  // create a div
  var shape = document.createElement('div');

  //add class "shape" to div
  shape.classList.add('shape');

  // select container div
  var container = document.querySelector('.content');

  // add a div with class "shape" to container div
  container.append(shape);
}

// Selects all divs with class "shape"
var shapes = document.querySelectorAll('.shape');

// Loop over all of the shapes
shapes.forEach( function(shape, i) {
  //what happens to each shape

var percentage = i / 200 * 100;

  var color = hslColor( i + 120/ 4, percentage,50) ;
  shape.style.background=color;

  shape.style.border = i + 14
});






