<?
$path = $_POST["teamname"].".txt"; 
$fp = fopen($path, "r");
$buffer = (fgets($fp));
    echo "$buffer";
fclose($fp);
?>