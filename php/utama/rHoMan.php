<?php
// Afrendy Bayu, 15 Feb 2014
//   SokaKetikaSaatSendiri

include '../connection.php';
include '../util.php';


try {
	$sql =	"SELECT manwork,count(teco) as jml, (select (if (teco>0,'teco','open'))) as st ".
			"FROM medco.sap group by manwork, st order by manwork";
	
	$q = db_query($sql);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$teko = array();	$cr = ''; $kk=0;	$jmlwo=0; $jmlwom = 0;
	while ($row = mysql_fetch_assoc($q)) {
		if (strlen($row['manwork'])>3)	{
			if ($cr!=$row['manwork'])	{
				$cr = $row['manwork'];
				//echo "cr: $cr, manwork: {$row['manwork']}<br/>";
				
				$teko[$kk]['nama'] = $row['manwork'];
				$teko[$kk]['open'] = (strcmp($teko[$kk]['st'],"open"))?$row['jml']:0;
				$jmlwom = $row['jml'];
				//print_r($row); echo "<br/>";
				
			}
			else {
				//$cr = $row['manwork'];
				//$jmlwom += $row['jml'];
				$teko[$kk]['teco'] = (strcmp($teko[$kk]['st'],"teco"))?$row['jml']:0;
				$teko[$kk]['tot'] = $jmlwom + $row['jml'];
				$teko[$kk]['woo'] = number_format(($teko[$kk]['open']*100)/$teko[$kk]['tot'],2);
				$teko[$kk]['woc'] = number_format(($teko[$kk]['teco']*100)/$teko[$kk]['tot'],2);
				
				//echo "sama !! ------> ";	print_r($row); echo "<br/>"; 
				$kk++;
			}
			$jmlwo=$jmlwo+$row['jml'];
		}
	}
	/*
	foreach($teko as $aa)	{
		print_r($aa);	echo "<br/>";
	}
	print_r($teko);
	//*/
/*
	$arTeco = array();
	$obj1 = new stdClass();
	$obj1->woc = '99.71';
	$obj1->woo = '0.29';
	$obj1->open = '1';
	$obj1->teco = '344';
	$obj1->tot = '345';
	$obj1->nama = "ELECTRICAL";
	array_push($arTeco,$obj1);
	
	$obj2 = new stdClass();
	$obj2->woc = '99.91';
	$obj2->woo = '0.09';
	$obj2->open = '1';
	$obj2->teco = '1064';
	$obj2->tot = '1065';
	$obj2->nama = "INSTRUMENTATION";
	array_push($arTeco,$obj2);
	
	$obj3 = new stdClass();
	$obj3->woc = '92.15';
	$obj3->woo = '7.85';
	$obj3->open = '49';
	$obj3->teco = '575';
	$obj3->tot = '624';
	$obj3->nama = "MECHANICAL";
	array_push($arTeco,$obj3);
		
	$obj4 = new stdClass();
	$obj4->woc = '100.00';
	$obj4->woo = '0';
	$obj4->open = '0';
	$obj4->teco = '1407';
	$obj4->tot = '1407';
	$obj4->nama = "PIPELINE";
	array_push($arTeco,$obj4);

	$obj5 = new stdClass();
	$obj5->woc = '85.71';
	$obj5->woo = '14.29';
	$obj5->open = '5';
	$obj5->teco = '30';
	$obj5->tot = '35';
	$obj5->nama = "PRODUCTION";
	array_push($arTeco,$obj5);

	$obj6 = new stdClass();
	$obj6->woc = '94.06';
	$obj6->woo = '5.94';
	$obj6->open = '13';
	$obj6->teco = '206';
	$obj6->tot = '219';
	$obj6->nama = "PUMP";
	array_push($arTeco,$obj6);

	$obj7 = new stdClass();
	$obj7->woc = '97.22';
	$obj7->woo = '2.78';
	$obj7->open = '2';
	$obj7->teco = '70';
	$obj7->tot = '72';
	$obj7->nama = "SAFETY";
	array_push($arTeco,$obj7);
//*/
	$jsonResult = array(
        'success' => true,
        'homan' => $teko
    );
	
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
	);
}

echo json_encode($jsonResult);

?>
