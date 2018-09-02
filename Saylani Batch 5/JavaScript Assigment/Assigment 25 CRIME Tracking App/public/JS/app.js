var dropdown = document.getElementById("selectedName")
var defaultoption = document.createElement("option")
defaultoption.text = 'Select The Category Of Crimes'





var dropdown1 = document.getElementById("selectedForce")
var defaultoption1 = document.createElement("option")
defaultoption1.text = 'Select The Force'





// fetch('https://data.police.uk/api/crime-categories')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (categories) {
//         // console.log(categories);


//         for (var i = 0; i < categories.length; i++) {
//             var option = document.createElement("option")
//             option.text = categories[i].name;
//             option.value = categories[i].url;
//             dropdown.add(option)


//         }


//     });




// // Categores of Force /// 

// fetch('https://data.police.uk/api/forces')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (force) {
//         // console.log(force);


//         for (var j = 0; j < force.length; j++) {
//             var option = document.createElement("option")
//             option.text = force[j].name;
//             option.value = force[j].id;
//             dropdown1.add(option)


//         }


//     });



function getData() {

	var Cat = new Promise((resolve, reject) => {
		fetch('https://data.police.uk/api/crime-categories')
  			.then(response => response.json())
  			.then(json => resolve(json))
			.catch(err => reject(err))
	})

	var Army = new Promise((resolve, reject) => {
		fetch('https://data.police.uk/api/forces')
  			.then(response => response.json())
  			.then(json => resolve(json))
			.catch(err => reject(err))
	})

	return Promise.all([Cat, Army]).then(values => { 
		return {category: values[0], force: values[1]}  
	})
}

getData().then((res, err) => {

    for (var i = 0; i < res.category.length; i++) {
                    var option = document.createElement("option")
                    option.text = res.category[i].name;
                    option.value = res.category[i].url;
                    dropdown.add(option)
        

    }



    for (var j = 0; j < res.force.length; j++) {
                    var option = document.createElement("option")
                    option.text = res.force[j].name;
                    option.value = res.force[j].id;
                    dropdown1.add(option)
        
        
                }


            
}).catch(reason => { 
    var div = document.getElementById("results");
    

        var noResult = document.createElement("h1");
        noResult.id = "noResult"
        noResult.innerHTML = "No Connection !!!"
        noResult.style.color="white";
        div.appendChild(noResult);
         return false;
  });











let onSubmit = () => {

    var div = document.getElementById("results");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    var img = document.createElement("img");
    img.id = "img";
    img.src = "Images/Loading.gif";
    img.alt = "Responsive image";
    img.className = "img-fluid";
    
    var loadDiv = document.getElementById("load");
    loadDiv.appendChild(img);


    
   


   if(dropdown.value !== '0' && dropdown1.value !== '0'){

    let selectedName = document.getElementById("selectedName").value;
    let selectedForce = document.getElementById("selectedForce").value;

    var url = "https://data.police.uk/api/crimes-no-location?category=" + selectedName + "&force=" + selectedForce;
    let getData = function () {
        return new Promise(function (resolve, reject) {
            fetch(url).then(function (rese) {
                return rese.json();
            }).then(function (resu) {
                resolve(resu)
            })
            
            .catch(function(e){
                reject(e)
            })
        })
    }




    
    getData().then(function (res) {
        var div = document.getElementById("results");
        var removeImg = document.getElementById("img");
        removeImg.remove();
        if (!res.length ) {
            var noResult = document.createElement("h1");
            noResult.id = "noResult"
            noResult.innerHTML = "NO RESULTS FOUND!!!"
            noResult.style.color="white";
            div.appendChild(noResult);
            return false;
        }
    
        // else if(dropdown.value == '0' && dropdown1.value == '0'){

        //     var noResult = document.createElement("h1");
        //     noResult.id = "noResult"
        //     noResult.innerHTML = "Please Select something!!!"
        //     noResult.style.color="white";
        //     div.appendChild(noResult);
        //     return false;


        // }
        else {
            var newTable = document.createElement("table");
            var tr = document.createElement("tr");
            var th1 = document.createElement("th");
            var th2 = document.createElement("th");
            var th3 = document.createElement("th");
            var th4 = document.createElement("th");
            var th5 = document.createElement("th");
            newTable.id = "table";
            newTable.border = "1";
            

            th1.innerHTML = "#";
            th1.style.color="White"
            th1.id = "index";

            th2.innerHTML = "Category"
            th2.style.color="White"
            th2.id = "cat";

            th3.innerHTML = "Date"
            th3.id = "date";
            th3.style.color="White"

            th4.innerHTML = "ID"
            th4.style.color="White"
            th4.id = "id";
   

            th5.innerHTML = "Status"
            th5.style.color="White"
            th5.id = "status";
          


            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            tr.appendChild(th5);
            newTable.appendChild(tr);
            for (var j = 0; j < res.length; j++) {
                var tr = document.createElement("tr");
                tr.style.color="White"
                var td1 = document.createElement("td");
                td1.style.color="White"
                var th = document.createElement("td");
                th.style.color="White"
                var td2 = document.createElement("td");
                td2.style.color="White"
                var td3 = document.createElement("td");
                td3.style.color="White"
                var td4 = document.createElement("td");
                td4.style.color="White"
                td1.innerHTML = j;
                th.innerHTML = res[j].category;
                td2.innerHTML = res[j].month;
                td3.innerHTML = res[j].id;
                if (res[j].outcome_status != null) {
                    td4.innerHTML = res[j].outcome_status.category;
                } else {
                    td4.innerHTML = "-";
                }
                td1.className = "align";
                td2.className = "align";
                td3.className = "align";
                td4.className = "align";
                th.className = "align";
                tr.appendChild(td1);
                tr.appendChild(th);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                newTable.appendChild(tr);
            }
            div.appendChild(newTable);
            
        }
    
       
  
   

    },function (error){
      

       var div = document.getElementById("results");
              var removeImg = document.getElementById("img");
              removeImg.remove();
          
                  var noResult = document.createElement("h1");
                  noResult.id = "noResult"
                  noResult.innerHTML = "NO INTERNET CONNECTION FOUND !!!"
                  noResult.style.color="white";
                  div.appendChild(noResult);
                   return false;
       
       
       
               
           })







    


    return false
    
}

else{

    var div = document.getElementById("results");
              var removeImg = document.getElementById("img");
              removeImg.remove();
          
                  var noResult = document.createElement("h1");
                  noResult.id = "noResult"
                  noResult.innerHTML = "Please Select something !!!"
                  noResult.style.color="white";
                  div.appendChild(noResult);
                   return false;

}









}

