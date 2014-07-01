<?php

// Afrendy Bayu, 17 Jan 2014 //
include '../connection.php';

try {
	$eq = 0; $jml = 0;
	$tisi = array();

	$s = "select sapfmea.damage as kode,damage.nama, count(*) as jml, ".
		 "ROUND((100*count(*)/(select count(*) from sapfmea where damage <> 'NDMG')),2) as persen ".
		 "from sapfmea ".
		 "left join damage on sapfmea.damage = damage.kode ".
		 "where damage <> 'NDMG' group by damage order by jml desc;";
	//echo "sql: $s<br/>";
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
        'sapdamage' => $sap
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

