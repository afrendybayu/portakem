<?php
/**
 * PHPExcel
 *
 * Copyright (C) 2006 - 2014 PHPExcel
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2014 PHPExcel (http://www.codeplex.com/PHPExcel)
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt	LGPL
 * @version    1.8.0, 2014-03-02
 */

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

define('EOL',(PHP_SAPI == 'cli') ? PHP_EOL : '<br />');

//date_default_timezone_set('Europe/London');

include '../../medco/php/connection.php';

/** Include PHPExcel_IOFactory */
require_once dirname(__FILE__) . '/../Classes/PHPExcel/IOFactory.php';

function numtoa($no)	{
	//echo "no[0]: {$no[0]}, no[1]: {$no[1]}<br/>";
	$num = $no[1]-1;
	$no[1] = (int) ($num/26);
	$nom = $num%26;
	//echo "num: $nom<br/>";
	$no[0] = strtoupper(base_convert($nom+10,10,36).$no[0]);
	//echo "num: {$no[0]}<br/>";
	if ($no[1]==0)
		return $no;
	else
		return numtoa($no);
}

function fDT($x)	{		// 4/29/2014 8:00
	$test = new DateTime($x);
	return date_format($test, "Y-m-d H:i:s");
}
//*
function fTgl($x)	{
	$x = str_replace('/', '-', $x);
	//echo "tgl asli: $x, convert: ".date('Y-m-d', strtotime($x))."<br/>";
	return date('Y-m-d', strtotime($x));
}
//*/
/*
if (!file_exists("05featuredemo.xlsx")) {
	exit("Please run 05featuredemo.php first." . EOL);
}
//*/

echo date('H:i:s') , " Load from Excel2007 file" , EOL;
$bacaFileStart = microtime(true);

try {
	$objPHPExcel = PHPExcel_IOFactory::load("WO1.xlsx");
} catch(Exception $e) {
	die('Error loading file "'.pathinfo($inputFileName,PATHINFO_BASENAME).'": '.$e->getMessage());
}

$dt = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);

$bacaFileEnd = microtime(true);
$bacaFile = $bacaFileEnd - $bacaFileStart;
echo 'Waktu untuk baca File ' , sprintf('%.4f',$bacaFile) , " seconds<br/>"


$prosesFileStart = microtime(true);
$colData = count(array_filter($dt[1]));
echo "Jml data: ".count($dt)." baris<br/><br/>";

for ($kk=2; $kk<=count($dt); $kk++)	{
//for ($kk=2; $kk<4; $kk++)	{
	$c = array();
	for ($i=0; $i<$colData; $i++)	{
		$no = numtoa(array('', $i+1)); 
		array_push($c,$dt[$kk][$no[0]]);
		//echo "no[$i]: {$no[0]} : {$dt[1][$no[0]]} : <font color='red'>{$dt[44][$no[0]]}</font> <br/>";
		
	}
	//echo "no[$kk]: <font color='red'>{$c[1]}</font> <br/>";


	$sql =	"INSERT INTO sap (pid,req,pos,notifno,notifdate,notiftype,notiftext,prio,report,planner,".
			"reqstart,reqend,downstart,downend,discover,symptom,effect,manwork,orderno,ordertype,".
			"orderprio,orderdesc,eqkode,eqdesc,planstart,planend,pmtype,systemcond,budgetsource,actcost,".
			"totescost,intcost,totservcost,totmatcost,totplancost,reserv,prno,action,teco,tecodate,".
			"cctrcode,cctrdesc,objid,objtype) VALUES (".
			"'{$c[1]}','{$c[2]}','{$c[3]}','{$c[4]}','".fDT($c[5])."','{$c[6]}','{$c[7]}','{$c[8]}','{$c[10]}','{$c[11]}',".
			"'".fDT($c[12])."','".fDT($c[13])."','".fDT($c[14])."','".fDT($c[15])."','{$c[19]}','{$c[20]}','{$c[21]}','{$c[22]}','{$c[23]}','{$c[25]}',".
			"'{$c[26]}','{$c[27]}','{$c[30]}','{$c[31]}','".fTgl($c[32])."','".fTgl($c[33])."','{$c[34]}','{$c[35]}','{$c[36]}','{$c[37]}',".
			"'{$c[38]}','{$c[39]}','{$c[40]}','{$c[41]}','{$c[42]}','{$c[43]}','{$c[44]}','{$c[52]}','{$c[53]}','".fDT($c[54])."',".
			"'{$c[55]}','{$c[56]}','{$c[57]}','{$c[58]}')";

	//echo "sql: $sql<br/>";
	$q = db_query($sql);
	//echo "q: $q<br/>";

	if (!$q)	{
		echo "DB Error, could not query the database\n";
		echo 'MySQL Error: ' . mysql_error();
		exit;
	}
//echo "sql: sukes<br/>";
	$opart = explode(",",$c[45]);
	//print_r($opart);	echo "<br/>";
	if ($c[45] && strlen($c[45])>2)	{
		if (count($opart)>1)	{
			$damage = explode(",",$c[47]);
			$cause  = explode(",",$c[49]);
			
			for ($i=0; $i<count($opart); $i++)	{
				$sql =	"INSERT INTO sapfmea (pid,opart,damage,cause) VALUES ".
						"('{$c[1]}','{$opart[$i]}','{$damage[$i]}','{$cause[$i]}')";
				//echo "sql: $sql<br/>";
				$q = db_query($sql);
			}
		}
		else if (count($opart)==1) {
			$sql =	"INSERT INTO sapfmea (pid,opart,damage,cause) VALUES ".
						"('{$c[1]}','{$c[45]}','{$c[47]}','{$c[49]}')";
				//echo "sql: $sql<br/>";
				$q = db_query($sql);
		}
	}
}


$prosesFileEnd = microtime(true);
$prosesFile = $prosesFileEnd - $prosesFileStart;
echo 'Waktu untuk simpan data ke database ' , sprintf('%.4f',$prosesFile) , " seconds" , EOL;

echo date('H:i:s') , ' Current memory usage: ' , (memory_get_usage(true) / 1024 / 1024) , " MB" , EOL;

/*
echo date('H:i:s') , " Write to Excel2007 format" , EOL;
$callStartTime = microtime(true);

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save(str_replace('.php', '.xlsx', __FILE__));
$callEndTime = microtime(true);
$callTime = $callEndTime - $callStartTime;

echo date('H:i:s') , " File written to " , str_replace('.php', '.xlsx', pathinfo(__FILE__, PATHINFO_BASENAME)) , EOL;
echo 'Call time to write Workbook was ' , sprintf('%.4f',$callTime) , " seconds" , EOL;
// Echo memory usage
echo date('H:i:s') , ' Current memory usage: ' , (memory_get_usage(true) / 1024 / 1024) , " MB" , EOL;


// Echo memory peak usage
echo date('H:i:s') , " Peak memory usage: " , (memory_get_peak_usage(true) / 1024 / 1024) , " MB" , EOL;

// Echo done
echo date('H:i:s') , " Done writing file" , EOL;
echo 'File has been created in ' , getcwd() , EOL;
//*/


?>
