//gussing game
//guess a number form 1 to 5 
//grnerate a random number between 1 to 5
///if the guess number match random number, than show msg won else lost. 
//run the game for 5 times 
// show the number of wons and lost


var numOfWin=0;
var numberOflose=0;
for(var i=1;i<=5;i++)
{
    var guessNum =parseInt(prompt("enter a number form 1 to 5"));
    var randomNumber = Math.floor(Math.random() *5)+1;
    if (guessNum ==randomNumber)
    {
        console.log("wou have won");
        numOfWin++;
    
    }
    else
    {
        console.log("you have lose , Random number was"+ randomNumber);
        numberOflose++;
    }

}
document.write("number of won"+ numOfWin ,"</br>");
document.write("number of lose"+ numberOflose);

