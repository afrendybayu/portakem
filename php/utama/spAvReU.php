<?php
// Afrendy Bayu, 15 Feb 2014
//   SokaKetikaSaatSendiri

include '../connection.php';
include '../util.php';

if (isset($_GET['qe']))	{
	//echo "bla ";
	$greq = $_GET["qe"];
}

$thn = date('Y');
$bln = date('n');

//echo "greq: ".$greq."<br/>";


if (!strcmp($greq,'avgc'))	{
	$avre = 'rh_av'; $cat=5;
} else if (!strcmp($greq,'avgs'))	{
	$avre = 'rh_av'; $cat=7;
	//$av = '74.9';
} else if (!strcmp($greq,'avpm'))	{
	$avre = 'rh_av'; $cat=6;
	//$av = '92.7';
} else if (!strcmp($greq,'regc'))	{
	$avre = 'rh_re'; $cat=5;
	//$av = '17.9';
} else if (!strcmp($greq,'regs'))	{
	$avre = 'rh_re'; $cat=7;
	//$av = '29.9';
} else if (!strcmp($greq,'repm'))	{
	$avre = 'rh_re'; $cat=6;
	//$av = '32.7';
} else {
	$avre = 'rh_av'; $cat=5;
	//$av = '87';
}

$sql = "select (sum($avre)/count(id))*(100/24) as hsl from rh_201311 ".
		" where thn=$thn and bln = $bln and cat = $cat";
$sql = "select (sum($avre)/count(id))*(100/24) as hsl from rh_201311 ".
		" where thn=$thn and bln = $bln and cat = $cat";
//echo "sql: $sql<br/>";

$q = db_query($sql);
	
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$arr = array(); $k=0;
	while ($row = mysql_fetch_assoc($q)) {
		$hsl = number_format((float)$row['hsl'], 2);
	}


try {
	$arTeco = array();
	$obj1 = new stdClass();
	$obj1->nama = "";
	$obj1->av = $hsl;
	array_push($arTeco,$obj1);
		
	$jsonResult = array(
        'success' => true,
        'greq' => $arTeco
    );
	
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
	);
}

echo json_encode($jsonResult);

?>
