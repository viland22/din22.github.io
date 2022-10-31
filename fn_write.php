<?php
$menu = $_POST['menu'];
$jumlah = $_POST['jumlah'];
$myfile = fopen($menu, "w") or die("Unable to open file!");
//$txt = "20\n";
$txt =$jumlah;
fwrite($myfile, $jumlah);
// $txt = "Minnie Mouse xx\n";
// fwrite($myfile, $txt);
fclose($myfile);
?>