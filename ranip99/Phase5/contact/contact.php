<!DOCTYPE html>

<html lang="en"> 

    <head>
        <title>Contact Us</title>
        <meta charset="UTF-8">
        <meta name="description" content="Contact Information">
        <meta name="author" content="The Gratitude Group">
        <link href = "contact.css" rel ="stylesheet">
        <link rel =”icon” href =”../tLogo.png”>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <script type = "text/javascript" src = "contact.js"></script>
    </head>
    
    <body>
        <?php
        if(isset($_COOKIE["user"])){
            echo "<p style='font-size: smaller; margin-top: 1%; position:absolute; left: 90%;'>";
            echo "Hello, ".$_COOKIE["user"]."! :)";
            echo "</p><br><br>";
        }
        ?>
        <nav>
            <table id = 'nav'>
                <tr>
                    <td><a href="../main/main.php"><img class = "navLogo" src = "../tlogo.png" alt="logo"></a></td>
                    <td><a href="../mission/Main_mission.php">Main Mission</a></td>
                    <td><a href="../meditation/Meditation_minute.php">Meditation Minute</a></td>
                    <td><a href="../tea/Tea_time.php">Tea Time</a></td>
                    <td><a href="../donation/Donation_dome.php">Donation Dome</a></td>
                    <td><a href="../meme/Meme_moment.php">Meme Moment</a></td>
                    <td><a href ="../contact/contact.php">Contact Us</a></td>
                    <td><a href="../more/More.php">More</a></td>
                </tr>
            </table>
        </nav>
 
        <div class ="bottom">

            <h1>Contact Us</h1>  

            <img class = "flowers" src="../flowers2.png" alt="flowers">
            <br>

            <?php
            $nameErr = $emailErr = '';
            
            if ($_POST['submit'] == "Enter") {
                
                if ((!isset($_POST['name'])) || (!isset($_POST['email'])) || (!isset($_POST['comments']))) {
                    $error = '*'.'Please fill out all the fields';
                }
                else {
                    $name = test_input($_POST['name']);
                    $email = test_input($_POST['email']);
                    $comments = $_POST['comments'];

                    if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
                        $nameErr = "Please enter valid name";
                    }
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $emailErr = "Please enter valid email";
                    }
                    if ($nameErr == '' && $emailEr == ''){
                        $file = fopen ("../comments.txt", "a");
			            date_default_timezone_set('America/Chicago');
			            fwrite($file, date("l, F jS, Y h:i:s A")." \t Contact: ".$name.": ".$email.", ".$comments."\n\n");
			            fclose ($file);
                    }
                    
                }
            }

            function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
            ?>
            
            <form action='contact.php' method='post'>
                <table id = "form">
                    <tr>
                        <td><label>Name: </label></td>
                        <td><input name = "name" type = "text" id = "name" size = "30" /><span class='error'>* <?php echo $nameErr; ?></span></td>
                    </tr>
                    <tr>
                        <td><label>Email Address: </label></td>
                        <td><input name = "email" type = "text" id = "email" size = "30" /><span class='error'>* <?php echo $emailErr; ?></span></td>
                    <tr>
                        <td><label>What would you like to tell us? </label></td>
                        <td><textarea name = "comments" rows = "8" cols = "28" placeholder="Enter your comments here: "></textarea></td>
                    </tr>
                    <tr>
                        <td><input type = "submit" name = "submit" value = "Enter" /></td>
                        <td><input type = "reset" value = "Clear" /></td>
                    </tr>
                </table>
                 <br>
            </form>
              
            <img class = "flowers" src="../flowers2.png" alt="flowers">
            <br>

    
            <article class="column1"> 
                <img class = "us" src = "ammn.jpeg" alt="Ammn">
                <h3>Ammn</h3>
                <p>Finance, MIS, CS</p>
                <p>Chat with me about tea & yoga :) </p>
                <p>My favorite mindfulness method is a warm cup of tea!</p>
                <p>Email: <a href="mailto:ammn@utexas.edu">ammn@utexas.edu</a></p>
                <p>Phone: 832-757-9430</p>
            </article>
    
            <article class="column2"> 
                <img class = "us" src = "rachel.JPG" alt="Rachel">
                <h3>Rachel</h3>
                <p>Mathematics, Business, CS</p>
                <p>Mindfulness helps not only mental health but physical health as well</p>
                <p>My favorite way to relieve stress is picking up a good book!</p>
                <p>Email: <a href='mailto:rachel.solfronk@yahoo.com'>rachel.solfronk@yahoo.com</a></p>
                <p>Phone: 832-253-3360</p>
            </article>
            
            <article class="column3"> 
                <img class = "us" src = "beatrix.jpeg" alt="Beatrix">
                <h3>Beatrix</h3>
                <p>Part of the Inagural class of female Eagle Scouts</p>
                <p>Eagle project was making self soothing kits</p>
                <p>Email: <a href='mailto:beatrixjackman@gmail.com'>beatrixjackman@gmail.com</a></p>
            </article>
            
            <article class="column4">
                <img class = "us" src = "rani.png" alt="Rani">
                <h3>Rani</h3>
                <p>Biochemistry, CS</p>
                <p>It's important to be mindful for better mental health.</p>
                <p>Meditation is the best way to relax for me!</p>
                <p>Email: <a href="mailto:patelrani99@gmail.com">patelrani99@gmail.com</a></p>
                <p>Phone: 832-690-9258</p>     
            </article>
 
        </div>

        <footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>April 19, 2021</p>
        </footer>
    </body>
</html>

