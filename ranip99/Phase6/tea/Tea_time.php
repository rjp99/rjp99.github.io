<!DOCTYPE html>

<html lang="en">

	<head> 
		<title>Tea Time</title>
		<meta charset="UTF-8">
		<meta name="description" content="Tea Time">
		<meta name="author" content="The Gratitude Group">
		<link href = "Tea.css" rel ="stylesheet">
		<link rel="icon" href="../logo.png"/>
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>

	</head> 
      
	<body>
	<script language='javascript' type='text/javascript'>
		function ajaxFunction(selected) {
			var ajaxRequest;
			ajaxRequest = new XMLHttpRequest();
			
			ajaxRequest.onreadystatechange = function() {
				if (ajaxRequest.readyState == 4) {
					var ajaxDisplay = document.getElementById('ajaxDiv');
					ajaxDisplay.innerHTML = ajaxRequest.responseText;
				}
			}
			
			var type = selected.toString();
			var queryString = "?selected=" + type;
			
			ajaxRequest.open("GET", "teaAJAX.php" + queryString, true);
			ajaxRequest.send(null);
		}
	</script>
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

		<h1>Tea Time</h1>
        <img class = "flowers" src="../flowers1.png" alt="flowers">
        <br>
        

		<p>Welcome to Tea Time!</p>
		<p>Here, you can select by type of tea or even order by mood!</p>
		<p>Well, what are you waiting for? Let's get this parTea started?</p>
		<section><h2>Order by:<h2></section>
		<form method = 'post'>
			<input type='button' name = 'alpha' onclick ="ajaxFunction('alpha')" value='Alphabetical (All)'>
			<input type='button' name = 'black' onclick ="ajaxFunction('black')" value='Black Teas'>
			<input type='button' name = 'green' onclick ="ajaxFunction('green')" value='Green Teas'>
			<input type='button' name = 'white' onclick ="ajaxFunction('white')" value='White Teas'>
			<input type='button' name = 'oolong' onclick ="ajaxFunction('oolong')" value='Oolong Teas'>
		</form>
		<br>
		<div id='ajaxDiv'>
			<script> ajaxFunction('alpha')
			</script>
		</div>

		<p> We hope you feel relaxed and calm!
		</p>
		<p>Feel free to come back any time you desire a pick me up in the form of a warm drink.
		</p>
		<p>
			Now, go spend some qualiTEA time browsing our other pages :)
		</p>

		<footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>May 7, 2021</p>
        </footer>


	</body>
</html>
