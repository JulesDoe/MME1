<?php
include("Database.php");
include("Serie.php");
echo "test<br>";

connect();

print_r($_POST);

//InsertUser("TestUser" , "123");
//print_r(CheckUser("TestUser" , "123"));
//$serie = new Serie("Breaking Bad", "Eine geile Serie", "pictures/breakingbad.jpg");
//print_r(InsertSerie($serie));
//print_r($serie->getAnzahlEpisodes(2));
//print_r(json_encode($serie));
echo "<br>";
print_r(json_encode(GetSeries()));
close();
?>