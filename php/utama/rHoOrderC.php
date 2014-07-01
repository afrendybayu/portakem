<?php
// Afrendy Bayu, 15 Feb 2014
//   SokaKetikaSaatSendiri

include '../connection.php';
include '../util.php';


try {
	$sql =	"SELECT objid AS otipe, objtype AS `desc`, count(*) AS jml ".
			",ROUND(sum(totescost),2) AS plstcost,ROUND(sum(intcost),2) AS plincost,ROUND(sum(totplancost),2) AS tplcost ".
			",ROUND(sum(totmatcost),2) AS acstcost,ROUND(sum(intcost),2) AS acincost ".
			",ROUND(sum(totservcost),2) AS srvcost,ROUND(sum(actcost),2) AS taccost ".
			"FROM sap WHERE totplancost>0 GROUP BY otipe";
	//echo "sql: $sql<br/>";
	$q = db_query($sql);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$teko = array();	$kk=0;
	while ($row = mysql_fetch_assoc($q)) {
		if (strlen($row['otipe'])>0)
			$teko[] = $row;
	}
	/*
	
	$arTeco = array();
	$obj1 = new stdClass();
	$obj1->otipe = 'AIRCOMPRES';
	$obj1->desc = 'AIRCOMPRESSOR';
	$obj1->plstcost = '123';
	$obj1->plincost = '124';
	$obj1->tplcost = '125';
	$obj1->acstcost = '126';
	$obj1->acincost = '127';
	$obj1->srvcost = '128';
	$obj1->taccost = '129';
	$obj1->budget = '120';
	$obj1->persen = '30.12';
	array_push($arTeco,$obj1);
	
	$obj2 = new stdClass();
	$obj2->otipe = 'CENTRICOMP';
	$obj2->desc = 'CENTRIFUGAL COMPRESSOR';
	$obj2->plstcost = '123';
	$obj2->plincost = '124';
	$obj2->tplcost = '125';
	$obj2->acstcost = '126';
	$obj2->acincost = '127';
	$obj2->srvcost = '128';
	$obj2->taccost = '129';
	$obj2->budget = '120';
	$obj2->persen = '12.12';
	array_push($arTeco,$obj2);
	
	$obj3 = new stdClass();
	$obj3->otipe = 'CENTRIPIMP';
	$obj3->desc = 'CENTRIFUGAL PUMP';
	$obj3->plstcost = '123';
	$obj3->plincost = '124';
	$obj3->tplcost = '125';
	$obj3->acstcost = '126';
	$obj3->acincost = '127';
	$obj3->srvcost = '128';
	$obj3->taccost = '129';
	$obj3->budget = '120';
	$obj3->persen = '30.12';
	array_push($arTeco,$obj3);
		
	$obj4 = new stdClass();
	$obj4->woc = '100.00';
	$obj4->nama = "PIPELINE";
	array_push($arTeco,$obj4);

	$obj5 = new stdClass();
	$obj5->woc = '85.71';
	$obj5->nama = "PRODUCTION";
	array_push($arTeco,$obj5);

	$obj5 = new stdClass();
	$obj5->woc = '94.06';
	$obj5->nama = "PUMP";
	array_push($arTeco,$obj5);

	$obj6 = new stdClass();
	$obj6->woc = '97.22';
	$obj6->nama = "SAFETY";
	array_push($arTeco,$obj6);
	//*/
	
	$jsonResult = array(
        'success' => true,
        'hoorderc' => $teko
    );
	
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
	);
}

echo json_encode($jsonResult);

?>
