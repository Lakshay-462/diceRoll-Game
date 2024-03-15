var dice1Wins = 0;
var dice2Wins = 0;

function generateRandomNos(){
    var a = Math.random();
    var b = Math.random();
    a = a * 6;
    b = b * 6;
    a = Math.floor(a+1);
    b = Math.floor(b+1);

    showImage(a,1);
    showImage(b,2);
    document.getElementById("winner").style.visibility = "visible";
    let temp = document.getElementById("flag_image").style;
    if(a == b){
        temp.display = "none";
        document.getElementById("winner").innerHTML = "DRAW";
    }else if(a > b){
        dice1Wins++;
        document.getElementById("middlePlayer1").innerHTML = "Player 1 : " + dice1Wins ;
        temp.display = "inline";
        document.getElementById("winner").innerHTML = "Player 1 Wins";
        document.getElementById("flag_image").style.visibility = "visible";
        document.getElementsByClassName("middleSection")[0].style.flexDirection = "row";
    }else{
        dice2Wins++;
        document.getElementById("middlePlayer2").innerHTML = "Player 2 : " + dice2Wins ;
        temp.display = "inline";
        document.getElementById("winner").innerHTML = "Player 2 Wins";
        document.getElementById("flag_image").style.visibility = "visible";
        document.getElementsByClassName("middleSection")[0].style.flexDirection = "row-reverse";
    }
}


function showImage(RollNo,diceNo){
    var x;
    if(diceNo == 1){
        x = "dice1";
    }else{
        x = "dice2";
    }
    console.log(x);
    if(RollNo === 1){
        document.getElementById(x).querySelector("img").src = "./dice1.png";
    }else if(RollNo === 2){
        document.getElementById(x).querySelector("img").src = "./dice2.png";
    }else if(RollNo === 3){
        document.getElementById(x).querySelector("img").src = "./dice3.png";
        
    }else if(RollNo === 4){
        document.getElementById(x).querySelector("img").src = "./dice4.png";
        
    }else if(RollNo === 5){
        document.getElementById(x).querySelector("img").src = "./dice5.png";
        
    }else if(RollNo === 6){
        document.getElementById(x).querySelector("img").src = "./dice6.png";
    }
}

