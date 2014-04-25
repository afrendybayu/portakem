<?php
/* Afrendy Bayu */
//*
include '../connection.php';
include '../util.php';

try {
	$sql = array();
	$eq = 0; $jml = 0;
	$tisi = array();
	
	if (isset($_GET['tgl']))	{ $tgl = $_GET['tgl']; } else { $tgl = '0';	}
	if (isset($_GET['cat']))	{ $cat = $_GET['cat']; } else { $cat = 5;	}		// 5: default Compressor
	//echo "tgl: ".$tgl."<br/>";
	if ($tgl==null || $tgl=='0')	{
		$tgl=date("ymd");	//echo "tgl: $tgl<br/>";
	}
	$m=substr($tgl,2,2);
	
	$y=substr($tgl,0,2);	// echo "$tgl >> m: $m<br/>";	// Tahun
	$t=substr($tgl,4,2);	// echo "$tgl >> t: $t<br/>";	// Tanggal
	

	$sql["tbl"][0] = "rh_".date("Ym", mktime(0, 0, 0, $m, $t, $y));
	$sql["bts"][0] = date("Y-m-d", mktime(0, 0, 0, $m, $t, $y)); 	
	$sql["tbl"][1] = "rh_".date("Ym", mktime(0, 0, 0, $m, $t, $y)-(13*24));
	$sql["bts"][1] = date("Y-m-d", mktime(0, 0, 0, $m, $t-13, $y));
	
	//echo "tbl: {$sql["tbl"][0]}, bts: {$sql["bts"][0]}, tbl: {$sql["tbl"][1]}, bts: {$sql["bts"][1]}<br/>";
	//echo "tbl: {$sql["tbl"][0]}, bts0: {$sql["bts"][0]}, bts1: {$sql["bts"][1]}<br/>";
	
	
	//$s =  "select equip.id, equip.nama, equip.tag, equip.cat, hirarki.nama as hlok from equip ".
	//		"left join hirarki on equip.lok = hirarki.id where equip.strh = '$cat' order by hlok, nama asc";
	
	$s =  "select id,nama,parent as idparent,ket /*level*/ ".
			"/*,(select h.parent from hirarki h where hh.parent = h.id) as parent*/ ".
			",(select hhh.nama from hirarki hhh where hhh.id = (select hh.parent from hirarki hh where h.parent = hh.id)) as hlok ".
			",(select hhh.urut from hirarki hhh where hhh.id = (select hh.parent from hirarki hh where h.parent = hh.id)) as urut ".
			"from hirarki h where level = 3 and flag = '$cat' ".
			"order by urut asc, nama asc;";
	
	$q = db_query($s);
	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
	
	$fas = array();
	while ($row = mysql_fetch_assoc($q)) {
		//echo $row['id']."<br/>";
		//$tisi[$row['id']] = $row;
		$fas[$row['id']]['id'] = $row['id'];
		$fas[$row['id']]['eq'] = $row['nama'];//." ".$row['tag'];
		$fas[$row['id']]['cat'] = $row['cat'];
		$fas[$row['id']]['Lokasi'] = $row['hlok'];
	}
	//print_r($fas);

	$loop = ($sql["tbl"][0]!=$sql["tbl"][1])?2:1;

	$limit = '';
	if ($t>=14)	{
		$limit = " tgl>='{$sql["bts"][1]}' and";
	}
	
	
	//echo "{$sql["bts"][1]} ----- {$sql["bts"][0]}<br/>";
	$sql = "SELECT * FROM rh_201311 WHERE tgl BETWEEN '{$sql['bts'][1]}' AND '{$sql['bts'][0]}' ";
			//"AND rh<>'24'";
	//echo "sql: $sql<br/>";
	$q = db_query($sql);
	
	$tisi = array();
	if ($q)	{
		while ($row = mysql_fetch_assoc($q)) {
			if ($eq != $row['eq'])	{
				$eq = $row['eq'];
				//$isi[$eq] = $row;	
				$tisi[$eq]['id'] = $row['eq'];
				$tisi[$eq]['tgl'] = $row['tgl'];
				//$jml=$jml+1;
			}
			$time = strtotime($row['tgl']);
			$tisi[$eq]["k".date('ymd',$time)] = format_rh_time($row['rh']);
			//$tisi[$eq]["k".date('ymd',$time)] = ($row['rh']);
			//echo "row[rh]: {$row['rh']}<br/>";
		}
	}
	
	mysql_free_result($q);
	//print_r($tisi);
	
	
	
	// select equip.nama, equip.tag, equip.lok, equip.strh, hirarki.nama from equip
	// left join hirarki on equip.lok = hirarki.id
//	$sql["sql"][0] = "SELECT * FROM {$sql["tbl"][0]} where {$limit} tgl<='{$sql["bts"][0]}'  order by eq asc, tgl desc";
//	$sql["sql"][1] = "SELECT * FROM {$sql["tbl"][1]} where tgl>='{$sql["bts"][1]}' order by eq asc, tgl desc";
	/*
	$sql["sql"][0] = "SELECT * FROM rh_201311 where {$limit} tgl<='{$sql["bts"][0]}' and rh<>'24:00' order by eq asc, tgl desc";
	$sql["sql"][1] = "SELECT * FROM rh_201311 where tgl>='{$sql["bts"][1]}' and rh<>'24:00' order by eq asc, tgl desc";
	
	$tisi = array();
	for ($i=0;$i<$loop;$i++)	{
		//echo "sql: {$sql['sql'][$i]}<br/>";
		$q = db_query($sql["sql"][$i]);

		if ($q=='')	{
			//echo "gak ono <br/>";
		} else {
			while ($row = mysql_fetch_assoc($q)) {
				if ($eq != $row['eq'])	{
					$eq = $row['eq'];
					//$isi[$eq] = $row;	
					$tisi[$eq]['id'] = $row['eq'];
					$tisi[$eq]['tgl'] = $row['tgl'];
					//$jml=$jml+1;
				}
				$time = strtotime($row['tgl']);
				$tisi[$eq]["k".date('ymd',$time)] = $row['rh'];
			}
		}
	}
	//*/
	
	foreach ($tisi as $data)	{
		//if ($fas[$data['id']]!=null)	{
		if(@isset($fas[$data['id']]))	{
			$fas[$data['id']] = @array_merge($fas[$data['id']],$data);
		}
	}

	//mysql_free_result($q);
	//echo "<br/><br/><br/>";	
	//print_r($fas);
	
	$isi = array();
	foreach ($fas as $data)	{
		array_push($isi, $data);
	}
	
    $jsonResult = array(
        'success' => true,
        'runninghour' => $isi
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}


echo json_encode($jsonResult);
//*/
?>
