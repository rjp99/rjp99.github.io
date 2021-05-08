<html lang="en">
  <head>
    <title>Homework 12</title>
    <meta name="description" content="Signup">
    <meta name="author" content="Rani Patel">
  </head>

  <body>
  <style>
        h1 {
            color: #0a75ad;
            padding: 2%;
        }
        table {
            display: block;
            margin: auto;
            border: 10px dashed #0a75ad;
            padding: 1%;
            width: 40%;
        }

        td {
            border-bottom: 2px solid #0a75ad;
            padding: 1%;
            text-align: center;
            font-size: 20pt;
        }

        th {
            border: 3px solid #0a75ad;
            padding: 1%;
            text-align: center;
            font-size: 20pt;
        }

        body {
            text-align: center;
            color: #0a75ad;
            background: #afeeee;
            width: 75%;
            display: block;
            margin: auto;
            margin-top: 1%;
            margin-bottom: 1%;
            border: 30px double #00ced1;
        }

        html {
            background: #b6fcd5;
        }
  </style>
          <h1>Sign-Up Sheet</h1>
          <form action = "hw12.php" method = "post">
              <table>
                  <tr>
                        <th>Time</th>
                        <th>Name</th>

                        <?php 
                        error_reporting(E_ALL);
                        ini_set("display_errors", "on");

                        $file = fopen ("hw12.txt", "r");
                        $count =0;
                    
                        $name = array("", "", "", "", "", "", "", "", "", "");

                        while (!feof($file)){
                            $line = fgets($file);
                            if($line == ""){
                                continue;
                            }else{
                                $name[$count] = trim($line);
                            }
                            $count++;
                            
                        }
                        fclose ($file);
                        

                        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                            $file = fopen ("hw12.txt", "w");
                            
                            for($i=0; $i<10; $i++){
                                if(empty($_POST[$i])){
                                    if($i==9){
                                        fwrite ($file, $name[$i]);
                                    }else{
                                        fwrite ($file, $name[$i]."\n");
                                    }
                                }else {
                                    if($i==9){
                                        print($_POST[$i]);
                                        $name[$i] = $_POST[$i];
                                        fwrite ($file, $_POST[$i]);
                                    }else{
                                        fwrite ($file, $_POST[$i]."\n");
                                    }
                                    
                                }
                            }
                            fclose($file);
                        }

                        $file = fopen ("hw12.txt", "r");
                        $count =0;
                        $arr = array ('8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm');

                        while (!feof($file)){
                            $line = fgets($file);
                            if(trim($line) == ""){
                                print ("<tr>
                                        <td>$arr[$count]</td>
                                        <td><input type='text' name = '$count'></td>
                                        </tr>");
                            }else{
                                print ("<tr>
                                        <td>$arr[$count]</td>
                                        <td name = '$count' id = '$count'>$line</td>
                                        </tr>");
                            }
                            $count++;
                        }
                        fclose ($file);
                        print("<tr>
                                </table>
                                <input type = 'submit' name = 'submit' value = 'Submit'>
                                </form>"); 
                    
                        ?>
    </body>
</html>
 
