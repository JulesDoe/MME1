<?php
    include("Serie.php");
    error_reporting(E_ALL);
    $mysql;

    function Connect()
    {
        global $mysql;
        $mysql = mysqli_init();
        $server = "localhost";
        $user = "root";
        $pw = "";
        $db = "serienmanager";

        if(!mysqli_real_connect($mysql, $server, $user, $pw, $db))
        {
            die("Fehler");
        }

        if (mysqli_connect_errno())
        {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }

        mysqli_select_db($mysql, $db);

    }

    function InsertUser($user, $pw){
        global $mysql;

        $ergebnis = mysqli_query($mysql,"Insert into `User` (`Email`, `pw`) values('".$user."', '".$pw."')" ); //

        if ( !$ergebnis)
        {
            echo "Error: ". mysqli_error($mysql);
        }
        //echo "<br>";
        return $ergebnis;
    }

    function CheckUser($user, $pw)
    {
        global $mysql;

        $ergebnis = mysqli_query($mysql,"SELECT UID FROM `User` WHERE(Email='".$user."' AND pw='".$pw."')" ); //

        return mysqli_fetch_assoc($ergebnis);
    }

    function GetSeries()
    {
        global $mysql;

        $ergebnis = mysqli_query($mysql,"SELECT * FROM `Serie`,`Episode`,`Staffel`
                                        WHERE Serie.SID=Staffel.SID AND
                                              Staffel.STID=Episode.STID " ); //
        $serien = array();
        while($row = $ergebnis->fetch_assoc())
        {
            $sid = $row["SID"];
            //print_r($row);
            if(!isset($serien[$sid])) // Neue Serie gefunden
                $serien[$sid] = new Serie($row["Name"], $row["Beschreibung"], $row["Bild"]);
            if(!isset($serien[$sid]->episodes[$row["SNR"]])) //Neue Staffel gefunden
                $serien[$sid]->episodes[$row["SNR"]] = array();
            $serien[$sid]->episodes[$row["SNR"]][$row["ENR"]] = rand(0,1);
        }
        return $serien;
    }

    function InsertSerie($serie){
        global $mysql;
        //print_r($serie);
        $ergebnis = mysqli_query($mysql,"Insert into `Serie` (`Name`, `Beschreibung`, `Bild`) values('".$serie->name."', '".$serie->beschreibung."', '".$serie->imgsource."')" ); //

        if (!$ergebnis)
        {
            echo "Error: ". mysqli_error($mysql);
        }
        echo "<br>";
        return $ergebnis;
    }

    function Close()
    {
        global $mysql;
        mysqli_close($mysql);
    }

    if(is_ajax())
    {

        if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists
            Connect();
            $action = $_POST["action"];
            switch($action) { //Switch case for value of action
                case "getSeries":
                    echo json_encode(GetSeries());
                break;
                case "checkuser":
                    $user = $_POST["user"];
                    $pw = $_POST["pw"];
                    $erg = CheckUser($user, $pw);
                    $_SESSION['id'] = $erg["UID"];
                    echo json_encode($erg);
                break;
                case "test":
                   echo "test";
                break;
            }
            Close();
        }
    }

    function is_ajax()
    {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

?>