<!DOCTYPE html>
<html lang="en">
<head>
	<title>Homework 16</title>
	<meta charset="UTF-8">
	<meta name="description" content="Database Students">
	<meta name="author" content="Rani Patel">
	<link rel="stylesheet" href="hw16.css">
</head>

<body>
<?php
	session_start();
	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	if (isset($_POST['all'])){
		all();
	} else if (isset($_POST['view_check'])){
                view_check();

        } else if (isset($_POST['view'])){
                view();

	} else if (isset($_POST['delete_check'])){
                delete_check();

        } else if (isset($_POST['delete'])){
                delete_db();

	} else if (isset($_POST['update_check'])){
                update_check();

        } else if (isset($_POST['update'])){
                update();

	} else if (isset($_POST['insert_check'])){
		insert_check();
	
	} else if (isset($_POST['insert'])){
		insert();

	} else if (isset($_POST['logout'])) {
		session_destroy();
		echo "Logout Successful";
		echo "<br>"."Thank You";

	} else if (isset($_SESSION['records'])){
		records();

	} else if (isset($_POST['login'])) {
		check();

	} else {
		login();
	}

	function login(){
		print("<h1>Login</h1><br>
		<form method = 'post'>
			<label>Username <input id = 'user' name = 'user' type='text'></label><br>
			<label>Password <input id = 'pass' name = 'pass' type='password'></label><br>
			<input type='submit' name='login' id = 'login' value='Login'>
			<input type='reset' value='Reset'>
		</form>
		<script>
                        setInterval(function(){
                                if (document.getElementById('user').value != '' &&
                                        document.getElementById('pass').value != ''){
                                        document.getElementById('login').disabled = false;
                                } else {
                                        document.getElementById('login').disabled = true;
                                }
                        }, 500);
                </script>
		");
		
	}

	function check() {
		$user = $_POST['user'];
		$pass = $_POST['pass'];
		$correct = false;

		$file = fopen('../dbase/passwd.txt', 'r');
		while (!feof($file))
		{
			$line = trim(fgets($file));
			if ($user == explode(':', $line)[0]){
				if ($pass == explode(':', $line)[1]){
					$correct = true;
					break;
				}
			}
		}
		if ($correct) {
			$_SESSION['records'] = 'records';
			records();
		} else {
			print("
			<script>alert('Login Failed');</script>
			");
			login();
		}
	}

	function records() {
		print("
		<h1>Actions</h1><br>
		<form method='post'>
			<button name='insert'>Insert Student Record</button><br>
			<button name='update'>Update Student Record</button><br>
			<button name='delete'>Delete Student Record</button><br>
			<button name='view'>View Student Record</button><br>
			<button name='logout'>Logout</button><br>
		</form>
		");
	}

	function insert() {
		print("<h1>Insert</h1><br>
		<form method='post'>
			<label>ID <input name = 'id' id = 'ID' type='text'></label><br>
			<label>Last <input name = 'last' id = 'last' type='text'></label><br>
			<label>First <input name = 'first' id = 'first' type='text'></label><br>
			<label>Major <input name = 'major' id = 'major' type='text'></label><br>
			<label>GPA <input name = 'gpa' id = 'gpa' type='text'></label><br>
			<input type='submit' id ='insert_s' name='insert_check' value='Insert'><br>
		</form>
		
		<script>
			setInterval(function(){
				if (document.getElementById('ID').value != '' &&
					document.getElementById('last').value != '' &&
					document.getElementById('first').value != '' &&
					document.getElementById('major').value != '' &&
					document.getElementById('gpa').value != ''){
					document.getElementById('insert_s').disabled = false;
				} else {
					document.getElementById('insert_s').disabled = true;
				}
			}, 500);
		</script>
		");
	}

	function insert_check() {
		$id = $_POST['id'];
		$last = $_POST['last'];
		$first = $_POST['first'];
		$major = $_POST['major'];
		$gpa = $_POST['gpa'];

		$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
		if ($db->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		$command = "INSERT INTO Students VALUES ('$id', '$last', '$first', '$major', '$gpa');";
		$result = $db->query($command);

		if (!$result) {
   			die("Query failed: ($db->error <br>");
		} else {
			records();
		}	
	}

	function update() {
		print("<h1>Update</h1><br>
                <form method='post'>
                        <label>ID <input name = 'id' id = 'ID' type='text'></label><br>
                        <label>Last <input name = 'last' id = 'last' type='text'></label><br>
                        <label>First <input name = 'first' id = 'first' type='text'></label><br>
                        <label>Major <input name = 'major' id = 'major' type='text'></label><br>
                        <label>GPA <input name = 'gpa' id = 'gpa' type='text'></label><br>
                        <input type='submit' id ='update_s' name='update_check' value='Update'><br>
                </form>
                
                <script>
                        setInterval(function(){
                                if (document.getElementById('ID').value != '' &&
                                        (document.getElementById('last').value != '' ||
                                        document.getElementById('first').value != '' ||
                                        document.getElementById('major').value != '' ||
                                        document.getElementById('gpa').value != '')){
                                        document.getElementById('update_s').disabled = false;
                                } else {
                                        document.getElementById('update_s').disabled = true;
                                }
                        }, 500);
                </script>
                ");
	}

	function update_check() {
                $id = $_POST['id'];
                $last = $_POST['last'];
                $first = $_POST['first'];
                $major = $_POST['major'];
                $gpa = $_POST['gpa'];

                $db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
                if ($db->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
		}

		if ($last != '') {
			$command = "UPDATE Students set Last = '$last' WHERE Id = '$id'";
                	$result = $db->query($command);
		}
		if ($first != '') {
                        $command = "UPDATE Students set First = '$first' WHERE Id = '$id'";
                        $result = $db->query($command);
		}
		if ($major != '') {
                        $command = "UPDATE Students set Major = '$major' WHERE Id = '$id'";
                        $result = $db->query($command);
		}
		if ($gpa != '') {
                        $command = "UPDATE Students set GPA = '$gpa' WHERE Id = '$id'";
                        $result = $db->query($command);
                }


                if (!$result) {
                        die("Query failed: ($db->error <br>");
                } else {
                        records();
                }
        }
	
	function delete_db() {
		print("<h1>Delete</h1><br>
                <form method='post'>
                        <label>ID <input name = 'id' id = 'ID' type='text'></label><br>
                        <input type='submit' id ='delete_s' name='delete_check' value='Delete'><br>
                </form>
                
                <script>
                        setInterval(function(){
                                if (document.getElementById('ID').value != ''){
                                        document.getElementById('delete_s').disabled = false;
                                } else {
                                        document.getElementById('delete_s').disabled = true;
                                }
                        }, 500);
                </script>
		");
	}

	function delete_check() {
		$id = $_POST['id'];

                $db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
                if ($db->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                }

                $command = "DELETE FROM Students WHERE Id = '$id';";
                $result = $db->query($command);

                if (!$result) {
                        die("Query failed: ($db->error <br>");
                } else {
                        records();
                }
        }
	
	function view() {
		print("<h1>View</h1><br>
                <form method='post'>
                        <label>ID <input name = 'id' id = 'ID' type='text'></label><br>
                        <label>Last <input name = 'last' id = 'last' type='text'></label><br>
                        <label>First <input name = 'first' id = 'first' type='text'></label><br>
                        <input type='submit' id ='view_s' name='view_check' value='View'><br>
                </form>
                
                <script>
                        setInterval(function(){
                                if (document.getElementById('ID').value != '' ||
                                        document.getElementById('last').value != '' ||
                                        document.getElementById('first').value != ''){
                                        document.getElementById('view_s').disabled = false;
                                } else {
                                        document.getElementById('view_s').disabled = true;
                                }
                        }, 500);
                </script>
			
                <form method='post'>
                        <button name = 'all'>View All Student Records</button>
                </form>
         	
		");
	}

	function view_check(){
		$id = $_POST['id'];
                $last = $_POST['last'];
                $first = $_POST['first'];

                $db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
                if ($db->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
		}
		$where = "";
		if ($id != ''){
			$where .= "Id = '$id' AND ";
		}
		if ($last != ''){
                        $where .= "Last = '$last' AND ";
		}
		if ($first != ''){
                        $where .= "First = '$first' AND ";
		}
		$where = substr($where, 0, -5);

                $command = "SELECT * from Students WHERE $where;";
		//echo $command."\n";
		//$command = "SELECT * from Students WHERE Id = '%$id%' AND Last = '%$last%' AND First = '%$first%';";
		//echo ($command."\n");
		$result = $db->query($command);
		
                if (!$result) {
                        die("Query failed: ($db->error <br>");
		} else {
			if (mysqli_num_rows($result)==0){
				echo ("No Matches\n");
			}else{
				echo ("<table>");
                        	echo "<tr><th>Id</th><th>Last</th><th>First</th><th>Major</th><th>GPA</th><tr>";
                        	while ($row = $result->fetch_row()) {
                                	echo "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td><td>$row[4]</td><tr>";
                         	};
                        	echo ("</table>");
			}
		}

		print("
		<form method='post'>
			<button name = 'all'>View All Student Records</button>
		</form>
		");
	}

	function all(){
		echo ("<h1>All Records</h1><br>");
		$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
                if ($db->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
		}

		$command = "SELECT * from Students ORDER BY Last, First;";
                $result = $db->query($command);

                if (!$result) {
   			die("Query failed: ($db->error <br>");
		} else {
			echo ("<table>");
			echo "<tr><th>Id</th><th>Last</th><th>First</th><th>Major</th><th>GPA</th><tr>";       
			while ($row = $result->fetch_row()) {
         	                echo "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td><td>$row[4]</td><tr>";
			 };
			echo ("</table>");
                }

	}




?>
</body>
</html>

