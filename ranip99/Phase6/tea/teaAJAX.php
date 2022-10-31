<?php

if ($_GET['selected'] == 'black'){
	black();
} else if ($_GET['selected'] == 'green'){
	green();
} else if ($_GET['selected'] == 'white'){
	white();
} else if ($_GET['selected'] == 'oolong'){
	oolong();
} else {
	alpha();
}

function alpha() {
				
	$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
	if ($db->connect_error) {
		die("Connection failed: " . $db->connect_error);
	}
				
	$command = "SELECT * FROM Teas ORDER BY Name;";
    $result = $db->query($command);

    if (!$result) {
        die("Query failed: ($db->error <br>)");
    } 
	else {
        $displayString = "<table id = 'tea'>";
        $displayString .= "<tr><th>Tea</th><th>Type</th><th>Caffeinated</th></tr>";
        while ($row = $result->fetch_row()) {
				if($row[3] == 0){
					$c = no;
				}
				else{
					$c = yes;
				}
                $displayString .= "<tr><td><a href = $row[2]>$row[0]</a></td><td>$row[1]</td><td>$c</td></tr>";
        };
        $displayString .= ("</table>");
        }
echo $displayString;
}

function black() {
				
	$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
	}
				
	$command = "SELECT * FROM Teas Where Type = 'Black' ORDER BY Name ;";
    $result = $db->query($command);

    if (!$result) {
        die("Query failed: ($db->error <br>)");
    } 
	else {
        $displayString = ("<table id = 'tea'>");
        $displayString .= "<tr><th>Tea</th><th>Type</th><th>Caffeinated</th></tr>";
        while ($row = $result->fetch_row()) {
			if($row[3] == 0){
				$c = no;
			}
			else{
				$c = yes;
			}
			$displayString .= "<tr><td><a href = $row[2]>$row[0]</a></td><td>$row[1]</td><td>$c</td></tr>";
        };
        $displayString .= ("</table>");
    }
echo $displayString;
}

function green() {
				
	$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
	}
				
	$command = "SELECT * FROM Teas Where Type = 'Green' ORDER BY Name;";
    $result = $db->query($command);

    if (!$result) {
        die("Query failed: ($db->error <br>)");
    } 
	else {
        $displayString = ("<table id = 'tea'>");
        $displayString .= "<tr><th>Tea</th><th>Type</th><th>Caffeinated</th></tr>";
        while ($row = $result->fetch_row()) {
			if($row[3] == 0){
				$c = no;
			}
			else{
				$c = yes;
			}
			$displayString .= "<tr><td><a href = $row[2]>$row[0]</a></td><td>$row[1]</td><td>$c</td></tr>";
        };
        $displayString .= ("</table>");
    }
echo $displayString;
}

function white() {
				
	$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
	if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
	}
				
	$command = "SELECT * FROM Teas Where Type = 'White' ORDER BY Name;";
    $result = $db->query($command);

    if (!$result) {
        die("Query failed: ($db->error <br>)");
    } 
	else {
        $displayString = ("<table id = 'tea'>");
        $displayString .= "<tr><th>Tea</th><th>Type</th><th>Caffeinated</th></tr>";
        while ($row = $result->fetch_row()) {
			if($row[3] == 0){
				$c = no;
			}
			else{
				$c = yes;
			}
			$displayString .= "<tr><td><a href = $row[2]>$row[0]</a></td><td>$row[1]</td><td>$c</td></tr>";
        };
        $displayString .= ("</table>");
    }
echo $displayString;
}

function oolong() {
				
	$db = new mysqli ('spring-2021.cs.utexas.edu', 'cs329e_bulko_ranip99', 'seeing5memo5unlike', 'cs329e_bulko_ranip99');
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
	}
				
	$command = "SELECT * FROM Teas Where Type = 'Oolong' ORDER BY Name;";
    $result = $db->query($command);

    if (!$result) {
        die("Query failed: ($db->error <br>)");
    } 
	else {
        $displayString = ("<table id = 'tea'>");
        $displayString .= "<tr><th>Tea</th><th>Type</th><th>Caffeinated</th></tr>";
        while ($row = $result->fetch_row()) {
			if ($row[3] == 0){
				$c = "no";
			}
			else{
				$c = "yes";
			}
			$displayString .= "<tr><td><a href = $row[2]>$row[0]</a></td><td>$row[1]</td><td>$c</td></tr>";
        };
        $displayString .= ("</table>");
    }
echo $displayString;
}

?>