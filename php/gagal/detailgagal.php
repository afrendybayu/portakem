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
	//echo "id: $id<br/><br/>";
	
	/*
	$sql =	"SELECT waktudown.id,eqid,kode,fm,pmdef.nama as namapm,down_id,exe,".
			"downt,downj,upt,upj,startt,startj,endt,endj,event as idevent,tipeev ".
			",(select hirarki.nama from hirarki where hirarki.id = ".
			"(select hirarki.parent from hirarki where hirarki.id = ".
			"(select hirarki.parent from hirarki where hirarki.id = equip.unit_id))) as lok ".
			",listEvent.nama as event, equip.unit_id ".
			",(select nama from hirarki where hirarki.id =  ".
			"(select unit_id from equip where id = waktudown.eqid)) as nama ".
			"FROM waktudown ".
			"LEFT JOIN listEvent ON listEvent.id = waktudown.event ".
			"LEFT JOIN equip ON equip.id = waktudown.eqid ".
			"LEFT JOIN event ON event.down_id = waktudown.id ".
			"LEFT JOIN pmdef ON pmdef.id = waktudown.tipeev ".
			"where waktudown.id in ($id) ".
			"order by downt desc, downj desc";
			//"group by down_id "
	//*/
	$sql =	"SELECT waktudown.id,event as idevent,tipeev,eqid,kode,fm ".
			",(select pmdef.nama from pmdef where pmdef.id = (select pmlist.pm from pmlist where pmlist.id=tipeev)) as namapm ".
			",down_id,exe,downt,downj,upt,upj,startt,startj,endt,endj ".
			",(select hirarki.nama from hirarki where hirarki.id ".
			"	= (select hirarki.parent from hirarki where hirarki.id ".
			"	= (select hirarki.parent from hirarki where hirarki.id = equip.unit_id))) as lok ".
			",listEvent.nama as event, equip.unit_id ".
			",(select nama from hirarki where hirarki.id = (select unit_id from equip where id = waktudown.eqid)) as nama ".
			"FROM waktudown ".
			"LEFT JOIN listEvent ON listEvent.id = waktudown.event ".
			"LEFT JOIN equip ON equip.id = waktudown.eqid ".
			"LEFT JOIN event ON event.down_id = waktudown.id ".
			"LEFT JOIN pmdef ON pmdef.id = waktudown.tipeev ".
			"where waktudown.id in ($id) order by downt desc, downj desc";
	//echo "sql: $sql<br/>";
	$q = db_query($sql);

	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	
	$jml = -1; $idd = -1; $idn = 'e';
	$isi = array(); $dd = ''; $td = '';	$mdar = Array(); $tar = Array(); $prop=array();
	while ($row = mysql_fetch_assoc($q)) {

		if (($row['downt']==$dd) && ($row['downj']==$td)) {
			//echo "SAMA: $dd - $td ";
			//$isi[$jml]['id'] .= 'e'.$row['id'];
			$prop['id'] .= 'e'.$row['id'];
			$ax = $row['idevent'];
			if ($ax==2) {
				//echo "masuk 2 ".$row['namapm']."<br/>";
				if (isset($row['namapm'])) {
					if (strlen($isi[$jml]['fm'])>0)
						//$isi[$jml]['fm'] .= "&nbsp;&nbsp;";
						$prop['event'] .= "&nbsp;&nbsp;";
					//$isi[$jml]['fm'] .= "[{$row['kode']}: {$row['namapm']}]";
					//$prop['fm'] .= "[{$row['kode']}: {$row['namapm']}]";
					$prop['event'] .= " [{$row['kode']}: {$row['namapm']}]";
				}
			} else if (($ax==3) || ($ax==4)) {
				//echo "fm: {$row['fm']}<br/>";
				if (isset($row['fm'])) {
					if (strlen($isi[$jml]['fm'])>0)		{
						//$isi[$jml]['fm'] .= "&nbsp;&nbsp;";
						//$prop['event'] .= "&nbsp;&nbsp;";
					}
					//$isi[$jml]['fm'] .= "[{$row['kode']}: {$row['fm']}]";
					//$prop['fm'] .= "[{$row['kode']}: {$row['namapm']}]";
					//$prop['event'] .= " [{$row['kode']}: {$row['namapm']}]";
				}
			}
		} else {
			$jml++;
			$mdar = Array();
		//if (($row['downt']!=$dd) && ($row['downj']!=$td)) {
			/*
			$isi[$jml]['event'] = $row['event'];
			$isi[$jml]['id'] = 'e'.$row['id'];
			$isi[$jml]['unit_id'] = $row['unit_id'];
			$isi[$jml]['nama'] = $row['nama'];
			$isi[$jml]['lok'] = $row['lok'];
			//*/

			$prop['id'] = 'e'.$row['id'];
			$prop['func'] =  $row['nama']." @".$row['lok'];
			$prop['event'] = $row['event'];
			
			
			if ($row['idevent']==1) { 		// standby
				/*
				$isi[$jml]['startt'] = '';		$isi[$jml]['startj'] = '';
				$isi[$jml]['endt'] = '';		$isi[$jml]['endj'] = '';
				$isi[$jml]['tipeev'] = '';
				$isi[$jml]['idevent'] = $row['idevent'];
				//*/
			} else if ($row['idevent']==2) {	// PM
				/*
				$isi[$jml]['startt'] = date('d-m-Y',strtotime("{$row["startt"]} {$row["startj"]}"));
				$isi[$jml]['startj'] = date('H:i',	strtotime("{$row["startt"]} {$row["startj"]}"));
				$isi[$jml]['endt'] = date('d-m-Y',	strtotime("{$row["endt"]} {$row["endj"]}"));
				$isi[$jml]['endj'] = date('H:i',	strtotime("{$row["endt"]} {$row["endj"]}"));
				//*/
				$prop['start'] = date('d M Y H:i',strtotime("{$row["startt"]} {$row["startj"]}"));
				$prop['end']   = date('d M Y H:i',strtotime("{$row["endt"]} {$row["endj"]}"));
				//echo "fm: {$row['namapm']}<br/>";
				if (isset($row['namapm'])) {
					//echo "---- ada fm<br/>";
					//$isi[$jml]['fm'] = "[{$row['kode']}: {$row['namapm']}]";
					$prop['event'] .= " [{$row['kode']}: {$row['namapm']}]";
				}
			} else {
				// senin 
				/*
				$isi[$jml]['startt'] = date('d-m-Y',strtotime("{$row["startt"]} {$row["startj"]}"));
				$isi[$jml]['startj'] = date('H:i',	strtotime("{$row["startt"]} {$row["startj"]}"));
				$isi[$jml]['endt'] = date('d-m-Y',	strtotime("{$row["endt"]} {$row["endj"]}"));
				$isi[$jml]['endj'] = date('H:i',	strtotime("{$row["endt"]} {$row["endj"]}"));
				if (isset($row['fm'])) {
					$isi[$jml]['fm'] = "[{$row['kode']}: {$row['fm']}]";
					//array_push($tar,$row['fm']);
					//$mdar[$row['kode']] = $row['kode'];
					//array_push($mdar,$tar);
					//print_r($mdar);
					//echo $row['kode']." > ".$row['fm']."----<br/>";
				}
				//*/
				$prop['start'] = date('d M Y H:i',strtotime("{$row["startt"]} {$row["startj"]}"));
				$prop['end']   = date('d M Y H:i',strtotime("{$row["endt"]} {$row["endj"]}"));
				//$prop['event'] .= " [{$row['kode']}: {$row['fm']}]";
			}
			/*
			$isi[$jml]['downt'] = date('d-m-Y',strtotime("{$row['downt']} {$row["downj"]}"));
			$isi[$jml]['downj'] = date('H:i',	strtotime("{$row['downt']} {$row["downj"]}"));
			
			$isi[$jml]['upt'] = date('d-m-Y',	strtotime("{$row['upt']} {$row["upj"]}"));
			$isi[$jml]['upj'] = date('H:i',	strtotime("{$row['upt']} {$row["upj"]}"));
			//*/
			$prop['down'] = date('d M Y H:i',strtotime("{$row['downt']} {$row["downj"]}"));
			$prop['up']   = date('d M Y H:i',strtotime("{$row['upt']} {$row["upj"]}"));

			$dd = $row['downt'];	$td = $row['downj'];
			
			
			$prop['exe'] = $row['exe'];
		//} else {
			//echo ($jml)." >> AWAL: $dd - $td<br/>";
			
		}
		//print_r($mdar);
		//$isi[$jml]['fm'] .=
	}
	mysql_free_result($q);
	//print_r($isi);


	//*
	$obj1 = new stdClass();
	$obj1->nama = "ID";
	$obj1->nilai = $prop['id'];
	array_push($isi,$obj1);
	//*/
	$obj2 = new stdClass();
	$obj2->nama = "Function Location";
	$obj2->nilai = $prop['func'];
	array_push($isi,$obj2);
	
	$obj3 = new stdClass();
	$obj3->nama = "Event";
	$obj3->nilai = $prop['event'];
	array_push($isi,$obj3);
	
	$obj4 = new stdClass();
	$obj4->nama = "Unit Down";
	$obj4->nilai = $prop['down'];
	array_push($isi,$obj4);
	
	if ($ax!=1)	{		// selain stanby
		$obj5 = new stdClass();
		$obj5->nama = "Start Repair";
		$obj5->nilai = $prop['start'];
		array_push($isi,$obj5);
	}
	
	$obj6 = new stdClass();
	$obj6->nama = "Unit Running";
	$obj6->nilai = $prop['up'];
	array_push($isi,$obj6);
	
	if ($ax!=1)	{		// selain stanby
		$obj7 = new stdClass();
		$obj7->nama = "Repair End";
		$obj7->nilai = $prop['end'];
		array_push($isi,$obj7);
	}
	
	if ($ax!=1)	{		// selain stanby
		$obj8 = new stdClass();
		$obj8->nama = "Executor";
		$obj8->nilai = $prop['exe'];
		array_push($isi,$obj8);
	}
	
	//echo "jml: ".count($isi)."<br/>";
	/*
	foreach($isi as $a)	{
		print_r($a);
		echo "<br>";
	}
	//*/
	//print_r($isi);
	
    $jsonResult = array(
        'success' => true,
        'gagal' => $isi
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
