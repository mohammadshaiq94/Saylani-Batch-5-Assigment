

function insert(num){
document.form.textview.value = document.form.textview.value+num



}

function operator(operator){


    document.form.textview.value = document.form.textview.value+operator

    

}

function equal(){

    var exp = document.form.textview.value ;

    if (exp){
        document.form.answer.value = eval(exp)
    }
    
}

function clean(){
    document.form.textview.value = ""
    document.form.answer.value = ""

}

function back(){
    var exp = document.form.textview.value ;

    document.form.textview.value = exp.substring(0 ,exp.length-1)
}