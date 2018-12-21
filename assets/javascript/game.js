//Random numbers here
console.log("Cheater's Corner")
var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
var crystalNumber1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
console.log("Red Crystal = " + crystalNumber1);
var crystalNumber2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
console.log("Blue Crystal = " + crystalNumber2);
var crystalNumber3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
console.log("Yellow Crystal = " + crystalNumber3);
var crystalNumber4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
console.log("Green Crystal = " + crystalNumber4);

//Counters

var totalWins = 0;
var totalLosses = 0;
var guessedTotal = 0;


//Appends
$(".target-area").text(targetNumber);
$(".wins").text(totalWins);
$(".losses").text(totalLosses);

//Functions

function reset() {
  guessedTotal = 0;
  $(".guessed-total").html(guessedTotal);
  targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  $(".target-area").text(targetNumber);
  crystalNumber1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1)
  crystalNumber2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1)
  crystalNumber3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1)
  crystalNumber4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1)

}

function win() {
  alert("You won!");
  totalWins++;
  $(".wins").text(totalWins);
  reset();
}

function lose() {
  alert("You busted!");
  totalLosses++;
  $(".losses").text(totalLosses);
  reset()
}

$(".1red").on('click', function () {
  guessedTotal = guessedTotal + crystalNumber1;
  $(".guessed-total").text(guessedTotal);
  if (guessedTotal === targetNumber) {
    win();
  }
  else if (guessedTotal > targetNumber) {
    lose();
  }
})

$(".2blue").on('click', function () {
  guessedTotal = guessedTotal + crystalNumber2;
  $(".guessed-total").text(guessedTotal);
  if (guessedTotal === targetNumber) {
    win();
  }
  else if (guessedTotal > targetNumber) {
    lose();
  }
})

$(".3yellow").on('click', function () {
  guessedTotal = guessedTotal + crystalNumber3;
  $(".guessed-total").text(guessedTotal);
if (guessedTotal === targetNumber) {
    win();
  }
  else if (guessedTotal > targetNumber) {
    lose();
  }
})

$(".4green").on('click', function () {
  guessedTotal = guessedTotal + crystalNumber4;
  $(".guessed-total").text(guessedTotal);
  if (guessedTotal === targetNumber) {
    win();
  }
  else if (guessedTotal > targetNumber) {
    lose();
  }
});
