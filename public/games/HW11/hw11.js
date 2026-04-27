puzzle1 = ['puzzle1/img1-1.jpg', 'puzzle1/img1-2.jpg', 'puzzle1/img1-3.jpg', 'puzzle1/img1-4.jpg', 'puzzle1/img1-5.jpg',
           'puzzle1/img1-6.jpg', 'puzzle1/img1-7.jpg','puzzle1/img1-8.jpg', 'puzzle1/img1-9.jpg',
           'puzzle1/img1-10.jpg', 'puzzle1/img1-11.jpg', 'puzzle1/img1-12.jpg']
puzzle2 = ['puzzle2/img2-1.jpg', 'puzzle2/img2-2.jpg', 'puzzle2/img2-3.jpg', 'puzzle2/img2-4.jpg', 'puzzle2/img2-5.jpg',
           'puzzle2/img2-6.jpg', 'puzzle2/img2-7.jpg','puzzle2/img2-8.jpg', 'puzzle2/img2-9.jpg',
           'puzzle2/img2-10.jpg', 'puzzle2/img2-11.jpg', 'puzzle2/img2-12.jpg']
puzzle3 = ['puzzle3/img3-1.jpg', 'puzzle3/img3-2.jpg', 'puzzle3/img3-3.jpg', 'puzzle3/img3-4.jpg', 'puzzle3/img3-5.jpg',
           'puzzle3/img3-6.jpg', 'puzzle3/img3-7.jpg','puzzle3/img3-8.jpg', 'puzzle3/img3-9.jpg',
           'puzzle3/img3-10.jpg', 'puzzle3/img3-11.jpg', 'puzzle3/img3-12.jpg']
num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
puzzles = [puzzle1, puzzle2, puzzle3]

window.onload = function load() {
  puzzle = puzzles[Math.floor(Math.random() * 3)];

  for (var i = 0; i < num.length; i++) {
    document.getElementById(num[i]).src = puzzle[i];
    x = Math.floor((window.innerWidth-300) * Math.random() + 100);
    y = Math.floor(Math.random() * (window.innerHeight-100 - window.innerHeight/2) + window.innerHeight/2);
    console.log(x,y, document.getElementById(num[i]));
    document.getElementById(num[i]).style.left=x + "px";
    document.getElementById(num[i]).style.top=y + "px";
  }
  count = setInterval(timer, 1000);

  for (each in puzzle1){
    x = window.innerWidth * Math.random();
    y = window.innerHeight * Math.random();
    each.x = x;
    each.y = y;
  }
}

time = 0;
seconds = "";
function timer(){
  time ++;
  sec = time % 60;
  min = Math.floor(time / 60);
  if (sec < 10) {
    seconds = "0"+String(sec);
  } else {
    seconds = String(sec);
  }
  document.getElementById("time").innerHTML = "Time: " + min + ":" + seconds;

}

function done() {
  //setInterval(timer, 1000);
  clearInterval(count);
}



// Define variables for the values computed by the grabber event  handler but needed by mover event handler
var g;

// The event handler function for grabbing the word
function grabber(event) {

   // Set the global variable for the element to be moved
   theElement = event.currentTarget;
   event.preventDefault();

   // Determine the position of the word to be grabbed, first removing the units from left and top
   posX = parseInt(theElement.style.left);
   posY = parseInt(theElement.style.top);

   // Compute the difference between where it is and where the mouse click occurred
   diffX = event.clientX - posX;
   diffY = event.clientY - posY;

   // Now register the event handlers for moving and dropping the word
   document.addEventListener("mousemove", mover, true);
   document.addEventListener("mouseup", dropper, true);

}

// The event handler function for moving the word
function mover(event) {
   // Compute the new position, add the units, and move the word
   theElement.style.left = (event.clientX - diffX) + "px";
   theElement.style.top = (event.clientY - diffY) + "px";
}

// The event handler function for dropping the word
function dropper(event) {
   // Unregister the event handlers for mouseup and mousemove
   document.removeEventListener("mouseup", dropper, true);
   document.removeEventListener("mousemove", mover, true);
}
