<!DOCTYPE html>
 
<html lang="en">

	<head>
		<title>Meditation Minute</title>
		<meta charset="UTF-8">
		<meta name="description" content="Meditation Minute">
		<meta name="author" content="The Gratitude Group">
		<link href = "Meditation.css" rel ="stylesheet">
		<link rel =”icon” href =”../tlogo.png”>
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>

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

		<h1>Meditation Minute</h1>
        <img class = "flowers" src="../flowers2.png" alt="flowers">
        <br>
        

		<p>
			Welcome to Meditation Minute!
		</p>
		<p>
			Here you can select from many methods to relax such as meditation apps and guided meditation videos!
		</p>
		<p>
			So put something on and forget about your stress for a while!
		</p>
		<h4>Free Meditation Apps To Try Out:</h4>
		<p id='apps'>
			<p>
			<a href='https://insighttimer.com'><u>Insight Timer</u></a>, available for iOS, Android, and web, 
			has a library of over 80,000 free guided meditations on topics like stress, relationships, healing, 
			sleep, creativity, and more.</p>
			<p>
			<a href='https://smilingmind.com.au'><u>Smiling Mind</u></a>, available for iOS, Android, and web, 
			has a variety of specialized programs for families, children and teens of various ages, healthcare 
			workers, and educators. Smiling Mind is entirely free, and is developed with the help of psychologists 
			and health professionals.</p>
			<p>
			<a href='https://hminnovations.org/meditation-app'><u>Healthy Minds Program</u></a>, available for iOS 
			and Android, integrates neuroscience and research-based techniques with meditation training to increase 
			overall well-being.</p>
		</p>
		<br>
		<h4>Meditation Videos</h4>
		<p id='vids'>
			<p>
			<iframe width="560" height="315" 
			src="https://www.youtube.com/embed/ssss7V1_eyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
				5 Minute Mindfulness Meditation
			</p>
			<p>
			<iframe width="560" height="315" 
			src="https://www.youtube.com/embed/Xx6gj6RLRdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
				10 Minute Inner Peace Meditation
			</p>
			<p>
			<iframe width="560" height="315" 
			src="https://www.youtube.com/embed/itZMM5gCboo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
				15 Minute Self Love Meditation
			</p>
		</p>
		<br>
		<h4>Mindfulness Podcasts</h4>
		<iframe allow="encrypted-media" frameborder="0" width ='45%' height = "280" src="https://open.spotify.com/embed-podcast/episode/0PNcjkBYqU6Q5RlWfRQ9IZ"></iframe><br>
		<iframe allow="encrypted-media" frameborder="0" width ='45%' height = "280" src="https://open.spotify.com/embed-podcast/episode/6VWVKCmCuRJE5ZBrQzKUUq"></iframe><br>
		<iframe allow="encrypted-media" frameborder="0" width ='45%' height = "280" src="https://open.spotify.com/embed-podcast/episode/6evvdLweVB9XcjPBCwhK2w"></iframe>

		<p> 
			Ahh, don't you feel so relaxed now?
		</p>

		<footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>April 19, 2021</p>
        </footer>

	</body>
</html>

