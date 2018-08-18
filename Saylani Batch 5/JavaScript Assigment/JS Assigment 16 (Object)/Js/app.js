

function task1() {


var studentData = {

    name: "Riaz",
    age: 17,
    student_id: "11090"


}



alert("Name: " + studentData.name + "\n"   +  "Age:" + studentData.age +  "\n" + "ID:" +studentData.student_id)


}




function task2() {




var std_name = prompt("Enter your name");
var std_id = prompt("Enter your Student ID");
var html = +prompt("Enter marks you obtained in HTML out of 100");
var css = +prompt("Enter marks you obtained in CSS out of 100");
var JS = +prompt("Enter marks you obtained in JavaScript out of 100");
var BS = +prompt("Enter marks you obtained in Bootstrap out of 100");
var total = html + css + JS + BS;
var per = total / 400 * 100;

var std = {
    name: std_name,
    id: std_id,
    Html: html,
    Css: css,
    js: JS,
    bs: BS,
    Total: total,
    Per: per
};


alert("*             Mark Sheet of Student  *"  + "\n" + "Student name is " + std.name + "\n" + "Student's ID is " + std.id
    + "\n" + "Marks in html is " + std.Html + "\n" + "Marks in css is " + std.Css + "\n" + "Marks in Javascript is " + std.js
    + "\n" + "Marks in BootStrap is " + std.bs + "\n" +"Total Marks is " + std.Total + "\n" + "Percentage is " + std.Per);






}









function task3() {




var std_name1 = "Zia Khan";
var std_id1 = "J30052425301";
var html1 = 80;
var css1 = 90;
var JS1 = 90;
var BS1 = 70;
var total1 = html1 + css1 + JS1 + BS1;
var per1 = total1 / 400 * 100;


var marksheet = {
    name1: std_name1,
    id1: std_id1,
    Html1: html1 ,
    Css1: css1,
    js1: JS1,
    bs1: BS1 ,
    Total1: total1   ,
    Per1: per1
};



alert("*             Mark Sheet of Student 1 *"  + "\n" + "Student name is " + marksheet.name1 + "\n" + "Student's ID is " + marksheet.id1
    + "\n" + "Marks in html is " + marksheet.Html1 + "\n" + "Marks in css is " + marksheet.Css1 + "\n" + "Marks in Javascript is " + marksheet.js1
    + "\n" + "Marks in BootStrap is " + marksheet.bs1 + "\n" +"Total Marks is " + marksheet.Total1 + "\n" + "Percentage is " + marksheet.Per1);




//



var std_name2 = "Zia Khan";
var std_id2 = "J30052425300"
var html2 = 60;
var css2 = 70;
var JS2 = 65;
var BS2 = 85;
var total2 = html2 + css2 + JS2 + BS2;
var per2 = total2 / 400 * 100;

var marksheet2 = {
    name2: std_name2,
    id2: std_id2,
    Html2: html2 ,
    Css2: css2,
    js2: JS2,
    bs2: BS2 ,
    Total2: total2   ,
    Per2: per2
};




alert("*             Mark Sheet of Student 2 *"  + "\n" + "Student name is " + marksheet2.name2 + "\n" + "Student's ID is " + marksheet2.id2
    + "\n" + "Marks in html is " + marksheet2.Html2 + "\n" + "Marks in css is " + marksheet2.Css2 + "\n" + "Marks in Javascript is " + marksheet2.js2
    + "\n" + "Marks in BootStrap is " + marksheet2.bs2 + "\n" +"Total Marks is " + marksheet2.Total2 + "\n" + "Percentage is " + marksheet2.Per2);




if(per1 > per2){

    alert("Student_Two percentage then eligible for scholarship")
}

}