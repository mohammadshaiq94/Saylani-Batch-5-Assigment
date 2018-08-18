
console.log("                                                        Street Fighter")
console.log("                                                        ==============")
sleepFor(2000);
console.log("Select The Fighter")
sleepFor(1000);



//Fighters
var fighters = ["Ryu" , "Sagat" , "Chun-Li" , "Ken" , "Blanka" , "Zangief" , "Dhalsim" , "E.Honda" , "Vega"]



console.log(fighters.join(" | "))
var playerExist = false ;
console.log(" ")
sleepFor(1000);



//Select Player

var player1 = prompt("Enter Your Fighter Name")


    //Action
    var action = ["Kick" , "Punch" , "Hadoken" , "Jump" , "Special Attack"]

    var player1Health = 100
    var player2Health = 100


    for(var i = 0 ; i < fighters.length; i++){

        if(fighters[i].toLocaleLowerCase() == player1.toLowerCase()){
            playerExist = true;
           player1 = fighters[i];
 
        }
    }


    
    //randomly Select Player if not Exist

    function randomPlayer(player){

        var random = Math.random() * fighters.length
        var index = Math.floor(random);

        if(player == "player1"){
            player1 = fighters[index];


        }

        else{
            player2 = fighters[index];
        }
    }



    if (!playerExist){

        randomPlayer("player1")

    }


	sleepFor(2000);
    console.log("You Are Selected " , player1)



    var player2;
    randomPlayer("player2")

    console.log("Your Opponent is : " , player2)




    console.log(" ")
    console.log("\nRound One Start")
    console.log("===============")

    sleepFor(1000);
    console.log(action.join(" | "));
    


  
    




    while (player1Health > 0 && player2Health > 0){
        sleepFor(1000);
        console.log("\n" + player1 + " Health " + player1Health  + "\n" + player2 + " Health " + " " + player2Health )
        console.log(" ")
        sleepFor(1000);
        var player1Attack = prompt("Enter Your Attack")
        var damage1 = 0
        var damage2 = 0
        var special1 = false;
        var special2 = false;
        


        //Player 2 Random Attack
        var  player2Attack ;
        var randomAction = Math.random() * action.length;
        var actionIndex = Math.floor(randomAction);
        var at2 = action[actionIndex];
        var player2Attack = at2.toLowerCase()
        


        switch(player1Attack.toLowerCase()){
            
           
            case 'punch' :
            case 'kick' :

            if(player1Attack !== "jump" && player2Attack !== "jump"){
            damage2 = 10
            player2Health = player2Health-10
           

            }
            break;

            
            case 'hadoken' :

            if(player1Attack  !== "jump" && player2Attack !== "jump"){
            damage2 = 15
            player2Health = player2Health-15
            

            }
            break;
          
            case 'special attack' :{
            if(player1Attack  !== "jump"  && player2Attack !== "jump" && special1 != true){
                player2Health = player2Health-30
                damage2 = 30
                special1 = true
                
            }
            break;
        }

        }//Switch

         
        sleepFor(2000);


            console.log("=============================================================================")

            if(player1Attack == "punch" &&  player2Attack == "punch" ){
                PunchChar()
                console.log(" ") 
             console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
                

            }

            else if(player1Attack == "kick" &&  player2Attack == "kick" ){
                KickChar() 
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
                
            }



            else if(player1Attack == "punch" &&  player2Attack == "kick" ){
                PunchKick() 
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
               
            }


            else if(player1Attack == "kick" &&  player2Attack ==  "punch" ){
                KickPunch()
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
              
            }



            else if(player1Attack == "hadoken" &&  player2Attack ==  "hadoken" ){
                HadokenChar()
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
              
            }


            else if(player1Attack == "hadoken" &&  player2Attack ==  "punch" ){
                HadokenPunch()
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
               
            }


            else if(player1Attack == "punch" &&  player2Attack ==  "hadoken" ){
                PunchHadoken()
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
                
            }


            else if(player1Attack == "hadoken" &&  player2Attack ==  "kick" ){
               HadokenKick()
               console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
             
            }


            else if(player1Attack == "kick" &&  player2Attack ==  "hadoken" ){
                KickHadoken()
                console.log(" ")
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
               
            }

            else{
                console.log("You Attack : " + player1Attack + " | "  + player2 + " Is Damage by " + damage2 )
               
            }










	switch(player2Attack.toLowerCase()){
		case "punch":
		case "kick":{
		    if (player2Attack !== "jump" && player1Attack !== "jump") {
		       player1Health =  player1Health - 10;
		        damage1 = 10;
		    }
			break;
		}
		case "hadoken":{
		    if (action !== "jump" && player1Attack !== "jump") {
		        player1Health =  player1Health - 15;
                damage1 = 15;
		    }
			break;
        }
        
		case "special attack":{
		    if (player2Attack !== "jump" && player1Attack !== "jump" && special2 != true) {
                player1Health =  player1Health - 30;
                damage1 = 30;
		        special2 = true;
		    }
			break;
		}

		}/* switch */
	

        console.log(player2 + " attacked: " + player2Attack + " | " + player1 +   " is damaged " + damage1);	



        }//Loop
    
        sleepFor(2000);
        console.log(" ")
        if (damage2 > 0) {
            console.log(player1 + " has won..");
            console.log(player2 + " has lost..");
        }
        else if (damage1 > 0) {
            console.log(player2 + " has won..");
            console.log(player1 + " has lost..");
        }
        








        
        function sleepFor( sleepDuration ){
            var now = new Date().getTime();
            while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
            
        }














function PunchChar (){
console.log("('~')                              ('~')")
console.log("|   |==[]                      []==|   |"   )     
console.log("/   \\                              /   \\ ")


}





function KickChar (){
    console.log(" ('~')                             ('~')"  )
    console.log(" |   |/                           \\|   |  ")

    console.log(" |___   ---                     ---  __|" )
    
    
    }
    
  
    
function PunchKick (){
    console.log("('~')                              ('~')  ")
    console.log("|   |==[]                        \\|   |  " )     
    console.log("/   \\                          ---  __|  ")
    
    
    }
    


    function KickPunch (){
        console.log(" ('~')                             ('~')    "  )
        console.log(" |   |/                        []==|   |    ")
        console.log(" |___   ---                     -   /   \\    " )
        
        
        }
        


        
    function HadokenChar (){
        console.log("             -  -                                       -                    ")
        console.log("('~')     -        -                               -       -      ('~')             ")
        console.log("|   |==( -         -                             -           - )==|   |    " )     
        console.log("/   \\     -  -   -                                 -   -   -      /   \\        ")
                 
        
        
        }


        function HadokenPunch (){
            console.log("             -  -                                                         ")
            console.log("('~')     -        -                                       ('~')            ")
            console.log("|   |==( -         -                                   []==|   |         " )     
            console.log("/   \\     -  -   -                                       - /   \\       " )
                     
            
            
            }


                 
    function PunchHadoken (){
        console.log("                                                        -                    ")
        console.log("('~')                                              -       -      ('~')             ")
        console.log("|   |==[]                                        -           - )==|   |    " )     
        console.log("/   \\                                              -   -   -      /   \\        ")
                 
        
        
        }



        function HadokenKick (){
            console.log("             -  -                                                         ")
            console.log("('~')     -        -                                       ('~')            ")
            console.log("|   |==( -         -                                     \\|   |         " )     
            console.log("/   \\     -  -   -                                     ---  __|       " )
                     
            
            
            }



            
            function KickHadoken (){
                console.log("                                                        -                    ")
                console.log("('~')                                              -       -      ('~')             ")
                console.log("|   |/                                           -           - )==|   |    " )     
                console.log("|___   ---                                          -   -   -      /   \\        ")
                         
                
                
                }
                
              
                