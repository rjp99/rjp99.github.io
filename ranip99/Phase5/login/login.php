<?php
error_reporting(E_ALL);
ini_set("display_errors", "on");
    //session_start();
    if (isset($_POST["page"])){
        if($_POST["page"] == "sign-up"){
            signup();
        }
        elseif($_POST["page"] == "log-in"){
            login();
        }
        elseif($_POST["page"] == "submit"){
            validlog();
        }
        elseif($_POST["page"] == "SUBMIT"){
            validsign();
        }
        elseif($_POST["page"] == "confirm"){
            success();
        }
    }
    else{
        choose();
    }

    function choose(){
        $script = $_SERVER['PHP_SELF'];
        // if has cookies then skip to validation phase
        if(isset($_COOKIE["user"])){
            $user = $_COOKIE["user"];
            $password = $_Cookie["pass"];
        }
        
        print <<<PAGE1
        <html>
        <head>
        <link href = 'login.css' rel='stylesheet'>
        <link rel ='icon' href ='../tlogo.png'>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> sign-up/log-in</title>
        </head>
        <body>
        <h3> sign-up/log-in</h3>
        <form method = "post" action = "$script">
        <p>
        <input type = "submit" name ="page" value = "sign-up" />
        </p>
        <p>
        <input type = "submit" name ="page" value = "log-in" />
        </p>
        </form>
        </body>
        </html>
PAGE1;
    }
    function signup(){
        //input username and password
        $script = $_SERVER['PHP_SELF'];
        print <<<PAGE2
        <html>
        <head>
        <link href = 'login.css' rel='stylesheet'>
        <link rel ='icon' href ='../tlogo.png'>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> sign-up</title>
        </head>
        <body>
        <h3> sign-up</h3>
        <form method = "post" action = "$script">
        <p>
        <input name = "user"/>
        </p>
        <p>
        <input name = "pass"/>
        </p>
        <p>
        <input type = "submit" name ="page" value = "SUBMIT" />
        </p>
        </form>
        </body>
        </html>
PAGE2;
    }
    function login(){
        //input username and password
        $script = $_SERVER['PHP_SELF'];
        print <<<PAGE3
        <html>
        <head>
        <link href = 'login.css' rel='stylesheet'>
        <link rel ='icon' href ='../tlogo.png'>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> log-in</title>
        </head>
        <body>
        <h3> log-in</h3>
        <form method = "post" action = "$script">
        <p>
        <input name = "user"/>
        </p>
        <p>
        <input name = "pass"/>
        </p>
        <p>
        
        <input type = "submit" name ="page" value = "submit" />
        </p>
        </form>
        </body>
        </html>
PAGE3;
    }
    function validsign(){
        // check if the username has been used
        // if so load success
        // if not load signin
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        //if(count(select user_name from ? where user_name = username)==0)
        if (true) {
            // set the username and password as input values
            echo $_POST["page"];
            print <<< Page4
	    <form method = "post" action = "$script"> 
            <input  name = 'user' value = $user />
            <input name = 'pass' value = $pass /> <br>
            <input type = "submit" name = "page" value = "confirm"/>
            </form>
Page4;

        }
        else{
            echo "<form method = 'post' action = '$script'>";
            echo "the username you have entered is invalid";
            echo '<input name = "page" value ="sign-up"/>';
            echo "</form>";
        }
        

         //reload page
         
    }
    function validlog(){
        //does this match a username password
        // if so load success
        // if not load login
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        // if(count(select user_name from ? where user_name = $user) and
        // andif($pass == select pass_word from ? where user_name = $user)
        if(true){
            echo "<form method = 'post' action = '$script'>";
            echo "<input name = 'user' value = $user>";
            echo "<input name = 'pass' value = $pass>";
            echo "<input type = 'submit' name = 'page' value = 'confirm'>";
            echo '<form';
        }
        else{
            echo "<form method = 'post' action = '$script'>";
            echo "your username or password is incorect please try again";
            echo '<input type = "submit" name = "page" value ="log-in"/>' ;
            echo "</form>";
        }   
        // reload page
        //location.reload();
        
    }
    function success(){
        //alert("you have successfully loged in");
        // or
        
        //set the cookie
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        setcookie("user",$user,time()+7200,"/");
        setcookie("pass",$pass,time()+7200,"/");
        echo "you have successfully logged in<br>";
        print("<a href='../main/main.php'>return to main page</a>");

    }

?>
