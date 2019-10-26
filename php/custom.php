<?php
	$myfile = fopen("./resources/movie-list.txt", "r") or die("Unable to open file!");
	echo nl2br(fread($myfile,filesize("./resources/movie-list.txt")));
	fclose($myfile);
?>