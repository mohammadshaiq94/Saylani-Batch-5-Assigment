
if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", "[]");
}

var uName = JSON.parse(localStorage.getItem("users"));
var userName = document.getElementById("UserName")
var passwOrd = document.getElementById("Pass")
var userError = document.getElementById("error")





function login() {

    userError.innerHTML = ""


    for (var i = 0; i < uName.length; i++) {

        if (userName.value != uName[i].name) {

            userError.innerHTML = "Please Enter Correct User Name & Password"



        }


        for (var j = 0; j < uName.length; j++) {

            if (passwOrd.value != uName[i].password) {
                userError.innerHTML = "Please Enter Correct UserName &  Password"




            }



        }


        for (var j = 0; j < uName.length; j++) {

            if (userName.value == uName[i].name && passwOrd.value == uName[i].password ) {

                userError.innerHTML = ""
                window.location.href = "loginPage.html";




            }



        }



    }

    // function passCheck() {


    //     userError.innerHTML = ""






    //     }



}







// function loginCheck() {


//     USerNameCheck()

//     // passCheck()


// }