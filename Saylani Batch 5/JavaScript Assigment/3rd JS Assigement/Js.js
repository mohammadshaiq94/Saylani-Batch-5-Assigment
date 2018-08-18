
// Question No 1

var name = prompt("")
alert( "Hi, " + name )



// Question No 2


var number = prompt("Enter your Number")
alert(number * 1)
alert(number * 2)








//Question No 3


var city = prompt("")

if (city === "karachi") {
            alert("Welcome to city of lights")
}







//Question No 4



var gender = prompt("Enter Yoyr Gender")
 if(gender === "male") {

    alert("Good Morning Sir.")
 }


 else if (gender === "female") {

    alert(" Good Morning Ma’am.")

 }

 else{
      alert ("Please ! type correct gender") 
 }

 



 //Questio No 5


var signale = prompt("Please ! Enter Your color red yellow green")

if (signale === "red"){

    alert("vehicles must stop")
}


else if (signale === "yellow"){

    alert("vehicles should get ready to move")


}


else if (signale === "green"){

    alert("vehicles can move now")
    
}


else{
    alert("Plese ! type the correct color")
}




//Question No 6


var currentAge = prompt("Enter Your age here !");

if (currentAge >= 20){

    alert("You are welcome")
    
}


else {
    
    
   alert ("you are smaller")


}



//Question No 7


var fuel = prompt("Please Enter your remaning fuel");


 if(fuel < 0.25){
     alert("Please refill the fuel in your car");
 }

 else{
     alert("you Did not refill the fuel in your car");
 }




//Question No 8


var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
//beacuse it will increase before statement  pre increment


var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
//beacuse it will increase after statement  post increment this is false 


var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
 //beacuse data type are different  this is false 
}



if (c == 13){
    alert("condition 2 is true");
    //beacuse we use post increment an above and that c become 13  this is true
   }


   if (c++ < 14){
    alert("condition 3 is true");
    //beacuse it will increase after statement  post increment and c value is less than 14 that is true
   }



   if(c == 14){
    alert("condition 4 is false");
    //beacuse we use post increment in above case that is true
   }




//Question No 9

var english = prompt("Enter your English Marks" +" English paper is 80 marks")
var urdu = prompt("Enter your urdu Marks" + " English paper is 80 marks")
var bio = prompt ("Enter your bio Marks" +" English paper is 80 marks")
var computer = prompt("Enter your Computer Marks" +" English paper is 80 marks")


var total = parseInt(english) + parseInt(urdu) + parseInt(bio) + parseInt(computer);

var finalTotal = (total * 100 / 320 );

var percentage = finalTotal.toFixed(2);

var percent = ("Your percentae % " +  percentage )


if (percentage >= 80){



    alert( percentage + " Excellent Your Grade is A-one ");
}


else if (percentage >= 70){

    alert( percentage + "Good Your Grade is A ");
}


else if (percentage >= 60){

    alert( percentage + "You need to improve Your Grade is b ");
}


else {

    alert( percentage + " Fail Sorry ");
}




//Question 10


var item = prompt("Please Enter item1")
var price1 = prompt("Please Enter item1 price")
var quantity1 = prompt("Please Enter quantity item1 ")

var item2 = prompt("Please Enter item2")
var price2 = prompt("Please Enter item2 price")
var quantity2 = prompt("Please Enter quantity item2")


var Shipping = 300;
alert("Your Shipping Charges is 300")




var TotalAmountItem1 =  parseInt(price1) * parseInt(quantity1) 
var TotalAmountItem2 = parseInt(price2) * parseInt(quantity2)
var TotalAmount = (TotalAmountItem1 + TotalAmountItem2 + Shipping)

var disocunt = (10/100 * TotalAmount); 
var totalCost = (TotalAmount - disocunt)


if (TotalAmount >= 2000) {

    alert("Your are get 10 % discount on 2,000 above shopping Rs " +  disocunt);
    alert("Your Final Cost you order after u discont " + totalCost)
   

}


else {

    alert(TotalAmount);
}





//Question No 11


var num = 4
var secertnum = prompt("Enter number from 1 to 10")



if (secertnum == num ){



    alert("Bingo! Correct answer")
}


else if (secertnum ==  +5) {


alert("Close enough to the correct answer.")


}


else{
    alert("Pleae Try Again Later.")



}





//Question No 12



var no = prompt ("enter the no");
if(no%3==0){
    alert("its a divide by 3")
}
else{
    alert("its a not divide by 3")
}




//Question No 13

var teamAName = prompt("Please Enter Team A Name ")
var teamBName = prompt("Please Enter Team B Name ")

var teamATotalScore = prompt("Enter Team A Score ")
var teamBTotalScore = prompt("Enter Team B Score ")


if (teamATotalScore > teamBTotalScore) {


    alert("Team A Won ! " + teamAName)
}


else if (teamATotalScore < teamBTotalScore){
    alert("Team B Won ! " + teamBName)
}

else if(teamATotalScore == teamBTotalScore){


    alert("Matach is tie")
}






//Question No 14


var check = prompt("Enter");
var input = parseInt(check)


if (check == input){


    alert("Itz a Number")
}

else if (check == "true" || check == "false"){


    alert("Itz a Bolean")
}

else{

    alert("Itz a String")
}





// //Question No 15

var no = prompt ("enter the no");
if(no%2==0){
    alert("its a even number")
}
else{
    alert("its a odd number")
}






// //Question 16

var wheather = prompt("Enter Wheather Detail")


if (wheather >= 40) {

    alert("Its too hot outside")
}

else if (wheather >= 30 ){

    alert("The Weather today is Normal.")
}

else if (wheather >= 20){


    alert("Today’s Weather is cool.")
}


else if (wheather >= 10){

    alert("OMG! Today’s weather is so Cool.")
}





//Question No 17

var x = prompt("Enter First Number")
var y = prompt("Type operator + - * /")
var z = prompt("Enter Second Number")

var plus = ("+") 
var subtrac = ("-") 
var divide = ("/") 
var multiply = ("*") 


 



if  (y == plus) {

alert(parseInt(x) + parseInt(z))


}


else if (y == subtrac){

    alert(parseInt(x) - parseInt(z))
}



else if (y == divide){

    alert(parseInt(x) / parseInt(z))
}


else if (y == multiply){

    alert(parseInt(x) * parseInt(z))
}





//Question No 18

var day = prompt("Enter Day Name")

var Weekday = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"];


if  (day == Weekday == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" ) {

    alert("It's a week day")
}


else if (day == "Saturdat") {

    alert("It’s weekend.")

}

else{
    alert("Yay! It’s a holiday.")
}



//Question No 19

var score = prompt("Write your Score")



if (score >= 50 ){
    alert("You are passed.")
}



else {
    alert("Try Again ! .")
}





//Question No 20

var nume1 = prompt("Enter Your Number")
var nume2 = prompt("Enter Your Second Number")


    if (nume1 > nume2){
        alert ("The Grater No is " +  nume1 + " and " + nume2 + " is " + nume1)
    }

    else if (nume1 < nume2){
            alert ("The Smaller No is " + nume1 + " and " + nume2 + " is " + nume1)
        }
    


//Question No 21 


var translator = prompt("Write language code  e.g. en  chi  fre ")



if (translator == "en"){


    alert("Hello World !")

    
}


else if (translator == "chi") {


    alert("你好，世界")

    console.log(translator)
}


else if (translator == "fre"){

    alert("Bonjour le monde")
}


else{

    alert("Plase type the correcr language code that given above")
}


//Question No 22

var positive = prompt ("enter the no");

if(positive%2==0){
    alert("its a positive number")
}
else{
    alert("its a negative number")
}



// //Question No 23


 var none = prompt("Enter None")
var pluralizer = prompt("Enter Number")

alert( pluralizer + " "  + none)