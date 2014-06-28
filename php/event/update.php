<?php
// Afrendy Bayu, 26Juni2014 //
// KetikaMencobaMerangkai  //


include '../connection.php';
include '../util.php';

try {
	$params = json_decode(file_get_contents('php://input'));
	
	if (is_array($params))	{
		$k = 0;	$hasil = array();
		foreach ($params as $obj)	{
			if ($obj->id)	{		// update
				$sql =	"UPDATE event SET down_id='{$obj->iddown}',eq='{$obj->ideql}',opart='{$obj->idopart}',fm='{$obj->idmode}',".
						"cause='{$obj->idcause}',aksi='{$obj->idaksi}' ".
						"WHERE id={$obj->id}";
				//echo "sql$k: $sql<br/>";
				$k++;
				$q = db_query($sql);
				if ($q)	{
					$sql = "SELECT id FROM event order by id desc limit 0,1";
					$qq = db_query($sql);
					if ($qq)	{
						$row = mysql_fetch_assoc($qq);
						//echo "{$row['id']} ";
						//array_push($hasil, $row['id']);
						$hasil[$k]['id'] = $row['id'];
					}
				}
			}
			else {		// insert
				$sql =	"INSERT INTO event (down_id,eq,opart,fm,cause,aksi) VALUES ".
						"('{$obj->iddown}','{$obj->ideql}','{$obj->idopart}','{$obj->idmode}','{$obj->idcause}','{$obj->idaksi}' )";
				//echo "sql$k: $sql<br/>";
				$k++;
				//$q = db_query($sql);
				if ($q)	{
					$sql = "SELECT id FROM event order by id desc limit 0,1";
					$qq = db_query($sql);
					if ($qq)	{
						$row = mysql_fetch_assoc($qq);
						//echo "{$row['id']} ";
						//array_push($hasil, $row['id']);
						$hasil[$k]['id'] = $row['id'];
					}
				}
			}
		}		
	}
	
	if (is_object($params))	{
		if ($params->id)	{
			$sql = 	"UPDATE event SET down_id='{$params->iddown}',eq='{$params->ideql}',opart='{$params->idopart}',".
					"fm='{$params->idmode}',cause='{$params->idcause}',aksi='{$params->idaksi}' ".
					"WHERE id={$params->id}";
			//echo "sql: $sql<br/>";
			$q = db_query($sql); 
			if ($qq)	{
				$sql = "SELECT id FROM event order by id desc limit 0,1";
				$qq = db_query($sql);
				$row = mysql_fetch_assoc($qq);
				$hasil['id'] = $row['id'];
			}
		}
		else {
			$sql =	"INSERT INTO event (down_id, eq,opart,fm,cause,aksi) VALUES ".
				"('{$params->iddown}','{$params->ideql}','{$params->idopart}',".
				"'{$params->idmode}','{$params->idcause}','{$params->idaksi}' )";
			//echo "sql: $sql<br/>";
			//$q = db_query($sql);
			if ($qq)	{
				$sql = "SELECT id FROM event order by id desc limit 0,1";
				$qq = db_query($sql);
				$row = mysql_fetch_assoc($qq);
				$hasil['id'] = $row['id'];
			}
		}
	}
	
	
    $jsonResult = array(
        'success' => true,
        'event' => $hasil
    );
} catch(Exception $e) {
	$jsonResult = array(
		'success' => false,
		'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);   

?>
