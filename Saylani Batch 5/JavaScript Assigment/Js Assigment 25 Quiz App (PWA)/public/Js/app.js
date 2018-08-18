function Quiz(question, answer, choices) {
    this.question = question;
    this.answer = answer;
    this.choices = choices;

}



var question1 = new Quiz("What does CSS stand for?" , "Cascading Style Sheets" , ["Computer Style Sheets" , "Cascading Style Sheets" , "Colorful Style Sheets" , "Creative Style Sheets"]);
var question2 = new Quiz("Where in an HTML document is the correct place to refer to an external style sheet?" , "In the head section" , ["In the head section" , "In the body section" , "At the end of the document" , "In the title section"]);
var question3 = new Quiz("Which HTML attribute is used to define inline styles?" , "style" , ["font" , "class" , "styles" , "style"]);
var question4 = new Quiz("Img is an/a?", "inline element", ["inline element", "block element", "illine-block element", "hidden element"]);
var question5 = new Quiz("Display inline property can't take this property?", "width,heigth", ["width,heigth", "color", "javascript", "markup"]);


var questions = [question1, question2, question3 , question4  , question5];

var noOfQuestion = 1;
var score = 0;
var p = document.getElementById("question");
var radios = document.getElementsByTagName("input");



p.innerText = questions[0].question
for (var i = 0; i < question1.choices.length; i++) {
    debugger
    radios[i].setAttribute("value", questions[0].choices[i]);
    document.getElementsByTagName("label")[i].innerHTML = questions[0].choices[i];
    
}


var index = document.getElementById("progress")
index.innerHTML = "Question " + noOfQuestion +  "/" + questions.length




function toSelect() {
    for (var n = 0; n < radios.length; n++) {
        if (radios[n].checked === true) {
            document.getElementById("next").disabled = false;
        }
    }
}



for (var m = 0; m < radios.length; m++) {
    radios[m].checked = false;
}
for (var o = 0; o < radios.length; o++) {
    if (radios[o].checked === false) {
        document.getElementById("next").disabled = true;
    }
}

function next(){


    if (noOfQuestion === 5) {
        // document.getElementById("questions").style.display = "none";
        var total = (score / questions.length) * 100;
        document.getElementById("next").style.display = "none"
        document.getElementById("title").innerHTML = "Result"
        // document.getElementById("question").innerHTML = total.toFixed(2) + "%" ;
        var index = document.getElementById("progress").style.display = "none"
        document.getElementById("options").style.display = "none";
      
        
        // document.getElementById("progress").style.display = "block";
        // document.getElementById("progress").innerHTML = score

        if(total >= 50){
            document.getElementById("question").innerHTML = "Congrates!! you are pass the Quiz with " + total + "%.";
        }
        else{
            document.getElementById("question").innerHTML = "Sorry you are failed " + total + "%.";
        }
    }  

    

    
    else {
        
    for(var i = 0; i < radios.length;i++){
        debugger
        if(radios[i].checked == true){
            if(radios[i].value === questions[noOfQuestion-1].answer){
                score++;
            }
        
        }
    }

p.innerHTML = questions[noOfQuestion].question;
    for (var j = 0; j < question1.choices.length; j++) {
        radios[j].setAttribute("value", questions[noOfQuestion].choices[j]);
        document.getElementsByTagName("label")[j].innerHTML = questions[noOfQuestion].choices[j];
        
        
    }
    noOfQuestion++;


    for (var m = 0; m < radios.length; m++) {
        radios[m].checked = false;
    }
    for (var o = 0; o < radios.length; o++) {
        if (radios[o].checked === false) {
            document.getElementById("next").disabled = true;
        }
    }
    
   
}





var index = document.getElementById("progress")
index.innerHTML = "Question " + noOfQuestion +  "/" + questions.length



}




// function progress(){



// }



if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
