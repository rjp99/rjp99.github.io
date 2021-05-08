<!DOCTYPE html> 

<html lang="en"> 

	<head>
		<title>Donation Dome</title>
		<meta charset="UTF-8">
		<meta name="description" content="Donation Dome">
		<meta name="author" content="The Gratitude Group">
		<link href = "Donation.css" rel ="stylesheet">
		<link rel =”icon” href =”../tlogo.png”>
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link type="text/css" href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
		<script type = "text/javascript" src = "Donation.js"></script>
	</head> 
	
	<body>
	<?php
		error_reporting(E_ALL);
		ini_set("display_errors", "on");
        if(isset($_COOKIE["user"])){
            echo "<p style='font-size: smaller; margin-top: 1%; position:absolute; left: 90%;'>";
            echo "Hello, ".$_COOKIE["user"]."! :)";
            echo "</p><br><br>";
        }
    ?>
		<nav>
			<table id = "nav">
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
		
		<h1>Donation Dome</h1>  
		<p>Welcome to Donation Dome!
			Here, you can choose to leave us a donation!
			Hopefully you are feeling generous after becoming mindful!</p>
		<div id = "halfCircle">

        <img class = "flowers" src="../flowers2.png" alt="flowers">
        <br>  
		 
	<?php
	error_reporting(E_ALL);
	ini_set("display_errors", "on");
	//$once = true;
	if (isset($_POST['page'])){ 
		if ($_POST['page'] == 'Enter'){
		confirmPage();
		}	
	}
	else
	{	
		donationForm();
	}

	function donationForm() {
		$script = $_SERVER['PHP_SELF'];
		print <<<PAGE1
		<form class = 'rows' method = 'post' action = '$script'>
			<table class='form'>
				<tr>
					<td><label> Name* </label></td>
					<td><input name = 'name' id = 'name' type = 'text' placeholder ='First Last'/></td>
				</tr>
				<tr>
					<td><label>Email Address*</label></td>
					<td><input name = 'email' id = 'email' type = 'text'  placeholder ='ex. someone@something.com'/></td>
				</tr>
				<tr>
					<td><label> Amount* </label></td>
					<td><input name = 'amount' id = 'amount' type = 'text' placeholder ='ex. 25 or 10.50'/></td>
				</tr>
				<tr>
					<td><label>Fake Card Number*</label></td>
					<td><input name = 'card' id = 'card' type = 'password' placeholder ='ex. 1234'/></td>
				</tr>
				<tr>
					<td><label> Rate Us </label></td>
					<td><select name = 'rating' id = 'rating'>
						<option selected = 'selected'> Excellent </option>
						 <option> Very Good </option>
						 <option> Good </option>
						 <option> Fair </option>
						 <option> Poor </option>
					  </select></td>
				</tr>
				<tr>
					<td><label>Comments</label></td>
					<td> <textarea id = 'comments' name = 'comments' rows = '4' cols = '30' placeholder='Enter your comments here: '></textarea></td>
				</tr>
				<tr>
					<td><input type ='submit' id = "submit" name ='page' value = 'Enter' /></td>
					<td><input type = 'reset' value = 'Clear' /></td>
				</tr>
			</table>			
		</form>
		<script>
			setInterval(function(){ 
				if (document.getElementById("name").value != "" &&
				document.getElementById("email").value != "" && validateEmail(document.getElementById("email").value) &&
				document.getElementById("amount").value != "" && num(document.getElementById("amount").value) &&
				document.getElementById("card").value != "" && check(document.getElementById("card").value)
				) {
					document.getElementById("submit").disabled = false;
					document.getElementById("submit").value = "Enter";
				} else {
					document.getElementById("submit").disabled = true;
					document.getElementById("submit").value = "Invalid Fields";
				}
			
			}, 1000);


			function validateEmail(email) {
				const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			}
			function num(amount){
				reg = /^[0-9]*[.]?[0-9]*$/;
				return reg.test(String(amount));
			}
			function check(card){
				reg = /^[0-9]*$/;
				return reg.test(String(card));
			}
		</script>
PAGE1;
	}

	
	function confirmPage(){
		//global $once;
		$name = $_POST["name"];
		$email = $_POST["email"];
		$amount = $_POST["amount"];
		$card = $_POST["card"];
		$rating = $_POST["rating"];
		$comments = $_POST["comments"];
		print("<h2>Thank You, $name!</h2>");
		print("<h3>Receipt</h3>");
		print("<p><b>Email:</b> $email</p>");
		print("<p><b>Amount:</b> \$$amount</p>");
		print("<p><b>Card #:</b> $card</p>");

		//if ($once) {
			$file = fopen ("../comments.txt", "a");
			date_default_timezone_set('America/Chicago');
			fwrite($file, date("l, F jS, Y h:i:s A")." \t Donation: ".$name.": ".$rating.", $".$amount.", ".$comments."\n\n");
			fclose ($file);
			//$once = false;
		//}
		
	}


		?>

		<p style='font-size: 1vw;'>Note: there are not actually any donations happening this page is made to practice website making</p>

		<p>Thank you for donating and supporting the push for mental health awareness!</p>
	
		<div class="charities">
			<h1>Charities We Support</h1>
			<p>Mental Health America, donate <a href="https://mhanational.org/donate-now"> here </a></p>
			<p>National Institute of Mental Health, donate <a href="https://www.nimh.nih.gov/about/connect-with-nimh/donate-to-mental-health-research.shtml"> here </a></p>
			<p>National Alliance on Mental Illness, donate <a href="https://donate.nami.org/give/197406/#!/donation/checkout?utm_source=globalNav&utm_medium=website&utm_campaign=DonationTracking&c_src=WEBDG"> here </a></p>
			<p>American Foundation for Suicide Prevention, donate <a href="https://afsp.donordrive.com/?_ga=2.176897125.1315774771.1618694397-1594003025.1618694397"> here </a></p>
			<p>Child Mind Institute, donate <a href="https://childmind.org/?form=maindonate"> here </a></p>
		</div>	
	</div>	
		<footer>
            <p>&copy; Mind full to Mindful</p>
            <p>Ammn, Rachel, Beatrix, Rani</p>
            <p>April 19, 2021</p>
        </footer>

	</body>
</html>