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

<!-- LIBS -->
<script type="text/javascript" src="../adapter/ext/ext-base.js"></script>
<!-- ENDLIBS -->

<script type="text/javascript" src="../ext-all.js"></script>

<script type="text/javascript" src="../js/ProgressBarPager.js"></script>
<script type="text/javascript" src="../js/PanelResizer.js"></script>
<link rel="stylesheet" type="text/css" href="../css/PanelResizer.css" /> 
<script type="text/javascript" src="../js/list-images.js"></script>

<!-- FilterRow -->
<link rel="stylesheet" type="text/css" href="../css/FilterRow.css"/>
<script type="text/javascript" src="../js/FilterRow.js"></script>     

<!-- highlightSort -->
<link rel="stylesheet" type="text/css" href="../css/highlightSort.css"/>
<script type="text/javascript" src="../js/highlightSort.js"></script> 

<!-- RowEditor -->
<link rel="stylesheet" type="text/css" href="../css/RowEditor.css"/>
<script type="text/javascript" src="../js/RowEditor.js"></script> 
 
<!-- Include your own Javascript file here - adapt the filename to your filename-->
<script type="text/javascript" src="../js/linkadmin.js"></script>
<script type="text/javascript" src="../js/FileUpload.js"></script>
<script type="text/javascript" src="../js/image.js"></script>
 
<!-- Include Ext stylesheets here: -->
<link rel="stylesheet" type="text/css" href="../resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="../css/uploadfile.css" />

<!-- ComboBox -->
<link rel="stylesheet" type="text/css" href="../css/combos.css" />

<style type=text/css> 
    .upload-icon {
        background: url('../images/image_add.png') no-repeat 0 0 !important;
    }  
    #fi-button-msg {
        border: 2px solid #ccc;
        padding: 5px 10px;
        background: #eee;
        margin: 5px;
        float: left;
    }
</style> 

<br />
<table class="Table_Corpo_Admin" cellpadding="10" height="351" width="980">
     <tr class="testo1">
         <td valign="top" width="954">
            <div id="panel-link" class="container">                    
            </div>
            <br />
            <div align="center" id="fi-form"></div>
            <br />
            <div align="center" id="list-images"></div>
            <br />          
        </td>
     </tr>
</table>
<?
foot();
?>
<br />