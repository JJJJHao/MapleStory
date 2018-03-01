<?

	$buf1 = "score".$_POST["bumen"]."_1_t".$_POST["voteto"].".txt";
	$buf2 = "score".$_POST["bumen"]."_2_t".$_POST["voteto"].".txt";
	$str_num= sprintf("%lf",$_POST["score1"]);
	$fp = fopen($buf1, "w+");
	fwrite($fp, $str_num);
	fclose($fp);
	$str_num= sprintf("%lf",$_POST["score2"]);
	$fp = fopen($buf2, "w+");
	fwrite($fp, $str_num);
	fclose($fp);

?>