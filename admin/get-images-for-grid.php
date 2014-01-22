<?
include ("../config.inc.php");

$url=($_POST['url']!="")? $_POST['url'] :"";
$start=($_POST['start']!="")? $_POST['start'] :"";
$limit=($_POST['limit']!="")? $_POST['limit'] :"";
$dir=($_POST['dir']!="")? $_POST['dir'] :"";
$sort=($_POST['sort']!="")? $_POST['sort'] :"";

$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");


$query_where .= " WHERE url LIKE '%".$url."%'";  

$query_count="SELECT count(*) FROM foto";
$query_count .= $query_where;
$sql = mysql_query($query_count) or die(mysql_error());
$count = mysql_result($sql, "0"); 

$query = "SELECT id,url FROM foto";
$query .= $query_where;

if ($sort!="")
  {
   $query .= " ORDER BY ".$sort." ".$dir;  
  }
  
$query .= " LIMIT ".$start.",".$limit;
 
$json = array();
$i = 0;

$result = mysql_query($query, $db);
while ($row = mysql_fetch_array($result))
    {
      $id_db=trim($row[id]);
      $url_db=trim($row[url]);                
                                                                                     
        $json[]= array(
          "id" => $id_db,
          "url" => "uploads/" . $url_db                 
        );        
    }

echo json_encode(array("totalCount" => $count,"rows" => $json));    
    
mysql_close($db); 

?>