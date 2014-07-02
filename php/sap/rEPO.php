<?php

// Afrendy Bayu, 17 Feb 2014 //
include '../connection.php';

try {
	$eq = 0; $jml = 0;
	$tisi = array();
	
	if (isset($_GET['unit']))	{ $unit = $_GET['unit']; } else { $unit = 3;	}
	
	$s = "SELECT ordertype AS kode,pmtype,count(*) AS wo ".
		 ",ROUND((100*count(*)/(select count(*) from sap )),2) as persen ".
		 "FROM sap ".
		 "GROUP BY ordertype ".
		 "ORDER BY ordertype ASC,pmtype ASC";

	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	//*
	$sap = array();
	while ($row = mysql_fetch_assoc($q)) {
		//*
		if (strcmp($row['kode'],"EP01")==0)	$row['nama'] = 'EP01 Corrective Order';
		if (strcmp($row['kode'],"EP02")==0)	$row['nama'] = 'EP02 Breakdown Order';
		if (strcmp($row['kode'],"EP03")==0)	$row['nama'] = 'EP03 Scheduled Order';
		if (strcmp($row['kode'],"EP04")==0)	$row['nama'] = 'EP04 General Order';
		if (strcmp($row['kode'],"EP05")==0)	$row['nama'] = 'EP05 Modification Order';
		//if (strcmp($row['kode'],"EP05")!=0)	{
			$sap[] = $row;
		//}
	}
	//*/
	mysql_free_result($q);
	
    $jsonResult = array(
        'success' => true,
        'sap' => $sap
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

