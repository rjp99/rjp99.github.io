<!DOCTYPE html>

<html lang="en">

    <head>
        <title>Main Mission</title>
        <meta charset="UTF-8">
        <meta name="description" content="Main Mission">
        <meta name="author" content="The Gratitude Group">
        <link href = "mission.css" rel="stylesheet">
        <link rel="icon" href="../logo.png"/>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
    </head> 
    <body>
    <?php
        if(isset($_COOKIE["user"])){
            echo "<p style='font-size: 1.3vw; margin-top: 1%; position:absolute; left: 80%;'>";
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

        <h1>Main Mission</h1>
        <img class = "flowers" src="../flowers1.png" alt="flowers">
        <br>
        
    <div id = 'mid'>
    
        <h2>Welcome to Mind Full to Mindful!</h2>
        <p>Mindfulness is being able to be fully aware of our thoughts and recognizing our reality without wanting to change it.</p><br>
        <h2 style = "font-style: italic; color: #112078;">Mindfulness is a way of befriending ourselves and our experience. <br>-Jon Kabat-Zinn</h2><br>
        <p>The Gratitude Group has joined together to create this space in order to raise mental health awareness.</p><br>
        <h2 style = "font-style: italic; color: #112078;">Many people are alive but don’t touch the miracle of being alive. <br>-Thích Nhất Hạnh</h2><br>
        <p>Did you know 1 in 5 adults in the U.S. experience mental illness? However, less than half of 
            those who experience mental illness receive treatment.</p> <br>
        <h2 style = "font-style: italic; color: #112078;">When we get too caught up in the busyness of the world, we lose connection with one another – and ourselves. <br>-Jack Kornfield</h2><br>
        <p>Our mission at Mind Full to Mindful is to provide an escape from the every day stress of life while also
            sharing resources to find the help that over half of U.S. adults experiencing mental illness do not receive.
       </p><br>
       <p>You can find more statistics pertaining to mental health in the U.S. --> <a href='https://www.nami.org/mhstats'><u>here</u></a>.</p><br>
       <img src="stats.png" alt="statistics" class = "link">
       <p class=leftf>Source: National Institute of Mental Health</p>
        <p>Explore the rest of Mind Full to Mindful for different mindfulness techniques!</p>
        <p>Love,</p>
        <p>The Graditude Group</p>
    </div>

        <footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>May 7, 2021</p>
        </footer>

    </body>
</html>

