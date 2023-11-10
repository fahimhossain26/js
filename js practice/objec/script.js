//how to create an object
//how to print a value of an object 
//adding a construtor 
//adding function inside e constructor 



function Student(name,roll,age,language){
this.name=name;
this.roll=roll;
this.age=age;
this.language=language;


this.display=function(){
 
console.log(this.name);
console.log(this.roll);
console.log(this.age);
console.log(this.language);
}
}
var student1= new Student("ismail hossain Fahim",10,24,["banla","English"]);
var student2= new Student(" Fahim",20,25,["banla","English"]);
var student3= new Student("hossain",11,21,["banla","English"]);


student1.display();
student2.display();
student3.display();
console.log(student1);




/*var student= {
    name : "ismail hossain Fahim",
    roll:10,
    age:24,
    language:["banla","English"]
    */

