x = 0;

document.getElementById("dice").innerHTML = `
<div class="first-face">
</div>
`;

dice1 = `        
<div class="first-face">
<span class="pip"></span>
</div>
`;

dice2 = `
<div class="second-face">
<span class="pip"></span>
<span class="pip"></span>
</div>
`;

dice3 = `
<div class="third-face">
<span class="pip"></span>
<span class="pip"></span>
<span class="pip"></span>
</div>
`;

dice4 = `
<div class="fourth-face">
<div class="column">
  <span class="pip"></span>
  <span class="pip"></span>
</div>
<div class="column">
  <span class="pip"></span>
  <span class="pip"></span>
</div>
</div>
`;

dice5 = `
<div class="fifth-face">
<div class="column">
  <span class="pip"></span>
  <span class="pip"></span>
</div>
<div class="column">
  <span class="pip"></span>
</div>
<div class="column">
  <span class="pip"></span>
  <span class="pip"></span>
</div>
</div>
`;

dice6 = `
<div class="sixth-face">
<div class="column">
  <span class="pip"></span>
  <span class="pip"></span>
  <span class="pip"></span>
</div>
<div class="column">
  <span class="pip"></span>
  <span class="pip"></span>
  <span class="pip"></span>
</div>
</div>
`;

function addBet(amount) {
  bet = document.getElementById("bet").innerHTML;
  balance = document.getElementById("balance").innerHTML;
  if (amount == "plus25") {
    if (balance < 0 || balance == 0) {
      alert("You dont have enough balance");
    } else {
      var bet = parseInt(document.getElementById("bet").innerText);
      var currentBalance =
        parseInt(document.getElementById("balance").innerHTML) - 25;
      document.getElementById("balance").innerHTML = currentBalance;
      var addToBet = bet + 25;
      document.getElementById("bet").innerHTML = addToBet;
    }
  } else if (amount == "plus50") {
    if (balance < 0 || balance == 0) {
      alert("You dont have enough balance");
    } else {
      var bet = parseInt(document.getElementById("bet").innerText);
      var currentBalance =
        parseInt(document.getElementById("balance").innerHTML) - 50;
      document.getElementById("balance").innerHTML = currentBalance;
      var addToBet = bet + 50;
      document.getElementById("bet").innerHTML = addToBet;
    }
  } else if (amount == "minus25") {
    if (bet == 0) {
      console.log("no...");
    } else {
      var bet = parseInt(document.getElementById("bet").innerText);
      var currentBalance =
        parseInt(document.getElementById("balance").innerHTML) + 25;
      document.getElementById("balance").innerHTML = currentBalance;
      var addToBet = bet - 25;
      document.getElementById("bet").innerHTML = addToBet;
    }
  } else if (amount == "allin") {
    var bet = parseInt(document.getElementById("bet").innerText);
    var currentBalance =
      parseInt(document.getElementById("balance").innerHTML) + bet;
    document.getElementById("balance").innerHTML = 0;
    var addToBet = currentBalance;
    document.getElementById("bet").innerHTML = addToBet;
  } else if (amount == "clear") {
    var balance = document.getElementById("balance").innerHTML
    var bet = document.getElementById("bet").innerHTML
    document.getElementById("bet").innerHTML = 0
    var sum = parseInt(bet) + parseInt(balance)
    document.getElementById("balance").innerHTML = sum
  }
}

function play(side) {
  x++;
  // random number generator
  var rndInt = Math.floor(Math.random() * 6) + 1;
  console.log(side);
  console.log(rndInt);


  // win/loose

  if (side == "1to3" && rndInt < 4) {
  // take the bet

  var bet = document.getElementById("bet").innerHTML
  document.getElementById("bet").innerHTML = parseInt(bet) + parseInt(bet)
  addBet("clear")
  
  } else if (side == "4to6" && rndInt > 3) {
    var bet = document.getElementById("bet").innerHTML
    document.getElementById("bet").innerHTML = parseInt(bet) + parseInt(bet)
    addBet("clear")
  } else {
    document.getElementById("bet").innerHTML = 0
    console.log("You lost...")
  }


  // dice rendering
  if (rndInt == 1) {
    document.getElementById("dice").innerHTML = dice1;
    lastplay = dice1
  } else if (rndInt == 2) {
    document.getElementById("dice").innerHTML = dice2;
    lastplay = dice2
  } else if (rndInt == 3) {
    document.getElementById("dice").innerHTML = dice3;
    lastplay = dice3
  } else if (rndInt == 4) {
    document.getElementById("dice").innerHTML = dice4;
    lastplay = dice4
  } else if (rndInt == 5) {
    document.getElementById("dice").innerHTML = dice5;
    lastplay = dice5
  } else if (rndInt == 6) {
    document.getElementById("dice").innerHTML = dice6;
    lastplay = dice6
  }
    if (x == 1) {
    console.log(lastplay);
    document.getElementById("lastDice1").innerHTML = lastplay;
  } else if (x == 2) {
    console.log(lastplay);
    document.getElementById("lastDice2").innerHTML = lastplay;
  } else if (x == 3) {
    console.log(lastplay);
    document.getElementById("lastDice3").innerHTML = lastplay;
  } else if (x == 4) {
    console.log(lastplay);
    document.getElementById("lastDice4").innerHTML = lastplay;
  } else if (x == 5) {
    console.log(lastplay);
    document.getElementById("lastDice5").innerHTML = lastplay;
  } else if (x == 6) {
    console.log(lastplay);
    document.getElementById("lastDice6").innerHTML = lastplay;
  } else {
    x = 0
    document.getElementById("lastDice1").innerHTML = lastplay;
  }

}
