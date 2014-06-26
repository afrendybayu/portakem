<?php
// Afrendy Bayu, 26 Juni 2014 //

include '../connection.php';

try {
	//$down = $_GET["down"];
	$down = "e131e132e131";
	$down = substr($down,1);
	$down = str_replace("e",",",$down);
	//echo "down: $down<br/>";
	
	$s = "select id,down_id, eq as ideql, opart as idopart, fm as idmode, cause as idcause, aksi as idaksi ".
		 "from event where down_id in ($down)";
	//echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	$ev = array(); $k=0;
	while ($row = mysql_fetch_assoc($q)) {
		$ev[] = $row;
		
		$k++;
	}
	
	mysql_free_result($q);

	$isi = array();
	foreach ($ev as $data)	{
		array_push($isi, $data);
	}


	
    $jsonResult = array(
        'success' => true,
        'event' => $isi
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}

//echo json_encode($isi);
echo json_encode($jsonResult);
?>
