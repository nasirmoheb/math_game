var action;
var score;
var timeremining;
var correctAnswer;
var playing = false;
document.getElementById("startreset").onclick = function(){
    if(playing==true){
        location.reload();
    }else{
        playing=true;
     score=0;
     document.getElementById("scorevalue").innerHTML=score;
     
    
     show("timeremining");
     
     timeremining = 60;
     
     hide("gameover");

     document.getElementById("startreset").innerHTML="Reset Game";

     startCounter();
     generatQA();
  
    }
}
function startCounter(){
action = setInterval( function(){
    timeremining -=1;
    document.getElementById("timevalue").innerHTML=timeremining;

    if(timeremining==0){
        clearInterval(action);

      show("gameover");

        document.getElementById("gameover").innerHTML="<p>Game over</p> <p>your score is "+score+"</p>"

        hide("timeremining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("startreset").innerHTML="Start Game";
    }
},1000);
}

function show(id){
    document.getElementById(id).style.display="block";
}

function hide(id){
    document.getElementById(id).style.display="none";
}

function generatQA(){
var x = 1+Math.round(9*Math.random());
var y = 1+Math.round(9*Math.random());
correctAnswer = x*y;

document.getElementById("question").innerHTML= x+ "x" +y;

var correctPosition = 1+Math.round(3*Math.random());

document.getElementById("box"+correctPosition).innerHTML=correctAnswer;


var answers =[correctAnswer];
for(i=1; i<5; i++){

    if(i!==correctPosition){
        var wrongAnswer;
        do{
        wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        }while(answers.indexOf(wrongAnswer)>-1);
        answers.push(wrongAnswer);
        document.getElementById("box"+i).innerHTML=wrongAnswer;
    }
}
}

for(i=1; i<5;i++){
    document.getElementById("box"+i).onclick = function(){
     
        if(playing==true){
            if(this.innerHTML==correctAnswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
    
                hide("wrong");
                show("correct");
               
                setTimeout(function(){
                    hide("correct")
                }, 1000);
                
                generatQA();
    
    
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function() {
                   hide("wrong") 
                }, 1000);
    
    
    
    
            }
        }
    
       }
    }