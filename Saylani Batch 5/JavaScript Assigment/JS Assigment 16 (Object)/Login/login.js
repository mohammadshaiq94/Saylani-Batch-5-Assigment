var admin  = {

    email:  'admin@domain.com',
    pass: "admin"



}



function login() {


    var userEamil = document.getElementById("email").value.toLowerCase();
    var userPass = document.getElementById("pass").value.toLowerCase();


    if (userEamil == admin.email && userPass == admin.pass) {


        window.location.href = '../Admin/admin.html'


    }




    else if (userEamil !== admin.email && userEamil !== admin.pass){
        // var user = {
        //     name : userEamil,
        //     pass : userPass
        // }

        for(var l = 0;l < userEamil.length;l++){

            if(userEamil[l] === "@"){
                var userName = userEamil.slice(0,l);
                // alert("Hello " + userName);
                var name = document.write("<h1>" + "Welcome to " + userName + "</h1>");
            }






        }






    }
















}


