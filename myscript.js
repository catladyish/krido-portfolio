var change = document.getElementById("change");
var hideMe = document.getElementById("hideMe");

var whyButton = document.getElementById("whyUsButton");
var homeButton = document.getElementById("homeButton");
var callKridoButton = document.getElementById("callKrido");

var homeText = "a Fido the dog, for your all your currency <span id='blinking'>_</span>"
var visitText = "call Krido at 712-364-7182,<br><br>or email at talktokrido@krido.net<br><br><br><br>No worries! We won't bite ;)"
var whyText = "Krido will supply you and your team<br><br>with all the essential tools you need to<br><br>succeed throughout your adventure.."

function switchText(textTo) {
  if (textTo == 'why') {
    change.innerHTML = whyText;
    hideMe.style.display = "none";

  } else if (textTo == 'visit') {
    change.innerHTML = visitText;
    hideMe.style.display = "none";

  } else {
    change.innerHTML = homeText;
    hideMe.style.display = "block";
  }
}
