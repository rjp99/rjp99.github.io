<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Rani Patel</title>
        <meta name="keywords" content="Rani Patel">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="main.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <div class="container">
            <a class="navbar-brand mx-auto d-block" style="width: 188px;" href="index.html">
              	<img src="images/rp_logo.png" width="188" class="d-inline-block align-top" alt="">
            </a>
            <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                <div class="navbar-nav">
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
					<a class="nav-link" href="index.html">Home</a>
					<a class="nav-link" href="projects.html">Projects</a>
					<a class="nav-link" href="Rani_Patel_Resume.pdf">Resume</a>
					<a class="nav-link active" aria-current="page" href="#">Contact Me</a>
                </div>
            </nav>
        </div>

        <?php
            $name = test_input($_POST['name']);
            $email = test_input($_POST['email']);
            $comments = $_POST['comments'];

            $file = fopen ("../comments.txt", "a");
            date_default_timezone_set('America/Chicago');
            fwrite($file, date("l, F jS, Y h:i:s A")." \t Contact: ".$name.": ".$email.", ".$comments."\n\n");
            fclose ($file);
        ?>

        <div class="container text-center">
			<div class="text-center"><h2>Contact Me</h2></div>
			<div class="form-group">
				<h4>Send Me A Message!</h4>
				<form action = "contact.php" method = "post" class="mx-auto d-block">
					<input type="text" id="name" class="form-control" placeholder="Name"><br>
					<input type="text" id="email" class="form-control" placeholder="Email"><br>
					<textarea class="form-control" id="comments" placeholder="Message" rows="3"></textarea><br>
					<button type="submit" value="Submit" class="btn btn-secondary">Send</button>
				</form>
			</div>
        </div>

        <hr style="width: 50%; margin: auto;">
            <div class="container text-center">
				<h4>Get In Touch!</h4>
				<div class="container text-center">
						<a href="mailto:patelrani99@gmail.com">
							<img src = "images/email.png" alt = email  class = "icon">
						</a>
						<a href = "https://www.linkedin.com/in/rani-patel-331414200/" target = "_blank">
							<img src = "images/link.png" alt = Linkedin  class = "icon">
						</a>
						<a href = "https://www.instagram.com/ranip99/" target = "_blank">
							<img src = "images/insta.png" alt = Instagram  class = "icon">
						</a>
						<a href = "https://www.facebook.com/profile.php?id=100006033673349" target = "_blank">
							<img src = "images/fb.png" alt = Facebook  class = "icon" >
						</a>
				</div>
          	</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>