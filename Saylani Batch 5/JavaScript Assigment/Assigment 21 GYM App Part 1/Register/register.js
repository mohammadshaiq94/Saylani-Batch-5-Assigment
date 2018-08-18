
if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", "[]");
}




var usernameError = document.getElementById("userNameError");
var emailError = document.getElementById("EmailError");
var passwordError = document.getElementById("PasswordError");
var confirmError = document.getElementById("confirmPasswordError");
var genderError = document.getElementById("genderError");



function onName() {
    // console.log('this ev',ev)
    debugger
    var username = document.getElementById("userName").value;
    usernameError.innerHTML = ""

    if (!username.length) {
        usernameError.innerHTML = "user name should be filled";
    } else if (username.length < 4) {
        usernameError.innerHTML = "Username's length should be greater than 3";
    } else if (username.indexOf(" ") > -1) {
        usernameError.innerHTML = "Space isn't Allowed!";





    }
    return false;


}


function onEmail() {

    
    var email = document.getElementById("email").value;
    emailError.innerHTML = ""

    var atTheRate = email.indexOf("@");
    if (!email.length) {
        emailError.innerHTML = "email should be filled";
    } else if (atTheRate == -1 || atTheRate == 0 || atTheRate >= email.length - 4) {
        emailError.innerHTML = "Invalid Email";


    }

    return false;


}



function onPass() {

    //password validation
    var password = document.getElementById("password").value;
    passwordError.innerHTML = ""

    if (!password.length) {
        passwordError.innerHTML = "enter your password";
    } else if (password.length <= 6) {
        passwordError.innerHTML = "password must be greater than 6";
    };


    var lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
        passwordError.innerHTML = "password must contain alphate & number ";
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (!password.match(numbers)) {
        passwordError.innerHTML = "password must contain alphate & number ";



    }


    return false;


}


function confrimPass() {

    var password = document.getElementById("password").value;

    // confirm password validation
    var cPassword = document.getElementById("cPassword").value;
    confirmError.innerHTML = ""
    if (!cPassword.length) {
        confirmError.innerHTML = "confirm the entered password";
    } else if (cPassword != password) {
        confirmError.innerHTML = "password not matched";


    };
    return false;


}


function onGender() {


    //     //gender validation

    var gender1 = document.getElementById("radio1").checked;
    var gender2 = document.getElementById("radio2").checked;
    genderError.innerHTML = ""
    if (!gender1 && !gender2) {
        genderError.innerHTML = "check anyone above";

    }

    return false;
}










function onSubmit() {


    onName()





    onEmail()





    onPass()



    confrimPass()



    onGender()


    NameCheck()

    emailcheck()



    if (usernameError.innerHTML == "" && emailError.innerHTML == "" && passwordError.innerHTML == "" && confirmError.innerHTML == "" && confirmError.innerHTML == "") {

        store()

        emptyfield()
    }

    else {




        return false;


    }















    function NameCheck() {

        var usersArray = JSON.parse(localStorage.getItem("users"));
        var userNameInput = document.getElementById("userName");
        var nameError = document.getElementById("userNameError");



        for (var k = 0; k < usersArray.length; k++) {
            if (userNameInput.value == usersArray[k].name) {
                nameError.innerHTML = "Name aleady exsist, try another one"
                return false;
            }

            nameError.innerHTML = "";
        }


    }


    function emailcheck() {


        //email checking

        var usersArray2 = JSON.parse(localStorage.getItem("users"));
        var emailcheck = document.getElementById("email");
        var emailError = document.getElementById("EmailError");


        for (var l = 0; l < usersArray2.length; l++) {
            if (emailcheck.value == usersArray2[l].email) {
                emailError.innerHTML = "email aleady exsist, try another one"
                return false;
            }


        emailError.innerHTML = "";
        }




    }














};






function emptyfield() {


    var username = document.getElementById("userName");
    username.value = ""
    var email = document.getElementById("email");
    email.value = ""
    var password = document.getElementById("password");
    password.value = ""
    var cPassword = document.getElementById("cPassword");

    cPassword.value = ""
    // var gender1 = document.getElementById("radio1").checked;
    // var gender2 = document.getElementById("radio2").checked;



}













// storing input from register-form


function store() {


    var userarray = JSON.parse(localStorage.getItem("users"));


    userarray.push(
        {
            name: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,

        }


    )
    localStorage.setItem("users", JSON.stringify(userarray));





    // console.log(localStorage.getItem("users"))






}

