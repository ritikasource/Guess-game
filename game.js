// setting the number for guess
var num=5;

//taking the guess from th user
var guess=Number(prompt("GUESS A NUMBER!"));

//checking the guess
if(guess===num)
alert("YOU GOT IT RIGHT!");

else if(guess>num)
alert("GUESS WAS A LARGER NUMBER");

else
alert("GUESS WAS A SMALLER NUMBER");