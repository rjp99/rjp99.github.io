<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
    </body>
</html>

<?php
error_reporting(E_ALL);
ini_set("display_errors", "on");

    if($_POST["page"] == "Register"){
        signup();
    }
    elseif($_POST["page"] == "Login"){
        login();
    }
    elseif($_POST["page"] == "Thousands of Bees Moved Into Car"){
        article();
    }
    else{
        paper();
    }

    function paper() {
        $script = $_SERVER['PHP_SELF'];
        print ("
            <form>
                <label><input type = 'submit' name = 'page' value = 'Thousands of Bees Moved Into Car'></label><br>
                <label><input type = 'submit' name = 'page' value = 'Tree Struck and Shattered by Lightning'></label><br>
                <label><input type = 'submit' name = 'page' value = 'Ravens Steal Groceries From Costco Customers'></label><br>
                <label><input type = 'submit' name = 'page' value = 'Man in Teddy Bear Costume Walks Across Cities'></label><br>
                <label><input type = 'submit' name = 'page' value = 'Headless Beast in Tree Turns Out to be Croissant'></label><br>
            </form>
        ");
    }

    function login() {
        if (!isset ($_COOKIE["user"]))
        {
            print ("
                <form method = 'post' action = '$script'>
                <label><input name = 'user' type = 'text'/>Username</label>
                <label><input name = 'pass' type='password'/>Password</label>
                <input type = 'submit' name ='page' value = 'Submit' />
                <input type = 'submit' name ='page' value = 'Register' />
                </form>
            ");
        }
        else
        {
            echo $_POST['link']."jkbk";
           
        }
    }

    function signup() {
        print ("
            <form method = 'post' action = '$script'>
            <label><input name = 'user' type = 'text'/>Username</label>
            <label><input name = 'pass' type='password'/>Password</label>
            <input type = 'submit' name ='page' value = 'Submit' />
            </form>
        ");

        $numVisits = $_COOKIE["numVisits"];
            $numVisits++;
            setcookie ("numVisits", $numVisits, time()+3600*24*365);
    }

?>
