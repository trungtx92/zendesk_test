<?php

$username = "trungtx92@gmail.com";
$password = "chungtrung";
$remote_url = 'https://trungpt.zendesk.com/api/v2/tickets.json';

// Create a stream
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header' => "Authorization: Basic " . base64_encode("$username:$password")                 
  )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$res = file_get_contents($remote_url, false, $context);

echo $res; 

?>