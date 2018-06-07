$(document).ready(function(){

// Global Variables
var wins = 0;
var losses = 0;
// correctNumber is the computer-generated number that the user must achieve.
var correctNumber = Math.floor(Math.random() * 101+19);
// total is the running sum of the user's coins
var total = 0;

var coins = $(".coinImg");
// The values of the coins are assigned a random number 1-12
var knut = Math.floor(Math.random() * 11 +1);
var sickle = Math.floor(Math.random() * 11 +1);
var galleon = Math.floor(Math.random() * 11 +1);
var da = Math.floor(Math.random() * 11 +1);

var coinAudio = src="../audio/coin-drop-4.mp3";
var gameAudio = new Audio("../audio/harrysWondrousWorld.mp3");
gameAudio.play();

    
    //
    
    
    // Resetting the variables at the beginning of each round
    function reset() {
        // The computer generates a random number
        correctNumber = Math.floor(Math.random() * 101+19);
        // The player's running sum starts at 0 again
        total = 0;
        // The values of the coins are reassigned a random number 1-12 at the start of each round
        var knut = Math.floor(Math.random() * 11 +1);
        var sickle = Math.floor(Math.random() * 11 +1);
        var galleon = Math.floor(Math.random() * 11 +1);
        var da = Math.floor(Math.random() * 11 +1);
        // Running tallies for game variables
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#numberToGuess").html(correctNumber);
        $("#total").html(total);
        consoleLogGameVariables();
    }

    function userWinLose() {
        // If use has won, display alert, increment wins by 1
        if (total === correctNumber) {
            wins++;
            console.log("Mr. Potter has won.");
            reset();
            alert("Thank you for your deposit, Mr. Potter.");
        }
        // If user has surpassed the correctNumber sum, display alert, increment losses
        else if (total > correctNumber) {
            losses++;
            console.log("Mr. Potter has lost.");
            reset();
            alert("Count your coins again, Mr. Potter.");
        }
    }

    
    // ConsoleLog all the game data from each round
    function consoleLogGameVariables() {
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("correctNumber: " + correctNumber + " userTotal: " + total);
        console.log("Knut: " + knut + " Sickle: " + sickle + " Galleon: " + galleon + " DA Coin: " + da);
        console.log("_________________________________");
    }

    reset();

    // Window listens for clicks on any of the coins
    $(".coinImg").on("click", function() {
        // The computer listens for which coin was clicked and finds its value
        var chosenCoin = $(this).attr("value");
        // Cases of each coin being pressed and their corresponding values added to the user's running total
        if (chosenCoin == "knutValue") {
            total += knut;
        } else if (chosenCoin == "sickleValue") {
            total += sickle;
        } else if (chosenCoin == "galleonValue") {
            total += galleon;
        } else if (chosenCoin == "daValue") {
            total += da;
        } else {
            console.log("No coin selected.");
        }

    // Once a case has been chosen, update the user's running total
    $("#total").html(total);
    // Log all the variables for that round
    consoleLogGameVariables();
    // Then log the user's win or loss
    userWinLose();
    });
    
});
