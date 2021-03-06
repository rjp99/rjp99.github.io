 <!DOCTYPE html>

<html lang="en">

	<head>
		<title>More</title>
		<meta charset="UTF-8">
		<meta name="description" content="More">
		<meta name="author" content="The Gratitude Group">
		<link href = "More.css" rel ="stylesheet">
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

		<h1>More</h1>
        <img class = "flowers" src="../flowers1.png" alt="flowers">
        <br>
        

		<p>
			Hi! Thank you so much for checking out our site.
		</p>
		<p>
		We hope you found what you were looking for, whether it 
		</p>
		<p>
			is peace, or just a quick pick-me-up!
		</p>

		<p>
			Below are links to articles such as reading about breathing
		</p> 
		<p> techniques and positive thinking:
		</p>
		<div class = "tablee">
			<table>
				<tr>
				<th>Category</th>
				<th>Link</th>
				</tr>
				<tr>
				<td>On Campus Resource</td>
				<td><a href="https://cmhc.utexas.edu">UT Health Center</a></td>
				</tr>
				<tr>
				<td>On Campus Resource</td>
				<td><a href="https://cmhc.utexas.edu/wellbeing/stressreduction.html">UT Counseling</a></td>
				</tr>
				<tr>
				<td>Blog</td>
				<td><a href="https://www.oxfordmindfulness.org/news/">Oxford Mindfulness Centre</a></td>
				</tr>
				<tr>
				<td>Blog</td>
				<td><a href="https://tinybuddha.com">Tiny Buddha</a></td>
				</tr>
				<tr>
					<td>Stress Relief</td>
					<td><a href="https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques">Breathing Techniques</a></td>
				</tr>
				<tr>
					<td>Coloring Books</td>
					<td><a href="https://www.amazon.com/Best-Sellers-Books-Coloring-Grown-Ups/zgbs/books/11357541011">Coloring Books on Amazon</a></td>
				</tr>
				<tr>
					<td>Exercise Equipment</td>
					<td><a href="https://www.amazon.com/Meditation-Equipment/s?k=Meditation+Equipment">Get Your Yoga Mat Here</a></td>
				</tr>
				<tr>
					<td>Mindfulness Books</td>
					<td><a href="https://www.mindful.org/the-best-mindfulness-books-of-2020/">Books to Read on Mindfulness</a></td>
				</tr>
		   
			</table>
		</div>

		<p> 
			Please do not forget to share this helpful website
		</p> 
		<p> with those that you think can benefit from it
		</p>
		<p><b> We are not experts ...</b></p>


		<footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>April 19, 2021</p>
        </footer>

	</body>
</html>
