<?php

include '../connection.php';



try {
	if (isset($_GET['id']))	{
		$id = $_GET['id'];
	} else {
		
	}
	
	$rid = explode("e", $id);
	//print_r(array_filter($rid));
	$id = implode(",",array_filter($rid));

	$sql =  "select waktudown.id, waktudown.eqid, equip.kode, ".
			"(select concat ('[',equip.tag,'] ',equip.nama)) as nama,waktudown.ket ".
			"from waktudown ".
			"LEFT JOIN equip ON waktudown.eqid = equip.id ".
			"where waktudown.id in ($id);";
	//echo "sql: $sql<br/><br/>";
	$q = db_query($sql);

	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}

	$isi = array(); $jml=0;
	while ($row = mysql_fetch_assoc($q)) {
		$isi[$jml]['ket'] = $row['ket'];
		$isi[$jml]['nama'] = $row['nama'];
		
		$jml++;
	}
	mysql_free_result($q);

	//echo "jml: ".count($isi)."<br/>";



	$ket = array();	$jml = 0;
	for($i=0; $i<count($isi); $i++)	{
		if ($i>0)	{
			for($j=0; $j<$jml; $j++)	{
				//print_r($ket); echo "<br/><br/>";
				//echo "strlen[$j]: ".strlen($ket[$j]['ket']).", strlen[$jml]: ".strlen($ket[$j]['ket'])."<br/>";
				if (strlen($ket[$j]['ket'])!=strlen($ket[$j]['ket'])) {
					$ket[$jml]['eq'] = $isi[$i]['nama'];
					$ket[$jml]['ket'] = $isi[$i]['ket'];
				} else {
					//echo "SAMA <br/>";
				}
			}
		}
		else  {
			$ket[$jml]['eq'] = $isi[$i]['nama'];
			$ket[$jml]['ket'] = $isi[$i]['ket'];
			$jml++;	
		}
	}

	//print_r($ket);
	if (count($ket)==1)	{
		$hsl = $ket[0];
	}
	/*
	$hsl = array();
	foreach ($isi as $data)	{
		//print_r($data); echo "<br/>";
		array_push($hsl, $data);
	}

	//*/
	//print_r($isi);
	
    $jsonResult = array(
        'success' => true,
        'note' => $hsl
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
