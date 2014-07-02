
<?php

include '../connection.php';

try {
	$sql =  "SELECT COUNT(*) AS jml,MONTH(planend)-1 AS nbln,MONTHNAME(planend) as bulan ".
			",IF(tecodate<=DATE_ADD(planend,INTERVAL 7 DAY) AND teco>0,1,0) AS selesai ".
			"FROM sap WHERE YEAR(planend)=2014 ".
			"GROUP BY nbln,selesai;";
	
	$q = db_query($sql);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}

	$hitori = array();	$kk=-1;
	while ($row = mysql_fetch_assoc($q)) {
		
		if ($kk!=$row['nbln'])	{
			$kk++;
			$hitori[$kk]['persen'] = $hitori[$kk]['open']*100/($hitori[$kk]['teco']+$hitori[$kk]['open']);
		}
		$hitori[$kk]['bulan'] = $row['bulan'];
		if ($row['selesai'])	$hitori[$kk]['teco'] = $row['jml'];
		else					$hitori[$kk]['open'] = $row['jml'];		
		$hitori[$kk]['persen'] = number_format($hitori[$kk]['open']*100/($hitori[$kk]['teco']+$hitori[$kk]['open']),2);
	}
	mysql_free_result($q);
	
	//print_r($hitori);
	/*
	foreach($hitori as $hh)	{
		print_r($hh);	echo "<br/>";
	}
	//*/
    $jsonResult = array(
        'success' => true,
        'sap' => $hitori
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);

?>
