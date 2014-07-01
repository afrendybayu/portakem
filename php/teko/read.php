<?php
// Afrendy Bayu, 30 Jun 2014


include '../connection.php';

try {
	$sql = "select count(teco) as jml, (select (if (teco>0,'teko','open'))) as st from sap group by st";
	//echo "sql: $sql<br/>";

	$q = db_query($sql);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$teko = array();
	while ($row = mysql_fetch_assoc($q)) {
		$teko[] = $row;
	}
	print_r($teko);
	$jml = $teko[0]['jml']+$teko[1]['jml'];
	$teko[0]['persen'] = number_format(($teko[0]['jml']*100)/$jml,3);
	$teko[1]['persen'] = number_format(($teko[1]['jml']*100)/$jml,3);
	
	mysql_free_result($q);
	//*/
    $jsonResult = array(
        'success' => true,
        'teco' => $teko
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);

?>

