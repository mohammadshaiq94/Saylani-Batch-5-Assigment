function add(event) {



    var batmen = document.getElementById("batmen").value;
    var run = document.getElementById("run").value;
    var ball = document.getElementById("ball").value;
    var four = document.getElementById("four").value;
    var six = document.getElementById("six").value;
    var sr = document.getElementById("score").value;

    var table2 = document.getElementById("table2")




    var tableRow = document.createElement("tr")





    // Edit Box //



    var tableData1 = document.createElement("td")
    tableData1.setAttribute("class" , "edit")

    var edit = document.createElement("input")
    edit.setAttribute("type" , "checkbox")
    edit.setAttribute("onclick" , "edit(event)")

    // Edit Box //

    var tableData2 = document.createElement("td")
    tableData2.setAttribute("class" , "name")

    var tableData3 = document.createElement("td")
    tableData3.setAttribute("class" , "run")

    var tableData4 = document.createElement("td")
    tableData4.setAttribute("class" , "ball")

    var tableData5 = document.createElement("td")
    tableData5.setAttribute("class" , "four")

    var tableData6 = document.createElement("td")
    tableData6.setAttribute("class" , "six")

    var tableData7 = document.createElement("td")
    tableData7.setAttribute("class" , "sr")






    //Edit Update , clean   Button



    var tableData8 = document.createElement("td")

    var tableData9 = document.createElement("td")
    tableData9.setAttribute("id" , "table9")



    var clean = document.createElement("button");
    clean.setAttribute("id" , "clean")
    clean.setAttribute("onClick" , "clean(event)")
    clean.innerHTML = "Delete"

    debugger
    console.log(event)















    table2.appendChild(tableRow)

    tableRow.appendChild(tableData1)
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    tableRow.appendChild(tableData4)
    tableRow.appendChild(tableData5)
    tableRow.appendChild(tableData6)
    tableRow.appendChild(tableData7)
    tableRow.appendChild(tableData8)
    tableRow.appendChild(tableData9)



    tableData1.appendChild(edit)
    tableData9.appendChild(clean)



    tableData2.innerHTML= batmen
    tableData3.innerHTML= run
    tableData4.innerHTML= ball
    tableData5.innerHTML= four
    tableData6.innerHTML= six
    tableData7.innerHTML= sr



    var batmen = document.getElementById("batmen").value= ""
    var run = document.getElementById("run").value = ""
    var ball = document.getElementById("ball").value = ""
    var four = document.getElementById("four").value = ""
    var six = document.getElementById("six").value = ""
    var sr = document.getElementById("score").value = ""



}


















function edit(event) {

    if (event.target.checked){




        console.log(event.target)

        var nameValue =  event.path[2].children[1].innerHTML;
        var runValue =  event.path[2].children[2].innerHTML;
        var ballValue = event.path[2].children[3].innerHTML;
        var fourValue = event.path[2].children[4].innerHTML;
        var sixValue = event.path[2].children[5].innerHTML;
        var srValue = event.path[2].children[6].innerHTML;








        var name = document.createElement("input")
        name.setAttribute("id" , "nameUpdate")
        name.value = nameValue;
        var nameValue =  event.path[2].children[1].innerHTML = ""
        var name = event.path[2].children[1].appendChild(name);




        var run = document.createElement("input")
        run.setAttribute("id" , "runUpdate")
        run.value = runValue;

        var runValue =  event.path[2].children[2].innerHTML = ""
        var run = event.path[2].children[2].appendChild(run);






        var ball = document.createElement("input")
        ball.setAttribute("id" , "ballUpdate")
        ball.value = ballValue;

        var ballValue =  event.path[2].children[3].innerHTML = ""
        var ball = event.path[2].children[3].appendChild(ball);






        var four = document.createElement("input")
        four.setAttribute("id" , "fourUpdate")
        four.value = fourValue;

        var fourValue =  event.path[2].children[4].innerHTML = ""
        var four = event.path[2].children[4].appendChild(four);






        var six = document.createElement("input")
        six.setAttribute("id" , "sixUpdate")
        six.value = sixValue;

        var sixValue =  event.path[2].children[5].innerHTML = ""
        var six = event.path[2].children[5].appendChild(six);





        var sr = document.createElement("input")
        sr.setAttribute("id" , "srUpdate")
        sr.value = srValue;
        var srValue =  event.path[2].children[6].innerHTML = ""
        var sr = event.path[2].children[6].appendChild(sr);







        var update = document.createElement("button");
        update.setAttribute("id" , "update")
        update.setAttribute("onClick" , "update(event)");
        update.innerHTML = "Update"

        var update = event.path[2].children[7].appendChild(update)


        document.getElementById("clean").remove()



        // var clean = document.createElement("button");
        // clean.setAttribute("id" , "clean")
        // clean.setAttribute("onClick" , "clean(event)")
        // clean.innerHTML = "Delete"
        //
        //
        // var clean = event.path[2].children[8].appendChild(clean)
        //


    }

    else {

        var name1 = document.getElementById("nameUpdate").value;
        event.path[2].children[1].innerHTML = name1




        var run1 = document.getElementById("runUpdate").value;
        event.path[2].children[2].innerHTML = run1


        var ball1 = document.getElementById("ballUpdate").value;
        event.path[2].children[3].innerHTML = ball1




        var four1 = document.getElementById("fourUpdate").value;
        event.path[2].children[4].innerHTML = four1



        var six1 = document.getElementById("sixUpdate").value;
        event.path[2].children[5].innerHTML = six1



        var sr1 = document.getElementById("srUpdate").value;
        event.path[2].children[6].innerHTML = sr1


        document.getElementById("update").remove()


        var clean = document.getElementById("clean")

        if(clean){
            clean.remove();
        }

        var clean = document.createElement("button");
        clean.setAttribute("id" , "clean")
        clean.setAttribute("onClick" , "clean(event)")
        clean.innerHTML = "Delete"

        var table9 = document.getElementById("table9")
        table9.appendChild(clean)








    }

}









function update(event) {






    var nameUpdate = document.getElementById("nameUpdate").value;
    event.path[2].children[1].innerHTML = nameUpdate

    // document.getElementById("name")



    var runUpdate = document.getElementById("runUpdate").value;
    event.path[2].children[2].innerHTML = runUpdate
    // document.getElementById("run").remove()


    var ballUpdate = document.getElementById("ballUpdate").value;
    event.path[2].children[3].innerHTML = ballUpdate
    // document.getElementById("ball").remove()


    var fourUpdate = document.getElementById("fourUpdate").value;
    event.path[2].children[4].innerHTML = fourUpdate
    // document.getElementById("four").remove()


    var sixUpdate = document.getElementById("sixUpdate").value;
    event.path[2].children[5].innerHTML = sixUpdate
    // document.getElementById("six").remove()


    var srUpdate = document.getElementById("srUpdate").value;
    event.path[2].children[6].innerHTML = srUpdate
    // document.getElementById("sr").remove()

    document.getElementById("update").remove()


    if(clean){
        clean.remove();
    }


    var clean = document.createElement("button");
    clean.setAttribute("id" , "clean")
    clean.setAttribute("onClick" , "clean(event)")
    clean.innerHTML = "Delete"

    var table9 = document.getElementById("table9")
    table9.appendChild(clean)






}








function clean(event) {

    event.path[2].remove()



}





