var points = 0;
var current; 

function ScoreUp(){
    current = 10;
    points = points + current;
    document.getElementById("scoreCard").innerHTML ="Score: " + points;
}

function ScoreDown(){
    current = 10;
    points = points - current; 
    document.getElementById("scoreCard").innerHTML = "Score: " + points + "Points";
}
function Navigate(pageName){
    window.location = pageName;
}
function Incorrect(){
    //grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong1");
    wrongAnswer.style.color="red";
//    ScoreDown();

}
function Wrong(){
    var wrongAnswer = document.getElementById("wrong2");
    wrongAnswer.style.color="red";
//    ScoreDown();

}
function Notright(){
    var wrongAnswer = document.getElementById("wrong3");
    wrongAnswer.style.color="red";
//    ScoreDown();

}

function Correct(){
    var correctAnswer = document.getElementById("correct1");
    correctAnswer.style.color="green";
    //ScoreUp();
    Navigate("Winner.html");
   //window.setTimeout( Navigate("ques3.html"), 1000)
}


