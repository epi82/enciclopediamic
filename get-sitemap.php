<?
include ("config.inc.php");

$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");   

echo '<?xml version="1.0" encoding="UTF-8"?>   
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url> 
      <loc>http://enciclopedia.funghiitaliani.it/</loc> 
      <priority>1.00</priority> 
      <changefreq>daily</changefreq> 
   </url>';
   
$query = "SELECT id FROM main";

$result = mysql_query($query, $db);
while ($row = mysql_fetch_array($result))
    {
      $id_db=$row[id];        
      
  	  echo '   
   <url> 
      <loc>http://enciclopedia.funghiitaliani.it/termine.php?show='. $id_db .'</loc> 
      <priority>1.00</priority> 
      <changefreq>daily</changefreq> 
   </url>';                                                                               																					 																					      
    }

echo '</urlset>';
    
mysql_close($db); 

?>