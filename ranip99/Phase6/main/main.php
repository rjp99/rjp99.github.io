<!DOCTYPE html>

<html lang="en">

    <head>
        <title>Mind Full to Mindful</title>
        <link rel="icon" href="../logo.png"/>
        <meta charset="UTF-8">
        <meta name="description" content="Home Page">
        <meta name="author" content="The Gratitude Group">
        <link href= "style.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        
    </head> 
  
    <body>

    <?php
    error_reporting(E_ALL);
    ini_set("display_errors", "on");
    if(isset($_COOKIE["user"])){
        echo "<p id = 'name' style='margin-top: 1%; position:absolute; left: 80%;'>";
        echo "Hello, ".$_COOKIE["user"]."! :)";
        echo "</p><br>";
    }
    else{
        print("
        <a href='../login/login.php' class = 'login' style='font-size: 1.3vw;'>Login</a><br><br>");
    }
        print("
        <nav>
            
            <table>
                
                <tr>
                    
                    <td><a href='../main/main.php'><img class = 'navLogo' src = '../tlogo.png' alt='logo'></a></td>
                    <td><a href='../mission/Main_mission.php'>Main Mission</a></td>
                    <td><a href='../meditation/Meditation_minute.php'>Meditation Minute</a></td>
                    <td><a href='../tea/Tea_time.php'>Tea Time</a></td>
                    <td><a href='../donation/Donation_dome.php'>Donation Dome</a></td>
                    <td><a href='../meme/Meme_moment.php'>Meme Moment</a></td>
                    <td><a href ='../contact/contact.php'>Contact Us</a></td>
                    <td><a href='../more/More.php'>More</a></td>
                </tr>
            </table>
        </nav>
    ");
    ?>
        <div class="bottom">

            <h1>Mind Full to Mindful</h1>
            <img class = "flowers" src="../flowers1.png" alt="flowers">
            
    

            <h1>About the Cause</h1>

	        <p class = "cause">As students, it is very easy to get caught up in day-to-day stress. 
		        Mind Full to Mindful serves as a one-stop-shop for anyone seeking an escape from their daily life. 
		        We decided to start this website to unite under the common goal of 
		        boosting mental health awareness, and making sure that we all have access 
		        to the resources we need. Join us for meditation, tea recipes, and more!</p>

            <img class = "flowers" src="../flowers1.png" alt="flowers">

            <br>
            <a href='../mission/Main_mission.php'>
                <div class="card" style="background-color: rgb(252, 245, 207);">
                    <div class="container">
                        <h3 style="color: rgb(236, 213, 81);">Main <br>Mission<hr></h3>
                        <p>The goal of this website is to be a one-stop shop for anyone experiencing stress or wanting to enhance their mindfulness... </p> 
                    </div>
                </div>
            </a>

            <a href='../meditation/Meditation_minute.php'>
                <div class="card" style="background-color: rgb(182, 255, 239);">
                    <div class="container">
                        <h3 style="color: rgb(70, 202, 173);">Meditation<br> Minute<hr></h3> 
                        <p>Guided section for users where we include video and audio clips of breathing exercises, meditation, or yoga videos...</p> 
                    </div>
                </div>
            </a>

            <a href='../tea/Tea_time.php' >
                <div class="card" style="background-color: rgb(197, 249, 253);">
                    <div class="container">
                        <h3 style="color: rgb(68, 190, 199); ">Tea<br> Time<hr></h3> 
                        <p>Find the recipes of an assortment of relaxing teas for you here...</p> 
                    </div>
                </div>
            </a>

            <a href='../donation/Donation_dome.php'>
                <div class="card" style="background-color: rgb(234, 204, 252);">
                    <div class="container">
                        <h3 style="color: rgb(139, 63, 184); ">Donation<br> Dome<hr></h3> 
                        <p>Donate to causes surrounding mental health and mindfulness...</p> 
                    </div>
                </div>
            </a>

            <a href='../meme/Meme_moment.php'>
                <div class="card" style="background-color: rgb(255, 223, 206);">
                    <div class="container">
                        <h3 style="color: rgb(255, 178, 107); ">Meme <br>Moment<hr></h3> 
                        <p>Uplift your mood by looking at memes...</p> 
                    </div>
                </div>
            </a>

            <a href ='../contact/contact.php'>
                <div class="card" style="background-color: #E4F7FF;">
                    <div class="container">
                        <h3 style="color: rgb(65, 160, 192); ">Contact<br> Us<hr></h3> 
                        <p>See who we are and leave us a message...</p> 
                    </div>
                </div>
            </a>

            <a href='../more/More.php'>
                <div class="card" style="background-color: rgb(201, 253, 219);">
                    <div class="container">
                        <h3 style="color: rgb(80, 175, 112); ">Learn<br> More<hr></h3> 
                        <p>Links to other articles and helpful blogs, as well as other mindfulness accessories (candles, yoga mats, gratitude journals, etc)...</p> 
                    </div>
                </div>
            </a>

            <br> 
            <br>

            <h1>About Us</h1>        
            <article class="column1"> 
                <img class = "us" src = "ammn.jpeg" alt="Ammn">
                <h3>Ammn</h3>
                <p>Mental health and mindulness advocate!</p>
                <p>My favorite mindfulness method is a warm cup of tea!</p>
            </article>

            <article class="column2"> 
                <img class = "us" src = "rachel.JPG" alt="Rachel">
                <h3>Rachel</h3>
                <p>Mindfulness helps not only mental health but physical health as well</p>
                <p>My favorite way to relieve stress is picking up a good book!</p>
            </article>

            <article class="column3"> 
                <img class = "us" src = "beatrix.jpeg" alt="Beatrix">
                <h3>Beatrix</h3>
                <p>Part of the Inagural class of female Eagle Scouts</p>
                <p>Eagle project was making self soothing kits</p>
            </article>
            <article class="column4">
                <img class = "us" src = "rani.png" alt="Rani">
                <h3>Rani</h3>
                <p>It's important to be mindful for better mental health.</p>
                <p>Meditation is the best way to relax for me!</p>   
            </article>

        </div>

        <footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>May 7, 2021</p>
        </footer>
	
    </body>
</html>
