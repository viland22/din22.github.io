<?php
$menu = $_GET['menu'];
$jumlah = $_GET['jumlah'];
$myfile = fopen($menu, "w") or die("Unable to open file!");
//$txt = "20\n";
$txt =$jumlah;
fwrite($myfile, $jumlah);
// $txt = "Minnie Mouse xx\n";
// fwrite($myfile, $txt);
fclose($myfile);
?>