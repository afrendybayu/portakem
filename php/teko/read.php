<?php
// Afrendy Bayu, 30 Jun 2014


include '../connection.php';

try {
	$sql = "select count(teco) as jml, (select (if (teco>0,'1','0'))) as teko from sap group by teko";
	//echo "sql: $sql<br/>";

	$q = db_query($sql);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$teko = array();
	while ($row = mysql_fetch_assoc($q)) {
		$teko[] = $row;
	}
	
	mysql_free_result($q);
	//*/
    $jsonResult = array(
        'success' => true,
        'teco' => $teko
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);

?>

