var a=10;
var b=2;

var add = a+b
var sub = a-b
var multiply = a*b
var divide = a/b

alert("Adding two Numbers = " +add) 
alert("After subtracting two Numbers = " +sub)
alert("After multiplication two Numbers = " +multiply)
alert("After division two Numbers = " +divide)


alert("Now Calculating Area of Triangle ");

var side1=5;
var side2=6;
var side3=7;

var total= side1+side2+side3;
var finalTotal = total/2

var one= finalTotal-side1;
var two= finalTotal-side2;
var three= finalTotal-side3;

var area = Math.sqrt(finalTotal*one*two*three);
alert("Area of Triangle = " + area+" cm^2");