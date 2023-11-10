var m= parseInt(prompt("enter starting number: "));
var n= parseInt(prompt("enter last  number: "));
sum=0 ;

for(var x=m; x<=n; x=x+1)
{
    sum=sum+x;
   
}
document.write(" toal sum is : " + sum);