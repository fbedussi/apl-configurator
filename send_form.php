<?php header("Content-Type: application/xml; charset=ISO-8859-1"); 
$message = "";

foreach ($_POST as $key => $value) 
{ 
	$message .= $key . ": " . $value . "\n";
} 

$to      = "francesco@francescobedussi.it";
$subject = "Apl - Richiesta preventivo";
$headers = "From: info@attraversamentipedonali.it" . "\r\n" .
    "Reply-To: info@attraversamentipedonali.it" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

echo mail($to, $subject, $message, $headers);
?>