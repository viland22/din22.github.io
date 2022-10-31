<?php
$menu = $_POST['menu'];
$myfile = fopen($menu, "r") or die("Unable to open file!");
//echo fgets($myfile);
$result =  fgets($myfile);
fclose($myfile);
echo $result;
?>