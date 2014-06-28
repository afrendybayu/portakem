<?php
// Afrendy Bayu, 25 Jan 2014
//   SokaKetikaSaatSendiri

include '../connection.php';
include '../util.php';


$avre = $_GET['tp'];
if (isset($_GET['tgl']))	{
	$wkt = $_GET['tgl'];
	if (strtotime($wkt)>=strtotime("now"))	{
		$th = date("Y");
		$bl = date("n");
	}
	else {
		$th = date("Y",strtotime($wkt));
		$bl = date("n",strtotime($wkt));
		//echo "2 masuk sini<br/>";
	}
} else {
	$th = date("Y");
	$bl = date("n");
	/*
	
	//*/
	
}

try {
	// BULAN BERJALAN
	$s = "select cat, sum(rh_av) as av,sum(rh_re) as re,count(id) as jmleq from rh_201311 ".
		 "where thn=$th and bln=$bl group by cat";
	//echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
		
	$arAvRe = array();
	while ($row = mysql_fetch_assoc($q)) {
		$arAvRe['b'][$row['cat']]['av'] = number_format(($row['av']*100)/($row['jmleq']*24),3);
		$arAvRe['b'][$row['cat']]['re'] = number_format(($row['re']*100)/($row['jmleq']*24),3);
			//echo "ID: {$row['cat']}, AV: {$row['av']}, RE: {$row['av']}, JML: {$row['jmleq']}<br/>";
	}
	//echo "<br/>";
		
	// AWAL TAHUN SAMPAI SEKARANG
	$s = "select cat, sum(rh_av) as av,sum(rh_re) as re,count(id) as jmleq from rh_201311 ".
		 "where thn=$th and bln<=$bl group by cat;";
		//echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
		
	while ($row = mysql_fetch_assoc($q)) {
		$arAvRe['a'][$row['cat']]['av'] = number_format(($row['av']*100)/($row['jmleq']*24),3);
		$arAvRe['a'][$row['cat']]['re'] = number_format(($row['re']*100)/($row['jmleq']*24),3);
			//echo "ID: {$row['cat']}, AV: {$row['av']}, RE: {$row['av']}, JML: {$row['jmleq']}<br/>";
	}
	//echo "<br/>";
		 
		// TAHUN KEMARIN
	$thm1 = $th-1;
	$s = "select cat, sum(rh) as av,sum(rh_re) as re,count(id) as jmleq from rh_201311 where thn=$thm1 group by cat";
		//echo "sql: $s<br/>";
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}

	while ($row = mysql_fetch_assoc($q)) {
		$arAvRe['d'][$row['cat']]['av'] = number_format(($row['av']*100)/($row['jmleq']*24),3);
		$arAvRe['d'][$row['cat']]['re'] = number_format(($row['re']*100)/($row['jmleq']*24),3);
			//echo "ID: {$row['cat']}, AV: {$row['av']}, RE: {$row['av']}, JML: {$row['jmleq']}<br/>";
	}
		//echo "<br/>";
		
		mysql_free_result($q);
		
		//print_r($arAvRe);
	
	// 5 compressor
	// 6 pump
	// 7 genset
	
	$arAR = array();
	
	$obj  = new stdClass();
	$obj1 = new stdClass();
	$obj2 = new stdClass();
	
	if (strcmp($avre,"av")==0)	{
		$obj1->th1 = ($arAvRe['d'][5]['av'])?:0;
		$obj1->avg = ($arAvRe['a'][5]['av'])?:0;
		$obj1->bln = ($arAvRe['b'][5]['av'])?:0;
		$obj1->tgt = '98';
		$obj1->m = "Gas Comp";
		array_push($arAR,$obj1);
		
		
		$obj->th1 = ($arAvRe['d'][7]['av'])?:0;
		$obj->avg = ($arAvRe['a'][7]['av'])?:0;
		$obj->bln = ($arAvRe['b'][7]['av'])?:0;
		$obj->tgt = '98';
		$obj->m = "Generator Set";
		array_push($arAR,$obj);
		
		$obj2->th1 = ($arAvRe['d'][6]['av'])?:0;
		$obj2->avg = ($arAvRe['a'][6]['av'])?:0;
		$obj2->bln = ($arAvRe['b'][6]['av'])?:0;
		$obj2->tgt = '98';
		$obj2->m = "Pump";
		array_push($arAR,$obj2);
	} else if (strcmp($avre,"re")==0)	{
		$obj1->th1 = ($arAvRe['d'][5]['re'])?:0;
		$obj1->avg = ($arAvRe['a'][5]['re'])?:0;
		$obj1->bln = ($arAvRe['b'][5]['re'])?:0;
		$obj1->tgt = '98';
		$obj1->m = "Gas Comp";
		array_push($arAR,$obj1);
		
		
		$obj->th1 = ($arAvRe['d'][7]['re'])?:0;
		$obj->avg = ($arAvRe['a'][7]['re'])?:0;
		$obj->bln = ($arAvRe['b'][7]['re'])?:0;
		$obj->tgt = '98';
		$obj->m = "Generator Set";
		array_push($arAR,$obj);
		
		$obj2->th1 = ($arAvRe['d'][6]['av'])?:0;
		$obj2->avg = ($arAvRe['a'][6]['av'])?:0;
		$obj2->bln = ($arAvRe['b'][6]['av'])?:0;
		$obj2->tgt = '98';
		$obj2->m = "Pump";
		array_push($arAR,$obj2);
		
	}
	
	$jsonResult = array(
        'success' => true,
        'avhome' => $arAR
    );



} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
	);
}

echo json_encode($jsonResult);

?>
