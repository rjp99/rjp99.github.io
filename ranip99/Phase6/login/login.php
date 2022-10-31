<?php
//for login
//"count(SELECT * from ? WHERE user == real_escape_string($user) and pass == real_escape_string($pass))"
// if count == 0 then not a login that has been used
// if count == 1 then login works
//for signup 
//"count(SELECT * from ? WHERE user == real_escape_string($user))"
//if count != 0 thenthe user name has already been usesd
//if count == 0 then username is allowed
    // "INSERT INTO ? VALUES(real_escape_string($user),real_escape_string($pass));"
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
        <link rel="icon" href="../logo.png"/>
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
        <link rel="icon" href="../logo.png"/>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> sign-up</title>
        </head>
        <body>
        <h3> sign-up</h3>
        <form method = "post" action = "$script">
        <p>
        username: <input name = "user"/>
        </p>
        <p>
        password: <input name = "pass"/>
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
        <link rel="icon" href="../logo.png"/>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> log-in</title>
        </head>
        <body>
        <h3> log-in</h3>
        <form method = "post" action = "$script">
        <p>
        username: <input name = "user"/>
        </p>
        <p>
        password: <input name = "pass"/>
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


        print <<<Test
         <head>
        <link href = 'login.css' rel='stylesheet'>
        <link rel="icon" href="../logo.png"/>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> sign-up/log-in</title>
        </head>
Test;
        echo "<body>";
        $script = $_SERVER['PHP_SELF'];
        // check if the username has been used
        // if so load success
        // if not load signin
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        //if(count(select user_name from ? where user_name = username)==0)

        $db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
        if ($db->connect_error) {
                die("Connection failed: " . $db->connect_error);
        }
        $user = $db->real_escape_string($user);
        $pass = $db->real_escape_string($pass);
        $command = "SELECT COUNT(*) FROM Credentials WHERE Username = '$user';";
        $result = $db->query($command);
        
        $row = $result->fetch_row();
        //echo $row[0];
        if ($row[0] == 0){
             $command = "Insert into Credentials Values ('$user', '$pass');";
             $result = $db->query($command);
             // set the username and password as input values
            echo $_POST["page"];
            print <<< Page4
	    <form method = "post" action = "$script"> 
            username: <input  name = 'user' value = $user readonly="readonly"/></br>
            password: <input name = 'pass' value = $pass readonly="readonly"/> </br>
            <input type = "submit" name = "page" value = "confirm"/>
            </form>
        
Page4;

        } else {
            echo "<br><br>The username $user is already taken :( \n <br><br>";
            //echo "<script>alert('Username Taken');";
            //echo $_POST["page"];
            echo "<form method = 'post' action = '$script'>";
            //echo "the username you have entered is invalid\n";
            //echo '<input name = "page" value ="sign-up"/>';
            echo "Retry <br>";
            echo '<input type = "submit" name = "page" value = "sign-up" /> or ';
            echo '<input type = "submit" name = "page" value = "log-in" />';
            echo "</form>";
            
        }

   
    echo "</body>";

         //reload page
         
    }
    function validlog(){
        print <<<Test1
         <head>
        <link href = 'login.css' rel='stylesheet'>
        <link rel="icon" href="../logo.png"/>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> sign-up/log-in</title>
        </head>
Test1;
        echo "<body>";
        $script = $_SERVER['PHP_SELF'];
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        // if(count(select user_name from ? where user_name = $user) and
        // andif($pass == select pass_word from ? where user_name = $user)


        $db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
        if ($db->connect_error) {
                die("Connection failed: " . $db->connect_error);
        }
        $user = $db->real_escape_string($user);
        $pass = $db->real_escape_string($pass);
        $command = "SELECT * FROM Credentials WHERE Username = '$user';";
        $result = $db->query($command);

        $row = $result->fetch_row();
        if ($result->num_rows == 0 || $pass != $row[1]){
            echo "<form method = 'post' action = '$script'>";
            echo "<br><br>Username or Password is incorrect :( <br><br>";
            echo "Retry<br>";
            echo '<input type = "submit" name = "page" value ="log-in"/> or ' ;
            echo '<input type = "submit" name = "page" value ="sign-up"/>' ;
            echo "</form>";
        } else {
            echo "<form method = 'post' action = '$script'>";
            echo "username: <input name = 'user' value = $user readonly='readonly'><br>";
            echo "password: <input name = 'pass' value = $pass readonly='readonly'><br>";
            echo "<input type = 'submit' name = 'page' value = 'confirm'>";
            echo '</form>';
        }
 

        echo "</body>";   
    }

    function success(){
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        setcookie("user",$user,time()+7200,"/");
        setcookie("pass",$pass,time()+7200,"/");
        print <<<Test2
         <head>
        <link href = 'login.css' rel='stylesheet'>
        <link rel="icon" href="../logo.png"/>
        <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Raleway' />
        <link type='text/css' href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <title> sign-up/log-in</title>
        </head>
Test2;
        echo "<body>";
        echo "you have successfully logged in<br>";
        print("<a href='../main/main.php'>return to main page</a>");
        echo "</body>";

    }

?>
