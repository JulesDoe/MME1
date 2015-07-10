<?php
include("Database.php");


connect();

//print_r($_POST);

//InsertUser("TestUser" , "123");
//print_r(CheckUser("TestUser" , "123"));
$serie = new Serie("Breaking Sad", "Eine komische Serie", "pictures/breakingbad.jpg");
//print_r(json_encode(InsertSerie($serie)));
//print_r($serie->getAnzahlEpisodes(2));
//print_r(json_encode($serie));
echo "<br>";
//print_r(json_encode(GetSeries()));
//print_r(json_encode(CheckUser("TestUser" , "123")));
close();
?>