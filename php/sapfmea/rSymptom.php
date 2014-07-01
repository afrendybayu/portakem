<?php

// Afrendy Bayu, 1 Juli 2014 //
include '../connection.php';

try {
	$eq = 0; $jml = 0;
	$tisi = array();
	
	$s = "select symptom as nama,count(*) as jml ".
		 ",ROUND((100*count(*)/(select count(*) from sap where symptom not in ('','No Symptom (EP03 Only)'))),2) as persen ".
		 "from sap where symptom not in ('','No Symptom (EP03 Only)') group by symptom ".
		 "order by jml desc";

	//echo "sql: $s<br/>";
	
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	$sap = array();
	while ($row = mysql_fetch_assoc($q)) {
		if (strcmp($row['nama'],"No Symptom (EP03 Only)")!=0)	{
			$sap[] = $row;
		}
	}
	
	mysql_free_result($q);
	//*/
    $jsonResult = array(
        'success' => true,
        'sapsymptom' => $sap
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

