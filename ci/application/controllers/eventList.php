<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class eventList extends CI_Controller {
	
	function __construct()    {
        parent::__construct();
        $this->load->database();
    }
	
	public function index()	{
		//$this->load->view('welcome_message');
		try	{
			//$id = $this->db->escape($_GET['id']);
			//echo "{$_GET['id']}<br/>";
			//$query = $this->db->query("select id, nama from listEvent");
			
			
			$this->db->select('id, nama')->from('listEvent');
			// $this->db->query('SELECT foo FROM bar WHERE bof=? AND zot=?', array($bof, $zot)); 
			$query = $this->db->get();
			
			
			$isi = array();
			if ($query->num_rows() > 0)	{
				foreach ($query->result() as $data)	{
					array_push($isi, $data);
				}
			}
			
			$jsonResult = array(
				'success' => true,
				'event' => $isi
			);
		}
		catch (Exception $e)	{
			 $jsonResult = array(
				'success' => false,
				'message' => $e->getMessage()
			);
		}
		//$this->load->view('welcome_message');
		echo json_encode($jsonResult);
	}
}
