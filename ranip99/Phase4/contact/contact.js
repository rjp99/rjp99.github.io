function valid(){
    e = document.getElementById("email").value
    n = document.getElementById("name").value
    
   
   
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)){
       v = true
   }
   else{
       v= false
   }
   if(v == true){
    alert("Thank You "+ n +" for your comments. We will take it under advisement.")
   }
   else{
       alert("Invalid email please try again.")
   }
}