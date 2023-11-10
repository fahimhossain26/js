//var num= [10,20,30,40,50];

var num=new Array();
for(i=0;i<5;i++)
{
    num[i]=parseInt(prompt("Enter number :"));
    
    
}

var sum=0;
for(i=0;i<5;i++)
{
    console.log(num[i]);
    sum=sum+num[i];
    
}
console.log(sum);


//sorting number 

var numbers=[45,3,6,21,2];
numbers.sort(function(a,b)
{
  return b-a;
})
console.log(numbers[0]);