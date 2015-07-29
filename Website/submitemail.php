<?php
try{
$name  = isset($_POST['name']) ? $_POST['name']  : "";
$email  = isset($_POST['email']) ? $_POST['email']  : "";
$subject  = isset($_POST['subject']) ? $_POST['subject']  : "";
$message  = isset($_POST['message']) ? $_POST['message']  : "";

require_once 'php/mandrill/src/Mandrill.php'; //Not required with Composer
$mandrill = new Mandrill('BJkxgY1mlAsYOZRTReIQhQ');
if(!$mandrill) {
    echo "mandrill null";
}
//echo "test1";
$template_name = 'temp';
$message = array(
    'subject' => $subject,
    'from_email' => $email,
    'html' => $message,
    'to' => array(array('email' => 'spoileralerthelp@gmail.com', 'name' => 'Recipient 1')),
    'merge_vars' => array(array(
        'rcpt' => 'spoileralerthelp@gmail.com',
        'vars' =>
        array(
            array(
                'name' => $name,
                'content' => 'Recipient 1 first name'),
            array(
                'name' => 'LASTNAME',
                'content' => 'Last name')
    ))));

if(!$message) {
    echo "message null";
}
//echo "test2";

$result = $mandrill->messages->send($message, false, null, null);
}
catch (Exception $e) {
echo '<!DOCTYPE html>';
echo '<head>';
echo '<meta http-equiv="refresh" content="0; url=failure.html" />';
echo '</head>';
echo '</html>';
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      if(!$result) {
        echo '<meta http-equiv="refresh" content="0; url=failure.html" />';
      }
      else { echo '<meta http-equiv="refresh" content="0; url=success.html" />';}
    ?>
  </head>
</html>