<?php
// Afrendy Bayu, 26 Juni 2014 //

include '../connection.php';

try {
	$down = $_GET["down"];
	//$down = "e131e132e131";
	$down = substr($down,1);
	$down = str_replace("e",",",$down);
	//echo "down: $down<br/>";

	$s = "SELECT event.id,down_id AS iddown,eq AS ideql, (SELECT CONCAT (equip.kode,' ',equip.tag)) AS eql,equip.cat ".
		 ",opart AS idopart, opart.nama AS opart,fm AS idmode, failuremode.nama AS 'mode' ".
		 ",cause AS idcause, cause.nama AS 'cause',aksi AS idaksi, aksi.nama AS 'aksi' ".
		 "FROM event ".
		 "LEFT JOIN equip ON event.eq = equip.id ".
		 "LEFT JOIN opart ON event.opart = opart.id ".
		 "LEFT JOIN aksi ON event.aksi = aksi.id ".
		 "LEFT JOIN cause ON event.cause = cause.id ".
		 "LEFT JOIN failuremode ON event.fm = failuremode.id ".
		 "WHERE down_id IN ($down)";
	
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
		//print_r($ev);
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
