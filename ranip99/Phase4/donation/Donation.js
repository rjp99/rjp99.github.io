  function validate(){
      x = true
      //check if is valid card number
      if (!"valid"){
        x = false
        print("invalid card number")
      }
      //check for @....com for email
      if(!"valid"){
          x = false
          print("invalid email")
      }
      if(x){
          //process things and then 
          alert("Thank you "+document.getElementById('name').value + " for your donation of $" + document.getElementById('amount').value + ". We will send a receipt to " + document.getElementById('email').value + " for your card " + document.getElementById('card').value )
          // on eneter Thank you "name" for your donation of "amount". we will send a reciept to "email" for your card "card"
      }
      
  }
  // on eneter Thank you "name" for your donation of "amount". we will send a reciept to "email" for your card "card"
  //check if is valid card number
  //check for @....com for email