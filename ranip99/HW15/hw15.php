<?php
session_start();

print("
  <head>
    <title>Homework 15</title>
    <meta name='description' content='Quiz'>
    <meta name='author' content='Rani Patel'>
    <link rel='stylesheet' href='hw15.css'>
  </head>
");

if (!isset($_SESSION["logged"]))
{
  $_SESSION['time'] = time();
  login();


} else {
  if (!isset($_SESSION["number"])){
    $_SESSION["number"] = 1;
    $_SESSION["answer"] = 0;
    $_SESSION["score"] = 0;
    $_SESSION["question"] = "";
    $_SESSION["user"] = $_POST['user'];
  }
  
  questions();
}


function login() {
  $script = $_SERVER['PHP_SELF'];
  
  print("
  <form method = 'post' action = '$script'>
      <label>Username <input id = 'user' name = 'user' type = 'text'></label><br>
      <label>Password <input id = 'pass' name = 'pass' type = 'password'></label><br>
      <input type = 'submit' name = 'log' id = 'submit' value = 'Submit'/><br>
  </form>

  <script>
      setInterval(function(){ 
          document.getElementById('submit').disabled = false;

          if (document.getElementById('user').value == '' || document.getElementById('pass').value == ''){
              document.getElementById('submit').disabled = true;
          } else {
              document.getElementById('submit').disabled = false;
          }
      }, 1000);
  </script>
  ");
    if (isset($_POST['log'])){
      $user = $_POST['user'];
      $pass = $_POST['pass'];
      $file = fopen ('passwd.txt', 'r');
      $combo = fwrite($file, $user.':'.$pass."\n");
      while (!feof($file)) { 
        $line = fgets($file); 
        $line = trim($line); 
        $name = explode(":", $line);
        if($user == $name[0]){
          echo("Invalid User");
        break;
        } 
        else {
          $_SESSION["logged"] = 1;
        }
      } 
      fclose ($file);
    }
  }

function questions() {

	if (time() - $_SESSION['time'] > 900){
		echo("Your Score: ".$_SESSION["score"]); 
    session_destroy();
    echo("\nSession Destroyed!\n");
  }

  $total_number = 6;
  $number = $_SESSION["number"];
  $score = $_SESSION["score"];
  $user = $_SESSION["user"];

  if ($number == 1)
  {
    $script = $_SERVER['PHP_SELF'];
    $pass = $_POST['pass'];
    $file = fopen ('passwd.txt', 'a');
    $combo = fwrite($file, $user.':'.$pass."\n");
    fclose ($file);
    echo ("Hello, ".$user."!\n");
    
    print("
    <form method = 'post' action = '$script'>
        <table>
            <tr>
                <td><label><b>1. </b>'URL' stands for 'Universal Reference Link'</label></td>
                <td><label><input type='radio' value = 'oneA' name='one'>True</label><br>
                <label><input type='radio' value = 'oneB' name='one'>False</label></td>
            </tr>
        </table>
        <input type = 'submit' onClick='window.location.reload();' name = 'q1' value = 'Next'/><br>
    </form>
    ");
    $_SESSION["number"]++;
  }
  
  if ($number == 2){
    $script = $_SERVER['PHP_SELF'];
    $one = $_POST['one'];

    if ($one == 'oneB'){
      $_SESSION["score"] = $_SESSION["score"] + 10;
    }
    $file = fopen ('results.txt', 'a');
    $combo = fwrite($file, $user.':'.$_SESSION["score"]."\n");
    fclose ($file);

    echo ("Hello, ".$user."!\n");
   
    print("
    <form method = 'post' action = '$script'>
        <table>
            <tr>
                <td><label><b>2. </b>An Apple MacBook is an example of a Linux system.</label></td>
                <td><label><input type='radio' value = 'twoA' name='two'>True</label><br>
                <label><input type='radio' value = 'twoB' name='two'>False</label></td>
            </tr>
        </table>
        <input type = 'submit' name = 'q2' value = 'Next'/><br>
    </form>
    ");   
    $_SESSION["number"]++;
  }

  if ($number == 3){
    $script = $_SERVER['PHP_SELF'];
    $two = $_POST['two'];

    if ($two == 'twoA'){
      $_SESSION["score"] = $_SESSION["score"] + 10;
    }
    $file = fopen ('results.txt', 'a');
    $combo = fwrite($file, $user.':'.$_SESSION["score"]."\n");
    fclose ($file);

    echo ("Hello, ".$user."!\n");

    print("
    <form method = 'post' action = '$script'>
        <table>
            <tr>
              <td><label><b>3. </b>Which of these do NOT contribute to packet delay in a packet switching network?</label></td>
              <td><label><input type='checkbox' name='three[0]' value='threeA'>Processing delay at a router </label><br>
                <label><input type='checkbox' name='three[1]' value='threeB'>CPU workload on a client </label><br>
                <label><input type='checkbox' name='three[2]' value='threeC'>Transmission delay along a communications link </label><br>
                <label><input type='checkbox' name='three[3]' value='threeD'>Propagation delay </label>
            </td>
            </tr>
        </table>
        <input type = 'submit' name = 'q3' value = 'Next'/><br>
    </form>
    ");
    $_SESSION["number"]++;
  }

  if ($number == 4){
    $script = $_SERVER['PHP_SELF'];
    $three = $_POST['three'];
    echo ("Hello, ".$user."!\n");
    if (!isset($three[0]) && isset($three[1]) && !isset($three[2]) && !isset($three[3])){
      $_SESSION["score"] = $_SESSION["score"] + 10;
    }
    
    $file = fopen ('results.txt', 'a');
    $combo = fwrite($file, $user.':'.$_SESSION["score"]."\n");
    fclose ($file);

    print("
    <form method = 'post' action = '$script'>
        <table>
            <tr>
              <td><label><b>4. </b>This Internet layer is responsible for creating the packets that move across the network.</label></td>
              <td><label><input type='checkbox' name='four[0]' value='fourA'>Physical </label><br>
                <label><input type='checkbox' name='four[1]' value='fourB'>Data Link </label><br>
                <label><input type='checkbox' name='four[2]' value='fourC'>Network </label><br>
                <label><input type='checkbox' name='four[3]' value='fourD'>Transport </label>
              </td>
            </tr>
        </table>
        <input type = 'submit' name = 'q4' value = 'Next'/><br>
    </form>
    ");   
    $_SESSION["number"]++;
  }

  if ($number == 5){
    $script = $_SERVER['PHP_SELF'];
    $four = $_POST['four'];
    echo ("Hello, ".$user."!\n");
    if (!isset($four[0]) && !isset($four[1]) && isset($four[2]) && !isset($four[3])){
      $_SESSION["score"] = $_SESSION["score"] + 10;
    }
    
    $file = fopen ('results.txt', 'a');
    $combo = fwrite($file, $user.':'.$_SESSION["score"]."\n");
    fclose ($file);

    print("
    <form method = 'post' action = '$script'>
        <table>
            <tr>
              <td><label><b>5. </b> _______ is a networking protocol that runs over TCP/IP, and governs communication between web browsers and web servers. </label></td>
              <td><input type='text' name='five' id='five'></td>
            </tr>
        </table>
        <input type = 'submit' name = 'q5' value = 'Next'/><br>
    </form>
    ");   
    $_SESSION["number"]++;
  }

  if ($number == 6){
    $script = $_SERVER['PHP_SELF'];
    $five = $_POST['five'];
    echo ("Hello, ".$user."!\n");
    if ($five == 'http'){
      $_SESSION["score"] = $_SESSION["score"] + 10;
    }
    
    $file = fopen ('results.txt', 'a');
    $combo = fwrite($file, $user.':'.$_SESSION["score"]."\n");
    fclose ($file);

    print("
    <form method = 'post' action = '$script'>
        <table>
            <tr>
            <td><label><b>6. </b>A small icon displayed in a browser tabl that identifies a website is called a ________. </label></td>
            <td><input type='text' name='six' id='six'></td>
            </tr>
        </table>
        <input type = 'submit' name = 'q6' value = 'Next'/><br>
    </form>
    ");   
    $_SESSION["number"]++;
  }


  if ($number > $total_number)
  {
    $script = $_SERVER['PHP_SELF'];
    $six = $_POST['six'];
    echo ("Hello, ".$user."!\n");
    if ($six == 'favicon'){
      $_SESSION["score"] = $_SESSION["score"] + 10;
    }
    
    $file = fopen ('results.txt', 'a');
    $combo = fwrite($file, $user.':'.$_SESSION["score"]."\n");
    fclose ($file);
    $score = $_SESSION["score"];
    $total = $total_number*10;

    print <<<FINAL_SCORE
    Your final score is $score correct out of $total. <br /><br />
    Thank you $user for taking the quiz. <br /><br />
FINAL_SCORE;
    session_destroy();
  }
}

?>
