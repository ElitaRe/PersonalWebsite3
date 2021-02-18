// Fig. 10.8: SumArray.js
// Summing the elements of an array with for and for...in
function start()
{
var theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var totall = 0, total2 = 0;
// iterates through the elements of the array in order and adds
// each element's value to totall
var length = theArray.length; // get array's length once before loop
for (var i = 0; i < length; ++i )
{
totall += theArray[ i];
} // end for
var results = "<p>Total using indices: " + totall + "</p>";
// iterates through the elements of the array using a for... in
// statement to add each element's value to tota12
for ( var element in theArray )
{
total2 += theArray[ element ];
} // end for
results += "<p>Total using for... in: " + totall + "</p>";
document.getElementById("output").innerHTML = results;
} // end function start
window.addEventListener("load", start, false);