

//Weather

var weather = [ null  , "Rainy" , null ,"foggy", null , null]
var weatherRandom = Math.random() * weather.length;
var weatherIndex = Math.floor(weatherRandom) ;

var weatherIndex = 0





//Player NameA

var playerNameA = ["Kashif" , "Junaid" , "Shaqi" , "Samad" , "Arsalan" , "Afridi" , "Waqas" , "Haider" , "Ali" , "Usama"  , "Wajhe" ]

//Player Index //


//Player NameB


var playerNameB = ["Sameer" , "Iqbal" , "Shaid" , "Mansoor" , "Anus" , "Waqar" , "Haroon" , "Mujeer" , "Owais" , "Saeed"  , "Saleem" ]


var index1 = 0
var index2 = 0

var indexCurrent1 = 1
var indexCurrent2 = 1







var Bat_Ball = ["Bat" , "Ball"]
var Bat_BallRandom = Math.random() * Bat_Ball.length ;
var OppenentIndex = Math.floor(Bat_BallRandom) ;





// // //Toss

var teamA = prompt("Enter First Team Name")
var teamB = prompt("Enter Second Team Name")


alert("The Match Is Between " + teamA + " & " + teamB )
sleepFor(1000)


var tossUser = prompt("Head / Tail") ;
var tossUser = tossUser.toLocaleLowerCase()
var toss = ["head" , "tail"]
var tossRandom = Math.random() * toss.length ;
var tossIndex = Math.floor(tossRandom) ;



if (tossUser == toss[tossIndex] ){


var tossWin = prompt("You Win the Toss What u want to choes Bat / Ball")

    alert( teamA + " Is Select The " + tossWin + " Let Start The Match")

}

else{

    alert("You LOoss the Toss You Opponent Selected the " + Bat_Ball[OppenentIndex])
}

sleepFor(3000)



// // //Toss Index //


//Team A
var wicket = 0 ;
var overs = +prompt("Enter Over Here")
var scoreTeamA = 0 ;


var TeamPlayerRunA = 0
var TeamPlayerRunB = 0


var scoreTeamB = 0 ;
var wicketB = 0 ;

var scoreRunTeamA = ["-"  , "-" ,   "-"  ,  "-"  , "-" ,  "-"  , "-" ,  "-"  , "-"  , "-" ,  "-" ]
var scoreRunTeamB = ["-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" ]

var ScoreCardBallA = ["-" ,   "-" ,  "-" ,  "-" ,  "-" ,  "-" ,  "-" , "-" , "-" , "-" ,  "-" ]
var ScoreCardBallB = ["-" ,  "-" ,  "-" , "-"  , "-" ,  "-" ,  "-" ,  "-" ,  "-" ,  "-" ,  "-" ]



var ScoreCardOutA = ["-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" ]

var ScoreCardOutB = ["-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" , "-" ]



BallTeamA = 0
totalTeamABall = 0

                                            //////////First Inning/////////
BallTeamB = 0
totalTeamBBall = 0



                                 


if (tossUser == toss[tossIndex] ){
        alert(" Start the first Inning Overs " + overs + " match started "   +  teamA + " is to " + tossWin)


}

           



     



 

    
          for(var over = 1 ; over <= overs ; over ++){

            if(wicket == 10){

                break

            }


            if (weather[weatherIndex] == 8 ){

                console.log("Match is delay for for 10 Second  due to " + weather[weatherIndex] + " weather")
                sleepFor(10000)
            }
         

            else if (weather[weatherIndex] == 6 ){

                console.log("Match is delay for for 5 Second  due to " + weather[weatherIndex] + " weather")
                sleepFor(5000)
            }



                console.log("--------------------------" + "Overs No " + over + "-------------------------")
                console.log(" ")

              


                for( var ball = 1 ; ball<= 6 ; ball++){
     
                       
                    BallTeamA++



                    if ( wicket == 10 ){

                        console.log("All Wicket is Gone")
                        ScoreCardOutA.splice(-11 , 0 , " Not Out ")
                       

                        break
                    }

                    

                    
                    var runRandom = Math.random() * 7 ;
                    var run = Math.floor(runRandom)
    
                     

                    if (run == 0 ){
                        
                       wicket++ ; 
                       console.log(" ")
                       console.log(playerNameA[index1] + " Is Out On  " +  TeamPlayerRunA + " Runs "  + " / "  + BallTeamA  + " Balls " +  " Now " + playerNameA[indexCurrent1] + "  is on the field")
                        ScoreCardBallA.splice(-11 , 0 , BallTeamA);
                        scoreRunTeamA.splice(-11 , 0 , TeamPlayerRunA );
                        scoreRunTeamA.splice(-11 , 0 , TeamPlayerRunA );
                        ScoreCardOutA.splice( -0 , 0 , "Out")
                       BallTeamA = 0
                       TeamPlayerRunA = 0
                            index1++
                            indexCurrent1++
                       sleepFor(2000)
                     
                       console.log(" ")
              
                                console.log(" ")
                    }


                




                    else if (run == 6 ){
                        totalTeamABall++
                        TeamPlayerRunA =  TeamPlayerRunA + run;
                        sleepFor(3000)
                        scoreTeamA = scoreTeamA  + run ;
                        console.log("************* What a Shot Itz " + run + " **************** " )
        


                    }

                   


                    else if (run == 4 ){
                        totalTeamABall++
                        TeamPlayerRunA =  TeamPlayerRunA + run;
                        sleepFor(2000)
                        scoreTeamA  = scoreTeamA  + run ;
                        console.log("************* What a Shot Itz " + run + " **************** " )
     
                    }
    

    
                        else{

                            TeamPlayerRunA =  TeamPlayerRunA + run;
                            
                            totalTeamABall++
                            sleepFor(1000)
                            scoreTeamA  = scoreTeamA  + run ;
                            console.log(run)
                            console.log(" ***************************** ")

                        }




                }
                    
               

               
               console.log(" ")
                console.log(" ")
                console.log("Total Score : " + scoreTeamA  + " / " + wicket)                 
                console.log(" ")
                




                
                     

                  
            
                    

                

            
            
             }//Main


             console.log(" ")

             console.log("================================== Team A Score Card =====================================")
             console.log("                                  ===================                                                        ")
             sleepFor(2000)
             console.log(" ")

             console.log("    Player Names       Runs         Balls         Score     ")
            console.log("=============================================================================================")

                           console.log("             " + playerNameA[0]  + "          "  +   scoreRunTeamA[0]  +   "            "   +    ScoreCardBallA[0]  + "             "  +     ScoreCardOutA[0]   )
                           console.log("             " + playerNameA[1]  + "          "  +   scoreRunTeamA[1]  +   "            "   +    ScoreCardBallA[1]  + "            "  +     ScoreCardOutA[1]   )               
                           console.log("             " + playerNameA[2]  + "           "  +   scoreRunTeamA[2]  +   "            "   +    ScoreCardBallA[2]  +"             "  +     ScoreCardOutA[2]   )               
                           console.log("             " + playerNameA[3]  + "           "  +   scoreRunTeamA[3]  +   "            "   +    ScoreCardBallA[3]  +"             "  +     ScoreCardOutA[3]   )              
                           console.log("             " + playerNameA[4]  + "         "  +   scoreRunTeamA[4]  +   "            "   +    ScoreCardBallA[4]  +  "             "  +     ScoreCardOutA[4]   )
                           console.log("             " + playerNameA[5]  + "          "  +   scoreRunTeamA[5]  +   "            "   +    ScoreCardBallA[5]  + "             "  +     ScoreCardOutA[5]   )
                           console.log("             " + playerNameA[6]  + "           "  +   scoreRunTeamA[6]  +   "            "   +    ScoreCardBallA[6] + "            "  +     ScoreCardOutA[6]   )
                           console.log("             " + playerNameA[7]  + "          "  +   scoreRunTeamA[7]  +   "            "   +    ScoreCardBallA[7]  + "             "  +     ScoreCardOutA[7]   )
                           console.log("             " + playerNameA[8]  + "             "  +   scoreRunTeamA[8]  +   "            "   +    ScoreCardBallA[8]+"             "  +     ScoreCardOutA[8]   )
                           console.log("             " + playerNameA[9]  + "           "  +   scoreRunTeamA[9]  +   "            "   +    ScoreCardBallA[9]  +"             "  +     ScoreCardOutA[9]   )
                           console.log("             " + playerNameA[10] + "           "  +   scoreRunTeamA[10]  +  "            "   +   ScoreCardBallA[10]  +"             "  +     ScoreCardOutA[10]  )

 

             console.log(" ")

             console.log("============================================================================================")


             console.log(" ")


              




























           
            
            
            
             console.log("===============================================")
             console.log("Second Team have to Achieve " + scoreTeamA + " On " + overs*6 + " Balls To win The Match")
             console.log("===============================================")
               


             console.log(" ")
             console.log(" ")






                                      ////  / Second Inning////



            console.log(" ")
             console.log(" ")





            console.log("=========================== 2nd Inning =======================================")

                sleepFor(5000)
            console.log(" ")
            console.log(" ")
            




        
            

        

                      

         
                  for(var ovver = 1 ; ovver <= overs ; ovver++){

                if(wicketB == 10){

                    break
    
                }


                    if (weather[weatherIndex] == 8 ){

                        console.log("Match is delay for for 10 Second  due to " + weather[weatherIndex] + " weather")
                        sleepFor(10000)
                    }
                 
        
                    else if (weather[weatherIndex] == 6 ){
        
                        console.log("Match is delay for for 5 Second  due to " + weather[weatherIndex] + " weather")
                        sleepFor(5000)
                    }
                      


                    console.log("---------------------" + "Overs No" + ovver + "------------------------")
                    console.log(" ")
        

      
                    

                        for( var ballB = 1 ; ballB <= 6 ; ballB++){

        
             if ( wicketB == 10 ){

                        console.log("All Wicket is Gone")
                        ScoreCardOutB.splice(-11 , 0 , " Not Out ")
                       

                        break
                    }

                           

        
                              
                    var runRandom = Math.random() * 7 ;
                    var runB = Math.floor(runRandom)
    
            
                            if (runB == 0 ){
            
                               wicketB++ ; 
                               console.log(" ")
                               console.log(playerNameB[index2] + " Is Out " +  TeamPlayerRunB + " Runs " + " / "  +   BallTeamB  +  " Balls "   + " Now "  + playerNameB[indexCurrent2] + " is on the field ")
                                    ScoreCardBallB.splice(-11 , 0 , BallTeamB);
                                    scoreRunTeamB.splice(-11 , 0 , TeamPlayerRunB );
                                    scoreRunTeamB.splice(-11 , 0 , TeamPlayerRunB );
                                    ScoreCardOutB.splice( -0 , 0 , "Out")
                               BallTeamB = 0
                               TeamPlayerRunB = 0
                               index2++
                               indexCurrent2++
                               sleepFor(2000)
                               console.log(" ")
                               console.log(" ")
                            }
        
        
                        
                            
        
        
                            else if (runB == 6 ){
                                totalTeamBBall++
                                BallTeamB++
                                console.log("================ What a Huge Shot Itz " + runB  + " ================= ")
                                sleepFor(3000)
                                scoreTeamB = scoreTeamB  + runB ;
                                     TeamPlayerRunB = TeamPlayerRunB + runB;
                                console.log(runB)
                                console.log(" ")
                              
                
                            }
            


                            

        
        
                            else if (runB == 4 ){
                                totalTeamBBall++
                                BallTeamB++
                                TeamPlayerRunB = TeamPlayerRunB + runB;
                                console.log("")
                                sleepFor(2000)
                                scoreTeamB = scoreTeamB  + runB ;
                                console.log("************* What a Shot Itz " + runB + " **************** " )
                                
                            }
    
        
                            else{
                               
                                totalTeamBBall++
                                BallTeamB++
                                sleepFor(1000)
                                TeamPlayerRunB = TeamPlayerRunB + runB;
                                scoreTeamB = scoreTeamB + runB ;
                                console.log(runB)
                               console.log(" ***************************** ")
                            }
            
        
                            
           
                        
        

        
                    }

                    
                    console.log(" ")
                    console.log(" ")
                    console.log("Total Score : " + scoreTeamB + " / " + wicketB)
                    console.log(" ")
                    console.log(" ")



                   
                    
                }




                    
                    

                console.log(" ")

                console.log("================================== Team B Score Card =====================================")
                console.log("                                  ===================                                                        ")
                sleepFor(2000)
                console.log(" ")


                console.log(" ")


                console.log("       Player Names        Runs        Balls         Score     ")
                console.log("=============================================================================================")

                           console.log("             " + playerNameB[0]  + "          "  +   scoreRunTeamB[0]  +   "            "   +    ScoreCardBallB[0]  + "             "  +     ScoreCardOutB[0]   )
                           console.log("             " + playerNameB[1]  + "          "  +   scoreRunTeamB[1]  +   "            "   +    ScoreCardBallB[1]  + "            "  +     ScoreCardOutB[1]   )               
                           console.log("             " + playerNameB[2]  + "           "  +   scoreRunTeamB[2]  +   "            "   +    ScoreCardBallB[2]  +"             "  +     ScoreCardOutB[2]   )               
                           console.log("             " + playerNameB[3]  + "           "  +   scoreRunTeamB[3]  +   "            "   +    ScoreCardBallB[3]  +"             "  +     ScoreCardOutB[3]   )              
                           console.log("             " + playerNameB[4]  + "         "  +   scoreRunTeamB[4]  +   "            "   +    ScoreCardBallB[4]  +  "             "  +     ScoreCardOutB[4]   )
                           console.log("             " + playerNameB[5]  + "          "  +   scoreRunTeamB[5]  +   "            "   +    ScoreCardBallB[5]  + "             "  +     ScoreCardOutB[5]   )
                           console.log("             " + playerNameB[6]  + "           "  +   scoreRunTeamB[6]  +   "            "   +    ScoreCardBallB[6] + "            "  +     ScoreCardOutB[6]   )
                           console.log("             " + playerNameB[7]  + "          "  +   scoreRunTeamB[7]  +   "            "   +    ScoreCardBallB[7]  + "             "  +     ScoreCardOutB[7]   )
                           console.log("             " + playerNameB[8]  + "             "  +   scoreRunTeamB[8]  +   "            "   +    ScoreCardBallB[8]+"             "  +     ScoreCardOutB[8]   )
                           console.log("             " + playerNameB[9]  + "           "  +   scoreRunTeamB[9]  +   "            "   +    ScoreCardBallB[9]  +"             "  +     ScoreCardOutB[9]   )
                           console.log("             " + playerNameB[10] + "           "  +   scoreRunTeamB[10]  +  "            "   +   ScoreCardBallB[10]  +"             "  +     ScoreCardOutB[10]  )
   
    
   
                console.log(" ")
   
                console.log("============================================================================================")
   
   
   
            
               
                




                console.log(" ")
                
                console.log(" ")




                        console.log(teamA +  ' Score ' +  scoreTeamA + " On " + totalTeamABall + " Balls "  + " / "  + teamB + ' Score ' +  scoreTeamB + " On " + totalTeamBBall + " Balls" )


                        if (scoreTeamA > scoreTeamB){

                            console.log("The Winning Team is " + teamA + " By " + (scoreTeamA-scoreTeamB))
                        }


                        else{
                            console.log("The Winning Team is " + teamB +  " By "  + (scoreTeamB-scoreTeamA))

                        }


                            
















        function sleepFor( sleepDuration ){
            var now = new Date().getTime();
            while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
            
        }