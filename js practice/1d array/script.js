// one dimentional array 
//create a function called highestscore 
//reccive a 1 d array called scores 
// return the highst score .

function highestScore(scores)
{
 var max=scor[0];
 for(var x=1 ; x<scor.length;x++)
 {
    if(max<scor[x])
    {
        max=scor[x];
    }
    

 }
 return max;
}
 var scor=[20,90,40,66,15];
var maxScore =highestScore(scor);
console.log(maxScore);
