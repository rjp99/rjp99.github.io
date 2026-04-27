
letter = "X";
scoreX = 0;
scoreO = 0;

//button clicked on
function move(event) {
    if (event.target.innerHTML == ""){
        event.target.innerHTML = letter;
        if (letter == "X"){
            letter = "O";
        } else {
            letter = "X";
        }
        won();
    } 
}

function won() {
    //check if anyone won 

    //X has won
    if(
        document.getElementById("tl").innerHTML == "X" && 
        document.getElementById("tm").innerHTML == "X" && 
        document.getElementById("tr").innerHTML == "X" 
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("ml").innerHTML == "X" && 
        document.getElementById("mm").innerHTML == "X" && 
        document.getElementById("mr").innerHTML == "X"
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("bl").innerHTML == "X" && 
        document.getElementById("bm").innerHTML == "X" && 
        document.getElementById("br").innerHTML == "X"
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tl").innerHTML == "X" && 
        document.getElementById("ml").innerHTML == "X" && 
        document.getElementById("bl").innerHTML == "X" 
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tm").innerHTML == "X" && 
        document.getElementById("mm").innerHTML == "X" && 
        document.getElementById("bm").innerHTML == "X" 
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tr").innerHTML == "X" && 
        document.getElementById("mr").innerHTML == "X" && 
        document.getElementById("br").innerHTML == "X" 
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tl").innerHTML == "X" && 
        document.getElementById("mm").innerHTML == "X" && 
        document.getElementById("br").innerHTML == "X" 
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tr").innerHTML == "X" && 
        document.getElementById("mm").innerHTML == "X" && 
        document.getElementById("bl").innerHTML == "X" 
    ){
        setTimeout(function(){ alert("X has won"); }, 200);
        scoreX++;
        setTimeout(clean, 200);
    }

    ///// O has won
    else if(
        document.getElementById("tl").innerHTML == "O" && 
        document.getElementById("tm").innerHTML == "O" && 
        document.getElementById("tr").innerHTML == "O" 
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("ml").innerHTML == "O" && 
        document.getElementById("mm").innerHTML == "O" && 
        document.getElementById("mr").innerHTML == "O"
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("bl").innerHTML == "O" && 
        document.getElementById("bm").innerHTML == "O" && 
        document.getElementById("br").innerHTML == "O"
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tl").innerHTML == "O" && 
        document.getElementById("ml").innerHTML == "O" && 
        document.getElementById("bl").innerHTML == "O" 
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tm").innerHTML == "O" && 
        document.getElementById("mm").innerHTML == "O" && 
        document.getElementById("bm").innerHTML == "O" 
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tr").innerHTML == "O" && 
        document.getElementById("mr").innerHTML == "O" && 
        document.getElementById("br").innerHTML == "O" 
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tl").innerHTML == "O" && 
        document.getElementById("mm").innerHTML == "O" && 
        document.getElementById("br").innerHTML == "O" 
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if(
        document.getElementById("tr").innerHTML == "O" && 
        document.getElementById("mm").innerHTML == "O" && 
        document.getElementById("bl").innerHTML == "O" 
    ){
        setTimeout(function(){ alert("O has won"); }, 200);
        scoreO++;
        setTimeout(clean, 200);
    }
    else if (
        document.getElementById("tl").innerHTML != "" &&
        document.getElementById("tm").innerHTML != "" &&
        document.getElementById("tr").innerHTML != "" &&
        document.getElementById("ml").innerHTML != "" &&
        document.getElementById("mm").innerHTML != "" &&
        document.getElementById("mr").innerHTML != "" &&
        document.getElementById("bl").innerHTML != "" &&
        document.getElementById("bm").innerHTML != "" &&
        document.getElementById("br").innerHTML != "" 
    ){
        setTimeout(function(){ alert("Draw"); }, 200);
        setTimeout(clean, 200);
    }

}

//restart
function clean() {
    document.getElementById("tl").innerHTML = "";
    document.getElementById("tm").innerHTML = "";
    document.getElementById("tr").innerHTML = "";
    document.getElementById("ml").innerHTML = "";
    document.getElementById("mm").innerHTML = "";
    document.getElementById("mr").innerHTML = "";
    document.getElementById("bl").innerHTML = "";
    document.getElementById("bm").innerHTML = "";
    document.getElementById("br").innerHTML = "";

    document.getElementById("X").innerHTML = scoreX;
    document.getElementById("O").innerHTML = scoreO;
    letter = "X";
}