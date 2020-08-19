$(document).ready(function() {
			var colors = ["#FFE8D3", "#0B3324", "#FFF7F7", "#E9D9F3", "#BE8383","#8389BE"];
      var text = ["#8389BE", "#D2F3F5", "#8389BE", "#0F4934", "#E9D9F3", "#FFE8D3"];
			var rand = Math.floor(Math.random() * colors.length);
			$('.change').css("background-color", colors[rand]);
      $('.color').css("color", text[rand]);
      $('.fa').css("color", text[rand]);

});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
