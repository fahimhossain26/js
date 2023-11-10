 var m=parseInt(prompt("Enter first number :"));
 var n=parseInt(prompt("Enter last  number :"));

sum=0;
var i=m;
while(i<=n)
{
    sum=sum+i;
    i=i+1;
}
document.write(" "+ sum);