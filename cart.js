
//cart message
document.getElementById("btn-cart").onclick = function(){alert("Sorry\nUnfortunately, the cart button is not working right now.")};

//Add to cart message
// Get an array of buttons from the page
var buttons = document.getElementsByClassName("btn+2cart");

// Loop through the resulting array
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function() {
    alert("Sorry\nThe add to cart button is not working right now.");
  });
}