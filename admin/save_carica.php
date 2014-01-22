<?
include("../top_foot.inc.php");
include("../config.inc.php");
top_admin();

$tipo=$_POST['tipo'];
$ter=$_POST['ter'];
$arg=$_POST['arg'];
$def=$_POST['def'];
$foto=$_POST['foto'];
$data=$_POST['data'];
$id=$_POST['id'];

switch ($tipo)
  {
  case 'new_ter':                                                
          $anno=substr($data, -4);
          $mese=substr($data, -7, 2);
          $giorno=substr($data, -10, 2);
          $data_mod=$anno."-".$mese."-".$giorno;                   
          
          if ($foto=='on')
          $foto=1;
          else
          $foto=0;
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "INSERT INTO main (termine,definizione,argomento,foto,data) VALUES ('$ter','$def','$arg','$foto','$data_mod')";
            if (mysql_query($query, $db))
            $stampa='Nuovo termine enciclopedico inserito correttamente';
            else
            $stampa='Errore inserimento dati!!! '.mysql_error();
            
          mysql_close($db);
  break;
  case 'mod_ter':
          $def = ereg_replace("[\r\n]", '', $def);
          $arg = ereg_replace("[\r\n]", '', $arg);    
                      
          $anno=substr($data, -4);
          $mese=substr($data, -7, 2);
          $giorno=substr($data, -10, 2);
          $data_mod=$anno."-".$mese."-".$giorno;
          
          if ($foto=='on')
          $foto=1;
          else
          $foto=0;
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "UPDATE main SET termine='$ter', definizione='$def', argomento='$arg', foto='$foto', data='$data_mod' WHERE id='$id'";
            if (mysql_query($query, $db))
            $stampa='Termine enciclopedico aggiornato correttamente';
            else
            $stampa='Errore aggiornamento dati!!! '.mysql_error();
            
          mysql_close($db);
  break;
  case 'del_ter':
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "DELETE FROM main WHERE id='$id'";
            if (mysql_query($query, $db))
            $stampa='Termine enciclopedico cancellato correttamente';
            else
            $stampa='Errore cancellazione dati!!! '.mysql_error();
            
          mysql_close($db);    
      
  break;                                                                                             
  }    

?>

<script type="text/javascript">var stampa1="<? echo $stampa;?>"</script>
<script type="text/javascript">var stampa2="<? echo $stampa2;?>"</script>
<link rel="stylesheet" type="text/css" href="../resources/css/ext-all.css" />
<script type="text/javascript" src="../adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="../ext-all.js"></script>
<script type="text/javascript" src="../js/msg-box.js"></script>
<script type="text/javascript" src="../js/FormShowResults.js"></script>
<style type="text/css">
    .x-window-dlg .ext-mb-download {
        background:transparent url(../images/download.gif) no-repeat top left;
        height:46px;
</style>
<script type="text/javascript">
//setTimeout("('#TableResults').show()",3);
setTimeout("ShowResults()", 3000);

function ShowResults() {
document.getElementById("TableResults").style.display = 'block';
}
</script>
<br />
<table class="Table_Corpo" width="980" cellpadding="10" height="351">
    <tr class="testo1" height="327">
       <td valign="top" bgcolor="#e6e6fa" width="954" height="327">
           <div id="TableResults" style= "display:none;" align="center">
                   <table width="940" border="0" cellspacing="0" cellpadding="3" align="center" height="50">
                      <tbody>                    
                         <tr class="testo1">
                             <td valign="top" width="954">
                             <br />                           
                                <div align="center">
                                    <div id="formShowResults"></div>                
                                </div>
                            </td>
                         </tr>
                      </tbody>
                  </table>
           </div>
       </td>
    </tr>                   
</table>

<?
foot();
?>