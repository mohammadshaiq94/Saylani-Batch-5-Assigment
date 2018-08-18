let opps = ['-','+','*','/'];
let answer = undefined;
let mainFunc = function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("questionDiv").style.display = "block";
    let gen1 = Math.floor(Math.random()* 10);
    let gen2 = Math.floor(Math.random()* 10);
    let gen3 = Math.floor(Math.random()* 10);
    let gen4 = Math.floor(Math.random()* 10);
    let opp1 = Math.floor(Math.random()* opps.length);
    let opp2 = Math.floor(Math.random()* opps.length);
    let opp3 = Math.floor(Math.random()* opps.length);
    
    let question = gen1 + opps[opp1] + gen2 + opps[opp2] + gen3 + opps[opp3] + gen4;
    answer = eval(question);
    console.log(eval(question))
    document.getElementById("question").innerHTML = question;
}

let checkAns = function(){
    let input = document.getElementById("answer").value;
    if(input == answer){
        document.getElementById("questionDiv").style.display = "none";
        document.getElementById("status").innerHTML = "Yes, your right";
    }else{
        document.getElementById("questionDiv").style.display = "none";
        document.getElementById("status").innerHTML = "NO, Do some Practise in Maths..";
    }
}

if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("/sw.js").then(function(){
        console.log("SW Registered")
    });
}