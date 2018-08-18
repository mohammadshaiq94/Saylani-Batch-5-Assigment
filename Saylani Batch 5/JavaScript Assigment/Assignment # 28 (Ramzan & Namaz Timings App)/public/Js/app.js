// https://www.dawateislami.net/prayertimes/?cid=872996&cityname=Karachi
// https://www.dawateislami.net/prayertimes/pdfnamazview?cid=872996&month=June


var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var Urdudayy = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعه", "ہفتہ"];


var today = new Date();
var todayDate = `${today.getDate()} ${months[today.getMonth()]} 2018`;
var month = today.getMonth()
var date = today.getDate();
var todaySeconds = (3600 * today.getHours()) + (60 * today.getMinutes());

var RamzanDate = document.getElementById("ramzan")
var isRamzan = false;
var ramzanObject;


var sehriTime;
var aftarTime;


var nextPrayer;
var remainingTime;
var isDayPassed = false;







var dAYY = Urdudayy[today.getDay()]
var Eday = days[today.getDay()]


var CurrentDate = document.getElementById("CurrentDate").innerHTML = today.getDate() + " - " + months[today.getMonth()]
var CurrentDayy = document.getElementById("CurrentDay")

Uday = document.createTextNode(Eday);
CurrentDayy.appendChild(Uday);

span = document.getElementById("urduday");
Uday = document.createTextNode(dAYY);
span.appendChild(Uday);

function fetchToday() {



    if ((today.getDate() >= 17 && today.getMonth() === 4) || (today.getDate() <= 15 && today.getMonth() === 5)) {
        isRamzan = true;
    }


    if (isRamzan) {



        for (var i = 0; i < prayersTiming.length; i++) {

            if (prayersTiming[i].date.indexOf(todayDate) !== -1) {
                todayObject = prayersTiming[i];
                tomorrowObject = prayersTiming[i + 1];
                break;
            }

        }



        for (var i = 0; i < ramzanCalender.length; i++) {
            if (ramzanCalender[i].date.indexOf(todayDate) !== -1) {
                ramzanObject = ramzanCalender[i];
                var tomorrowRamzanObject = ramzanCalender[i + 1];
                break;
            }


        }

        RamzanDate.innerHTML = ramzanObject.ramzan;

        sehriTime = makePrayerTime(make24Hour(ramzanObject.sehri));
        aftariTime = makePrayerTime(make24Hour(ramzanObject.aftari));

        if (todaySeconds <= sehriTime) {
            console.log('sehri remain');
            document.getElementById("sehrii").innerText = "Time Left To Fajr(Sehri)"
            var distance = makeTime(sehriTime - todaySeconds);
            document.getElementById("sehri").innerText = distance;
        }
        else {
            if (todaySeconds < aftariTime) {
                console.log('sehri passed');
                document.getElementById("sehrii").innerText = "Time Left To Maghrib(Iftar)"
                var distance = makeTime(aftariTime - todaySeconds);
                document.getElementById("sehri").innerText = distance;
            }
            else {
                console.log('aftar passed');
                document.getElementById("sehrii").innerText = "Time Left To Fajr(Sehri)"
                sehriTime = makePrayerTime(make24Hour(tomorrowRamzanObject.sehri));
                var remainingDayTime = 86400 - todaySeconds;
                remainingDayTime2 = makeTime(remainingDayTime + sehriTime);
                document.getElementById("sehri").innerText = remainingDayTime2;
            }
        }




    }




    if (todayObject === undefined) {
        nextPrayer = 'Data for this day not found';
        remainingTime = 'Data for this day not found';
    }

    if (todaySeconds < makePrayerTime(todayObject.fajar)) {
        nextPrayer = 'Fajar';
        remainingTime = todayObject.fajar;
    }
    else if (todaySeconds < makePrayerTime(todayObject.zohar)) {
        nextPrayer = 'Zohar';
        remainingTime = todayObject.zohar;

    }
    else if (todaySeconds < makePrayerTime(todayObject.asar)) {
        nextPrayer = 'Asar';
        remainingTime = todayObject.asar;
    }
    else if (todaySeconds < makePrayerTime(todayObject.magrib)) {
        nextPrayer = 'Magrib';
        remainingTime = todayObject.magrib;
    }
    else if (todaySeconds < makePrayerTime(todayObject.isha)) {
        nextPrayer = 'Isha';
        remainingTime = todayObject.isha;
    }
    else {
        isDayPassed = true;
        var ishaTime = makePrayerTime(todayObject.isha);
        var remainingDayTime = 86400 - todaySeconds;

        nextPrayer = 'Fajar';
        remainingTime = tomorrowObject.fajar;

    }

    prayerTime = makePrayerTime(remainingTime);

    if (isDayPassed) {
        remainingTime = remainingDayTime + prayerTime;
    } else {
        remainingTime = prayerTime - todaySeconds;
    }
    remainingTime = makeTime(remainingTime);
    document.getElementById("prayTime").innerText = nextPrayer;
    document.getElementById("RemainingTime").innerText = remainingTime;



}

var int = setInterval(fetchToday, 1000);
















function highlight() {


    var dt = new Date().getDate()
    var mnth = new Date().getMonth() + 1
    var dtMonth = dt + "/" + mnth


    var trs = document.getElementsByTagName("tr")

    for (var i = 0; i < trs.length; i++) {

        if (trs[i].id == dtMonth) {

            trs[i].style.backgroundColor = "rgb( 0, 114, 187)";

        }



    }

}

highlight()


//Timer

setInterval(function () {
    var today = new Date(); // for now
    var t1 = today.getHours(); // => 9var t2
    var t2 = today.getMinutes(); // =>  30
    var t3 = today.getSeconds();
    var t4 = t1 + ":" + t2 + ":" + t3;
    var cTime = document.getElementById("time");
    cTime.innerHTML = t4;
}, 1000);


function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}












// Calculate seconds of prayers time
function makePrayerTime(prayerTime) {
    prayerTime = (prayerTime.toString()).split(":")
    var firstPart = parseInt(prayerTime[0]);
    var secondPart = parseInt(prayerTime[1]);
    return (firstPart * 3600) + (secondPart * 60);
}



function make24Hour(time) {
    if (time.indexOf('am') !== -1) {
        time = time.split(':');
        var secondPart = parseInt(time[1].slice(0, 2));
        return parseInt(time[0]) + ':' + secondPart;

    } else {
        time = time.split(':');
        var secondPart = parseInt(time[1].slice(0, 2));
        return (parseInt(time[0]) + 12) + ':' + secondPart;
    }
}


function makeTime(seconds) {
    seconds = ((seconds / 60) / 60);
    var TimeArr = (seconds).toString().split('.');
    var hours = parseInt(TimeArr[0]);
    var minutes = parseFloat('.' + TimeArr[1]);

    return hours + 'h ' + Math.round(minutes * 60) + 'm ';;
}


