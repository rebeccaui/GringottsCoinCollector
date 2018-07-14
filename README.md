The Gringott's Coin Collector Game 

In this Harry Potter coin collecting game, the user arrives at Gringott’s Wizard Bank and must use the four magical coins (knut, sickle, galleon, and Dumbledore’s Army coin) to deposit the correct amount of money into the bank. 

The rules of the game: At the beginning of a new round, the bank generates a random number *** that the user must reach. However, each of the four coins also generate a new value between 1 and 12 at the start of each round. The player must click on the coin image to deposit that coins random amount. If the user reaches the number, they win that round, and start a new one. If the user reaches a value above the bank value, they lose that round, and start a new one.

This game uses javascript and jQuery to dynamically create each coin’s random values and the bank’s random value for each round. The biggest challenge I faced in the project was in determining the synchronicity of the conditionals within the game functions. The value of any clicked coin needed to be captured in a separate variable before it could be compared to each coin’s value in that round and subsequently added to the added to bank total.

Enjoy! 
https://rwieberdink.github.io/GringottsCoinCollector/
