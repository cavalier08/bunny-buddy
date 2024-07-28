
function startButton() {

$(document).ready(function() {
  // Declare variables
  var maxHealth = 100;
  var curHealth = maxHealth; // It is generally better to use 'var', 'let', or 'const' for variable declarations

  // Update the displayed health values
  $('.total').html(curHealth + "/" + maxHealth);

  // Set the width of the health bar to 100%
  $(".health-bar").css({
    "width": "100%"
  });
});

let count = 100;
const timer = setInterval(function() {
  count--;
  //progressBar();
  let healthTest = document.getElementById("healthTest")
  healthTest.value = count;
 let testCount = document.getElementById("health-amount123");


 testCount.innerHTML = "HEALTH plus " + count;
    if (count === 0) {
   clearInterval(timer);
    /*reset character??*/
  }
}, 2000);

  
}

function progressBar() {
  var element = document.getElementById("health-stat");

  health = element.innerHTML;
  console.log(health);

  health = health/10;

  
  for (let i = 10; i > health; i --) {
      document.getElementById(i).style.backgroundColor = "blue";

      
  }

}



/*var maxHealth = 100;
curHealth = maxHealth;
$('.total').html(maxHealth + "/" + maxHealth);
$(".health-bar").css({
  "width": "100%"
});*/

/*
$(document).ready(function() {
  // Declare variables
  var maxHealth = 100;
  var curHealth = maxHealth; // It is generally better to use 'var', 'let', or 'const' for variable declarations

  // Update the displayed health values
  $('.total').html(curHealth + "/" + maxHealth);

  // Set the width of the health bar to 100%
  $(".health-bar").css({
    "width": "100%"
  });
});
*/

    