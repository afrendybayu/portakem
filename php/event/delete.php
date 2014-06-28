<?php
	// Afrendy Bayu, 27Juni2014 //
	//  WeekEndYangBerteman  //

include '../connection.php';
include '../util.php';

try {
	$params = json_decode(file_get_contents('php://input'));
	if (!isset($params->id))	throw new Exception('ID tidak ditemukan');
	
	$paramid = $params->id;
	$sqlev = "delete from event where id=".$params->id;
	//echo "sql: $sqlev<br/>";
	$q = db_query($sqlev);

	mysql_free_result($q);
	//echo "unit: $unit, jml:".count($wkt)." -- "; print_r($wkt);	echo "<br/><br/>";
	//echo "id: "; print_r($idwd); echo "<br/>";

	
	$jsonResult = array(
        'success' => true,
        'tasks' => array("id"=>$params->id)
        //'gagal' => $params
    );
} catch(Exception $e) {
	$jsonResult = array(
		'success' => false,
		'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);    

?>
