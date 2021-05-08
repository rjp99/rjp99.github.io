function grade() {

  //check input
  done = false;
  if (document.getElementById('oneA').checked == false && document.getElementById('oneB').checked == false){
    alert('Please Input Answer for All Questions')
  }
  else if (document.getElementById('twoA').checked == false && document.getElementById('twoB').checked == false){
    alert('Please Input Answer for All Questions')
  }
  else if (document.getElementById('threeA').checked == false && document.getElementById('threeB').checked == false &&
      document.getElementById('threeC').checked == false && document.getElementById('threeD').checked == false){
    alert('Please Input Answer for All Questions')
  }
  else if (document.getElementById('fourA').checked == false && document.getElementById('fourB').checked == false &&
      document.getElementById('fourC').checked == false && document.getElementById('fourD').checked == false){
    alert('Please Input Answer for All Questions')
  }
  else if (document.getElementById('five').value == ''){
    alert('Please Input Answer for All Questions')
  }
  else if (document.getElementById('six').value == ''){
    alert('Please Input Answer for All Questions')
  }
  else {
    done = true;
  }
  score = 0;
  //grade #1
  if(document.getElementById('oneB').checked == true){
    score += 1;
  }
  //grade #2
  if(document.getElementById('twoA').checked == true){
    score += 1;
  }
  //grade #3
  if (document.getElementById('threeA').checked == false && document.getElementById('threeB').checked == true &&
      document.getElementById('threeC').checked == false && document.getElementById('threeD').checked == false){
    score += 1;

  }
  //grade #4
  if (document.getElementById('fourA').checked == false && document.getElementById('fourB').checked == false &&
      document.getElementById('fourC').checked == true && document.getElementById('fourD').checked == false){
    score += 1;
  }
  //grade #5
  if (document.getElementById('five').value.toLowerCase() == 'http'){
    score += 1;
  }
  //grade #6
  if (document.getElementById('six').value.toLowerCase() == 'favicon'){
    score += 1;
  }
  //show score
  if(done){
    alert("Your grade is "+score+"/6.")
    document.getElementById('quiz').reset()
  }

}
