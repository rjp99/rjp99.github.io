<!DOCTYPE html>

<html lang="en">
  
    <head>
        <title>Meme Moment</title>
        <meta charset="UTF-8">
        <meta name="description" content="Meme Moment">
        <meta name="author" content="The Gratitude Group">
        <link href = "Meme.css" rel ="stylesheet">
        <link rel =”icon” href =”Logo.png”>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <script src = Meme.js></script>
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
            <table>
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

        <h1>Meme Moment</h1>
        <img class = "flowers" src="../flowers1.png" alt="flowers">
        <br>
        
        <h1>Memes</h1>
        <p>Welcome to Meme Moment!
            Here, you can select your mood in order to view a meme and have a laugh!
            Press the button and start smiling!</p>
        
        
        <button>Change Meme</button>
        <br>
        <img class = "img"  id = "meme" src = "meme1.jpeg"
            alt = "Meme" height = "480">
        <br>
        <h3 id = "caption">Caption</h3>


        <footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>April 19, 2021</p>
        </footer>
        
    </body>
</html>

