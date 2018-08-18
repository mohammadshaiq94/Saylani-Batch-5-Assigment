
      
window.onload = function () {

function changeImage() {   
var BackgroundImg = ["Images/bg2.jpg",
  "Images/bg3.jpg",
  "Images/bg4.jpg"

];
var i = Math.floor((Math.random() * 3));
document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
document.body.style.backgroundSize = "cover";
}
window.setInterval(changeImage, 4000);
}



function onRegister() {
    window.location.href = "Register/register.html";
}




function onlogin() {
  window.location.href = "Login/login.html";
}

