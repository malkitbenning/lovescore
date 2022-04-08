
//
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("score-btn").addEventListener("click", function(e) {
  var firstName = document.getElementById('first-name').value;
  var secondName = document.getElementById('second-name').value;
  if (firstName == ""){
    alert ("please enter your name ...");
  } else if (secondName == "") {
      alert ("please enter your possible matches name ...");
  } else {
    var score = randomIntFromInterval(35,100);
    if (score > 50) {
        document.getElementById("result-pic").src = "images/cat couple.jpg";
        scoreText = "Congratulations your Love Score is: " + score;
        document.getElementById("score-text").textContent = scoreText;

    } else {
      document.getElementById("result-pic").src = "images/g18.png";
      scoreText = "Oh No! Your Love Score is only: " + score;
      document.getElementById("score-text").textContent = scoreText;
    }


  }
});
