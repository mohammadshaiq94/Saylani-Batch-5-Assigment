
//Task 1

var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]




    
        arr[3] = ({name : 'Siddiq', age: 23})

        console.log("****************  REplace Index No 3 ****************")
    console.log(arr)






    var insert = arr.push({name: 'Umair', age: '23'})
    console.log("*********** Inset New Object *************************** ")
    console.log(arr)





    var remove = arr.shift([1 , 1])
    console.log("********* Delete First Element ************")
    console.log(arr)



    


    for(var i = 0 ; i < arr.length; i++){
        
     arr[i].createdAt = new Date()

     console.log("*********** Insert New Fielsd In object ***************")
    console.log(arr)
        
    }









    // Task2



var arra = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]


    var newArr = [];

    console.log("========>name and age filtered<======");

    for(var i = 0; i < arra.length; i++){

        if((arra[i].age >= 18 && arra[i].age <=28)){

            for(var j = 0; j< arra[i].name.length; j++){

                if(arra[i].name[j] === "f"){

                    newArr.push(arra[i].name);
                    var str = arra[i].name;
                    console.log(str)
                    break;
                }
            }
        }
    }






//Task No 3 


var students = [
    {   
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }];
var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
];
for (var i = 0; i < students.length; i++) {
    students[i].coursesForS = [];
    for (var j = 0; j < courses.length; j++) {
        for (var k = 0; k < courses[j].std_id.length; k++) {
            if (courses[j].std_id[k] == students[i]._id) {
                students[i].coursesForS.push(courses[j].name);
            }
        }
    }
}
console.log("========>updated<=========");
console.log(students);
