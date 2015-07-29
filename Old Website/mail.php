<?php
require_once 'php/mandrill/src/Mandrill.php'; //Not required with Composer
$mandrill = new Mandrill('8tgVopXzpJ7ozOTWVQCRig');
if(!$mandrill) {
    echo "mandrill null";
}
echo "test1";
$template_name = 'temp';
$message = array(
    'subject' => 'Test message',
    'from_email' => 'thomasmortensson@googlemail.com',
    'html' => '<p>this is a test message with Mandrill\'s PHP wrapper!.</p>',
    'to' => array(array('email' => 'thomasmortensson@googlemail.com', 'name' => 'Recipient 1')),
    'merge_vars' => array(array(
        'rcpt' => 'thomasmortensson@googlemail.com',
        'vars' =>
        array(
            array(
                'name' => 'FIRSTNAME',
                'content' => 'Recipient 1 first name'),
            array(
                'name' => 'LASTNAME',
                'content' => 'Last name')
    ))));

if(!$message) {
    echo "message null";
}
echo "test2";

$result = $mandrill->messages->send($message, false, null, null);

if(!$result) {
    echo "result null";
}
echo "test3";

?>
