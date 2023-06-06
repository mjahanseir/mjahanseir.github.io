


// Responsive Navigation Bar
function myFunction() {
  var x = document.getElementById("mytopMenu");
  if (x.className === "topMenu") {
    x.className += " responsive";
  } else {
    x.className = "topMenu";
  }
}
