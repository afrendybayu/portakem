<?php
// Afrendy Bayu, 25 Jan 2014
//   SokaKetikaSaatSendiri

include '../connection.php';
include '../util.php';

$y = date("Y");
$m = date("n");
$d = date("d");

try {
	$tgl = "2014-2";
	$flag = 0;
	//echo "tgl: $tgl<br/>";
	
	//if (isset($_GET['tgl']))	{ $tgl = $_GET['tgl']; } else { $tgl = "2014-5"; }
	
	//$eq = 54;
	
	
	$wktx = explode("-",$tgl);
	$skrg = date('Y-m-d');	$wkt = explode("-",date('Y-m'));
	//echo "wktx: ";	print_r($wktx);	echo "<br/>";
	//echo "wkt : ";	print_r($wkt);	echo "<br/>";
	//echo "Now: $skrg<br/><br/>";

	$data = array(); $arGroup = array();
	$s = "select h.id,h.nama,equip.nama as unit,h.init as init ".
		 ",(select hhh.kode from hirarki hhh where hhh.id = (select hh.parent from hirarki hh where h.parent = hh.id)) as hlok ".
		 ",(select hhh.nama from hirarki hhh where hhh.id = (select hh.parent from hirarki hh where h.parent = hh.id)) as lok ".
		 ",(select hhh.urut from hirarki hhh where hhh.id = (select hh.parent from hirarki hh where h.parent = hh.id)) as urut ".
		 "FROM hirarki h ".
		 "LEFT JOIN equip ON h.id = equip.unit_id and equip.kode like '%COMP%' ".
		 "where h.level = 3 and h.flag = 5 ".
		 "order by urut,nama asc;";
		echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	while ($row = mysql_fetch_assoc($q)) {
		$data[$row['id']]['id'] = $row['id'];
		//$data[$row['id']]['nama'] = $row['nama'].", ".$row['unit']." @".$row['hlok'];
		$data[$row['id']]['kode'] = $row['init']."@".$row['hlok'];//." ".$row['id'];
		$data[$row['id']]['nama'] = "{$row['nama']}, {$row['unit']} @{$row['lok']}";//." ".$row['id'];
		//$data[$row['id']]['lok'] = "@".$row['lok'];//." ".$row['id'];
		$data[$row['id']]['urut'] = $row['urut'];
	}
		

	/*
	//echo "<br/><br/><br/>";
	// QUERY nilai Availability disini
	foreach($data as $d)	{
		print_r($d);
		//echo "<br/>";
	}
	//*/
	

	$s = "select eq, sum(rh) as av,sum(rh_re) as re,count(id) as jml from rh_201311 where cat=5 and thn=$y and bln=$m group by eq;";
		echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$datax = array();
	while ($row = mysql_fetch_assoc($q)) {
		$data[$row['eq']]['av'] = ($row['av']*100)/(24*$row['jml']);
		$data[$row['eq']]['re'] = ($row['re']*100)/(24*$row['jml']);
		$data[$row['eq']]['eq'] = $row['eq'];
	};
	//	echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	foreach ($data as $d)	{
		print_r($d);
		echo "<br/>";
	}

	mysql_free_result($q);
		
	$i=0;
	/*
	foreach ($data as $d)	{
		//$d['av'] = rand(50,100);
		//$d['re'] = rand(80,100);
		//$d['av'] = 100;
		print_r($d); echo "<br/>";
		$arGroup[$i] = $d;
		$i++;
	}
	//*/
	$jsonResult = array(
        'success' => true,
        'avGr' => $arGroup
    );
	
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
	);
}

//echo json_encode($jsonResult);

?>
