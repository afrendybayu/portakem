<?php
// Afrendy Bayu, 22 May 2014 //

include '../connection.php';

try {
	$s = "SELECT id,nama FROM medco.listEvent";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	$ev = array();
	while ($row = mysql_fetch_assoc($q)) {
		$ev[] = $row;
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
