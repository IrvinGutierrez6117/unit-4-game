// Crystal Variables
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };
  
  // Scores
  var Score = 0;
  var ScoreToBeat = 0;
  
  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;
  
//Function for getting random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var startGame = function() {
  
    // Reset the Current Score
    currentScore = 0;
  
    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(10, 120);
  //random # for crystals
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
  
    // Change the HTML to reflect all of these changes
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
  
  


    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);

  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
      alert("Sorry. try again");

  

      lossCount++;
  
      // Change Loss Count HTML
      $("#loss-count").text(lossCount);
  
      // Restart the game
      startGame();
    }
  
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
  

      winCount++;
  
      // Change Win Count HTML
      $("#win-count").text(winCount);
  
      // Restart the game
      startGame();
    }
  
  };
  

  var addValues = function(clickedCrystal) {
  
    // Change currentScore
    currentScore += clickedCrystal.value;
  

    $("#your-score").text(currentScore);
  
 
    checkWin();
  

  };

  startGame();
  
  $("#blue").click(function() {
    addValues(crystal.blue);
  });
  
  $("#red").click(function() {
    addValues(crystal.red);
  });
  
  $("#green").click(function() {
    addValues(crystal.green);
  });
  
  $("#yellow").click(function() {
    addValues(crystal.yellow);
  });
  