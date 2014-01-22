<?
include ("config.inc.php");
include ("top_foot.inc.php");

$show=$_REQUEST['show'];

$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");

$query = "SELECT data, termine, definizione FROM main WHERE id=$show";
$result = mysql_query($query, $db);
while ($row = mysql_fetch_array($result))
    {
      $dat_db=$row[data];
      $ter=$row[termine];
	  $def=$row[definizione];
    }
mysql_close($db);
$anno=substr($dat_db, 0, 4);
$mese=substr($dat_db, 5, 2);
$giorno=substr($dat_db, 8, 2);
$data=$giorno."-".$mese."-".$anno;

top($ter." - ");

?>
    <link rel="stylesheet" type="text/css" href="resources/css/ext-all.css" />
    <link rel="stylesheet" type="text/css" href="css/PanelResizer.css" />        
    
    <!-- LIBS -->
    <script type="text/javascript" src="adapter/ext/ext-base.js"></script>
    <!-- ENDLIBS -->

    <script type="text/javascript" src="ext-all.js"></script>

	<script type="text/javascript" src="js/ToolBar.js"></script>
    <script type="text/javascript" src="js/termine.js"></script>      
    
    <script type="text/javascript">var id="<? echo $show;?>"</script>
    <script type="text/javascript">var data="<? echo $data;?>"</script>
    <script type="text/javascript">var termine="<? echo str_replace('"','\"',$ter);?>"</script>
    
    <style type="text/css">
        .home {
            background-image:url(images/home.png) !important;
        }      
        .chat {
            background-image:url(images/chat.png) !important;
        }
        .shop {
            background-image:url(images/shop.png) !important;
        }    
        .bota {
            background-image:url(images/bota.png) !important;
        } 
        .mico {
            background-image:url(images/mico.png) !important;
        }   
        .forum {
            background-image:url(images/forum.png) !important;
        }                            
    </style>            
          <table width="64" border="0" cellspacing="0" cellpadding="0" height="13">
  <tr height="13">
    <td width="64" height="13"></td>
  </tr>
</table>
<style>#grid-example{display: none;}</style>
<table width="980">
  <tr>
    <td>
      <div align="center">
              <table width="970" border="0" cellspacing="0" cellpadding="1" height="26">
                <tr height="26">                       
                  <td width="970" height="26">                        
                    <div align="center">
                            <table width="970" border="0" cellspacing="0" cellpadding="0" >                        
                              <tr>                        
                                <td width="970">                                    
                                  <div align="center">                                    
                                          <table width="970" border="0" cellspacing="2" cellpadding="4" style="border:1px solid #ffffff">                                    
                                            <tr>
                                              <td>
                                                <div id="grid-example">
                                                	<?php
                                                		echo $ter;
                                                	  	echo $def;
                                                	?>
                                                </div>                                                
                                              </td>                                                                                                              
                                            </tr>                                                                                   
                                          </table>                        
                                  </div>                        
                                </td>                        
                              </tr>                            </table>
                    </div>
                  </td>
                </tr>
              </table>
      </div>
    </td>
  </tr>
</table>
<?
foot();
?>