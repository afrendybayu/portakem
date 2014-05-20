<?php

include '../connection.php';



try {
	if (isset($_GET['id']))	{
		$id = $_GET['id'];
	} else {
		throw new Exception("ID Unit Tidak Ada");
	}
	
	$rid = explode("e", $id);
	//print_r(array_filter($rid));
	$id = implode(",",array_filter($rid));

	$sql =  "SELECT distinct event.id,down_id, eq, (select concat ('[',equip.tag,'] ',equip.nama))as enama, ".
			"opart,opart.nama as opnama, fm, 'failuremode.nama' as fnama, ".
			"cause,cause.nama as cnama,aksi, aksi.nama as anama ".
			"FROM event ".
			"LEFT JOIN equip ON event.eq = equip.id ".
			"LEFT JOIN opart ON event.opart = opart.id  ".
			"LEFT JOIN failuremode ON event.fm like failuremode.kode ".
			"LEFT JOIN cause ON event.cause like cause.id ".
			"LEFT JOIN aksi ON event.cause like aksi.id ".
			"where down_id in ($id) order by enama asc;";
	//echo "sql: $sql<br/><br/>";
	$q = db_query($sql);

	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}

	$isi = array(); $jml=0;
	while ($row = mysql_fetch_assoc($q)) {
		$isi[$jml]['eql'] = $row['enama'];
		$isi[$jml]['opart'] = $row['opnama'];
		$isi[$jml]['mode'] = $row['fnama'];
		$isi[$jml]['cause'] = $row['cnama'];
		$isi[$jml]['aksi'] = $row['anama'];
		$jml++;
	}
	mysql_free_result($q);
	/*
	echo "<br/>";
	print_r($isi);
	echo "<br/><br/>";
	//*/
	
	
	//echo "jml: ".count($isi)."<br/>";
	//*
	$hsl = array();
	foreach ($isi as $data)	{
		//print_r($data); echo "<br/>";
		array_push($hsl, $data);
	}

	//*/
	//print_r($isi);
	
    $jsonResult = array(
        'success' => true,
        'detail' => $hsl
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
