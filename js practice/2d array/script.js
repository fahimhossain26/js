//2d array..
//create a function  called highestRunScorer
//reive a 2d array caclled playerInfo
//Based on high score, Return the name of the player ;
 function highestRunScorer(playerInfo)
 {
var highestScore= playerInfo[0] [0];
var highestScore= playerInfo[0] [1];

for(var x=1;x<playerInfo.length;x++)
{
    if(highestScore<playerInfo[x][1])
    {
      highestScore =playerInfo[x][1]; 
      highestScore =playerInfo[x][0]; 

    }
}
return highestScore;

 }
 var playerInfo=[
    ["fahim",81],
    ["Rahim",70],
    ["Karim",96],
    ["naieem",88],
    ["rony",75],
    ["jony",92]
 ];
   var name= highestRunScorer(playerInfo);
   console.log(name);