<?php
// Afrendy Bayu, 15 Feb 2014
//   SokaKetikaSaatSendiri

include '../connection.php';
include '../util.php';


try {
	$sql = "select count(teco) as jml, (select (if (teco>0,'teko','open'))) as nama from sap group by nama";
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
	//print_r($teko);
	$jml = $teko[0]['jml']+$teko[1]['jml'];
	$teko[0]['teco'] = number_format(($teko[0]['jml']*100)/$jml,3);
	$teko[1]['teco'] = number_format(($teko[1]['jml']*100)/$jml,3);
	
	mysql_free_result($q);
	
/*
	$arTeco = array();
	$obj1 = new stdClass();
	$obj1->teco = '77.66';
	$obj1->nama = "Teco";
	array_push($arTeco,$obj1);
	
	$obj = new stdClass();
	$obj->teco = '23.34';
	$obj->nama = "Open";
	array_push($arTeco,$obj);
//*/
	$jsonResult = array(
        'success' => true,
        'hoteco' => $teko
    );
	
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
	);
}

echo json_encode($jsonResult);

?>
