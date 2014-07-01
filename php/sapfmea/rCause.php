<?php

// Afrendy Bayu, 17 Jan 2014 //
include '../connection.php';

try {
	$eq = 0; $jml = 0;
	$tisi = array();

	$s = "select sapfmea.cause AS kode,cause.nama, count(*) as jml,".
		 "ROUND((100*count(*)/(select count(*) from sapfmea )),2) as persen ".
		 "from sapfmea ".
		 "left join cause on sapfmea.cause= cause.kode ".
		 "group by cause order by jml desc;";	 
	
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	$sap = array(); $strcat;
	while ($row = mysql_fetch_assoc($q)) {
		//$row['param'] = 'cau';
		$sap[] = $row;
	}
	
	mysql_free_result($q);

    $jsonResult = array(
        'success' => true,
        'sapcause' => $sap
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

