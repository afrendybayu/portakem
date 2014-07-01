<?php

// Afrendy Bayu, 18 Jan 2014 //
include '../connection.php';

try {
	$eq = 0; $jml = 0;
	$tisi = array();
	
	$s = "select count(*) as jml, opart as kode, ".
		 "(select nama from opart where opart.kode = sapfmea.opart limit 0,1) as nama, ".
		 "ROUND((100*count(*)/(select count(*) from sapfmea)),2) as persen ".
		 "from sapfmea ".
		 "group by opart order by jml desc";
	/*
	$s = "select sapfmea.opart as kode,opart.nama, count(*) as jml,".
		 "ROUND((100*count(*)/(select count(*) from sapfmea)),2) as persen ".
		 "from sapfmea ".
		 "left join opart on sapfmea.opart = opart.kode ".
		 "group by opart order by jml desc";
	//*/
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	$sap = array();
	while ($row = mysql_fetch_assoc($q)) {
		//$row['param'] = 'dam';
		$sap[] = $row;
	}
	
	mysql_free_result($q);

    $jsonResult = array(
        'success' => true,
        'sapopart' => $sap
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

