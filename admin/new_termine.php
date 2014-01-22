<?
include ("../config.inc.php");
include ("../top_foot.inc.php");

//intestazione
$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");

top_admin();
 
?>

<!-- tinyMCE -->
<style>
  body { padding: 10px; font-family: Arial; font-size: 12pt;}
  h1 { margin-bottom: 0.3em; }
  h2 { margin-top: 1em }
  ul { list-style: disc outside; padding-left: 1.5em; }
</style>  
<script type="text/javascript" src="../TinyMCE/lib/jQuery/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="../TinyMCE/lib/ext_3.1/ext-jquery-adapter.min.js" ></script>
<script type="text/javascript" src="../TinyMCE/lib/ext_3.1/ext-all.min.js"></script>
<script type="text/javascript" src="../TinyMCE/lib/tiny_mce/tiny_mce.js"></script>
<script type="text/javascript" src="../TinyMCE/Ext.ux.TinyMCE.js"></script>
<!-- -->
 
<!-- Include your own Javascript file here - adapt the filename to your filename-->
<script type="text/javascript" src="../js/linkadmin.js"></script>
<script type="text/javascript" src="../js/form_new_termine.js"></script>  
 
<!-- Include Ext stylesheets here: -->
<link rel="stylesheet" type="text/css" href="../resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="../resources/css/xtheme-blue.css" />

<!-- ComboBox -->
<link rel="stylesheet" type="text/css" href="../css/combos.css" />

<style type="text/css">
        p { width:650px; }
</style>

<br />
<table class="Table_Corpo_Admin" cellpadding="10" height="351" width="980">
     <tr class="testo1">
         <td valign="top" width="954">
            <div id="panel-link" class="container">                    
            </div>
            <br />         
            <div align="center">
                <div id="formNewTermine"></div>                
            </div>
            <br />
        </td>
     </tr>
</table>
<?
foot();
?>
<br />