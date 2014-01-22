<?
include ("config.inc.php");

$id=$_REQUEST['id'];

$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");   

$query = "SELECT termine,definizione,data FROM main WHERE id=".$id;
 
$json = array();
$i = 0;

$result = mysql_query($query, $db);
while ($row = mysql_fetch_array($result))
    {
      $id_db=$row[id];      
      $ter_db=htmlentities(trim($row[termine]));
      $def_db=htmlentities(trim($row[definizione]));
      $dat_db=($row[data]);         
                                                                                     
        $json[]= array(
          "id" => $id_db,
          "termine" => $ter_db,
          "definizione" => $def_db,
          "data" => $dat_db               
        );        
    }

echo json_encode(array("totalCount" => $count,"rows" => $json));    
    
mysql_close($db); 

?>