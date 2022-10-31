<!DOCTYPE html>

<html lang="en">

	<head> 
		<title>Tea Time</title>
		<meta charset="UTF-8">
		<meta name="description" content="Tea Time">
		<meta name="author" content="The Gratitude Group">
		<link href = "Tea.css" rel ="stylesheet">
		<link type="image/png" rel=”icon” href =”../tlogo.png”>
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

		<h1>Tea Time</h1>
        <img class = "flowers" src="../flowers1.png" alt="flowers">
        <br>
        

		<p>Welcome to Tea Time!</p>
		<p>Here, you can select by type of tea or even order by mood!</p>
		<p>Well, what are you waiting for? Let's get this parTea started?</p>
		<section> order by:</section>
		<button onclick ="alpha()">alphabetical</button>
		<button  onclick ="bt()">black tea(caffine level)</button>
		<button  onclick ="gt()">green tea(caffine level)</button>
		<button  onclick ="wt()">white tea(caffine level)</button>
		<button onclick ="ot()">oolong tea(caffine level)</button>



		<table id = "abc">
			<tr>
				<td>
					<a  class ="oolong" href = "https://cookingwithawallflower.com/2020/05/06/brown-sugar-jasmine-oolong-milk-tea/">Brown Sugar Jasmine Oolong Milk Tea</a>
				</td>
				<td>
					<a  class ="green" href = "https://www.canadianliving.com/food/recipe/chamomile-mint-tea">Chamomile Mint Tea</a>
				</td>
				<td>
					<a  class ="green" href = "https://www.canadianliving.com/food/recipe/green-ginger-mint-tea">Green Ginger Mint Tea</a>
				</td>
				<td>
					<a   class = "black" href = "https://www.thespruceeats.com/hong-kong-milk-tea-recipe-766128">Hong Kong Milk Tea Recipe</a>
				</td>
				<td>
					<a  class ="green" href = "https://www.thechunkychef.com/iced-green-tea-with-mint-and-honey/">Iced Green Tea with Mint and Honey</a>
				</td>
			</tr>
			<tr>
				<td>
					<a   class = "black" href = "https://www.thespruceeats.com/real-thai-iced-tea-recipe-765458">Real Thai Iced Tea</a>
				</td>
				<td>
					<a  class = "black" href = "https://www.sweetsteep.com/brown-sugar-milk-tea-served-hot/">Sweet & Creamy Brown Sugar Milk Tea </a>
				</td>
				<td>
					<a  class ="white" href = "https://cafedelites.com/white-peach-iced-tea-recipe/">White Peach Iced Tea</a>
				</td>
				<td>
					<a class ="white"  href = "https://www.ohhowcivilized.com/white-peony-tea/">White Peony Tea </a>
				</td>
				<td>
					<a  class ="white" href = "https://www.marthastewart.com/1518419/white-tea-melonade">White Tea Melonade</a>
				</td>
			</tr>
		</table>
		<!-- <table id = "black"> 
			<tr>
			<td>
				<a  class = "black" href = "https://www.sweetsteep.com/brown-sugar-milk-tea-served-hot/">Sweet & Creamy Brown Sugar Milk Tea </a>
			</td>
			<td>
				<a   class = "black" href = "https://www.thespruceeats.com/real-thai-iced-tea-recipe-765458">Real Thai Iced Tea</a>
			</td>
			<td>
				<a  -transform: ; class = "black" href = "https://www.thespruceeats.com/hong-kong-milk-tea-recipe-766128">Hong Kong Milk Tea Recipe</a>
			</td>
			</tr>
		</table>
		<table id = "green">
			<tr>
			<td>
				<a  class ="green" href = "https://www.canadianliving.com/food/recipe/chamomile-mint-tea">Chamomile Mint Tea</a>
			</td>
			<td>
				<a  class ="green" href = "https://www.thechunkychef.com/iced-green-tea-with-mint-and-honey/">Iced Green Tea with Mint and Honey</a>
			</td>
		</tr>
		<tr>
			<td>
				<a  class ="green" href = "https://www.canadianliving.com/food/recipe/green-ginger-mint-tea">Green Ginger Mint Tea</a>
			</td>
			</tr>
		</table>
		<table id = "white">
			<tr>
			<td>
				<a class ="white"  href = "https://www.ohhowcivilized.com/white-peony-tea/">White Peony Tea </a>
			</td>
			<td>
				<a  class ="white" href = "https://cafedelites.com/white-peach-iced-tea-recipe/">White Peach Iced Tea</a>
			</td>
			<td>
				<a  class ="white" href = "https://www.marthastewart.com/1518419/white-tea-melonade">White-Tea Melonade</a>
			</td>
			</tr>
		</table>
		<table id = "oolong">
			<tr>
				<td>
					<a  class ="oolong" href = "https://cookingwithawallflower.com/2020/05/06/brown-sugar-jasmine-oolong-milk-tea/">Brown Sugar Jasmine Oolong Milk Tea</a>
				</td>
			</tr>
		</table> -->
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
            <p>April 19, 2021</p>
        </footer>


	</body>
</html>

