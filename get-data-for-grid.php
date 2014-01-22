<?
include ("config.inc.php");

$termine=($_POST['termine']!="")? $_POST['termine'] :"";
$argomento=($_POST['argomento']!="")? $_POST['argomento'] :"";
$foto=($_POST['foto']!="")? $_POST['foto'] :"";
$data=($_POST['data']!="")? $_POST['data'] :"";
$start=($_POST['start']!="")? $_POST['start'] :"";
$limit=($_POST['limit']!="")? $_POST['limit'] :"";
$dir=($_POST['dir']!="")? $_POST['dir'] :"";
$sort=($_POST['sort']!="")? $_POST['sort'] :"";

$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");


$query_where .= " WHERE termine LIKE '%".$termine."%'";

if ($argomento!="") 
  {
    $query_where .= " AND argomento LIKE '%".$argomento."%'";
  }
  
if ($foto!="" AND $foto!="-") 
  {
    $query_where .= " AND foto='".$foto."'";
  }    

$query_count="SELECT count(*) FROM main";
$query_count .= $query_where;
$sql = mysql_query($query_count) or die(mysql_error());
$count = mysql_result($sql, "0"); 

$query = "SELECT id,termine,argomento,foto,data FROM main";
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
      $id_db=$row[id];      
      $ter_db=htmlentities(trim($row[termine]));
      $ter_db=utf8_encode($ter_db);
      $arg_db=htmlentities(trim($row[argomento]));
      $arg_db=utf8_encode($arg_db);
      $foto_db=$row[foto];
      $dat_db=trim($row[data]);            
                                                                                     
        $json[]= array(
          "id" => $id_db,
          "termine" => $ter_db,
          "argomento" => $arg_db,
          "foto" => $foto_db,
          "data" => $dat_db                    
        );        
    }

echo json_encode(array("totalCount" => $count,"rows" => $json));    
    
mysql_close($db); 

?>