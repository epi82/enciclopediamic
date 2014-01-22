<?
include ("../config.inc.php");

$nome=($_POST['photo-name']!="")? $_POST['photo-name'] :"";
$upload_dir = "../uploads";

if(isset($_FILES)){
  $temp_file_name = $_FILES['photo-path']['tmp_name'];
  $original_file_name = $_FILES['photo-path']['name'];

  // Find file extention
  $ext = explode ('.', $original_file_name);
  $ext = $ext [count ($ext) - 1];

  // Remove the extention from the original file name
  //$file_name = str_replace ($ext, '', $original_file_name);

  $new_name = '_'.$nome . "." . $ext;
  $today = date("Ymd");
  $new_name = $today . $new_name; 

  if (move_uploaded_file ($temp_file_name, $upload_dir.'/'.$new_name)) 
      {
      
      // Inserimento record immagine nel db  
      $db = mysql_connect($db_host, $db_user, $db_password);
      if ($db == FALSE)
        die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      mysql_select_db($db_name, $db)
      or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");      
      $query = "INSERT INTO foto (url) VALUES ('$new_name')";      
      mysql_query($query, $db);
      mysql_close($db);
      // Fine        
                   
      echo "{success:true, file:\"". $new_name ."\"}";
      } 
  else 
      {
      echo "error";
      }      
}

?>