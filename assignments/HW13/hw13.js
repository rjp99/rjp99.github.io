pair1 = ['&#x1F33A', '&#x1F36D', '&#x1F3AA', '&#x1F6FA', '&#129409', '&#x1F984', '&#x26C4', '&#x1F9DB',
        '&#x1F33A', '&#x1F36D', '&#x1F3AA', '&#x1F6FA', '&#129409', '&#x1F984', '&#x26C4', '&#x1F9DB'];
tries = 0
id1 = ""
id2 = ""
clicks = 0
matched = 0

$(document).ready (function () {

  //shuffle emoji
  pair1 = shuffle(pair1);
  num = 0
  $("button").each(function () {
      //assign random emoji for each button
      document.getElementById("t"+$(this).attr("id")).innerHTML = pair1[num]
      num++;
      //hide emoji at beginning
      tid = "#t" + $(this).attr("id");
      $(tid).fadeOut(0);
  });

  //show emoji once clicked
  $("button").click(function () {
    //no more than 2 buttons should be clicked at once
    if(clicks < 2){
      tid = "#t" + $(this).attr("id");
      //first click
      if (clicks == 0){
        //update tries
        tries++;
        document.getElementById('try').innerHTML = "Number of Tries: " + tries;
        clicks++;
        id1 = tid;
        //show letter for 3 seconds and reset clicks and emojis
        $(id1).fadeIn(100).delay(3000).fadeOut(100, function(){clicks= 0; $(id2).fadeOut(0);});
      }
      //second button clicked; not first one twice
      else if ($(this).attr("id") != id1.slice(2)){
        clicks ++;
        id2 = "#t" + $(this).attr('id');
        //check if match
        $(id2).fadeIn(function(){same(id1, id2);});
      }

    }

  });

});

//checks for match
function same(one, two) {
  //text is same
  onet = document.getElementById(one.slice(1)).innerHTML
  twot = document.getElementById(two.slice(1)).innerHTML
  //id is not same
  if(onet == twot && one != two){
    //bring into view and disable buttons
    $(one).fadeIn();
    $(two).fadeIn();
    $("#" + one.slice(2)).css("background-color", "#651fff");
    $("#" + two.slice(2)).css("background-color", "#651fff");
    $("#" + one.slice(2)).prop('disabled', true);
    $("#" + two.slice(2)).prop('disabled', true);
    //reset
    id1 = "";
    id2 = "";
    //finished
    matched ++;
    if (matched == 8) {
      alert("You Win!\nTries: "+tries);
    }

  }
}

//shuffles given array
function shuffle(arr) {
  for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
}
