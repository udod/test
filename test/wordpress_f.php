function addme_ajaxurl() {//some
?>
<script type="text/javascript">
var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
</script>
<?php
}
add_action('wp_head','addme_ajaxurl');

add_action('wp_ajax_submit_form', 'submit_form_callback');
add_action('wp_ajax_nopriv_submit_form', 'submit_form_callback');
function submit_form_callback(){
 
 $params = array();
 parse_str($_POST['data'], $params);

 $name = trim($params['name_alamo']);
 $email = $params['email_alamo'];
 $phone = $params['phone_alamo'];
 $adress = $params['address_alamo'];
 $subject = "Alamo Home Request";
 
 $message = "Email: ".$email."\r\nName: ".$name."\r\nPhone number: ".$phone."\r\nAdress: ".$adress;
 $site_owners_email = 'noah@alamo-homes.com';  // your email
 
 if ($name=="") {
 $error['name'] = "Please enter your name"; 
 }
 
 if (!preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $email)) {
 $error['email'] = "Please enter a valid email address"; 
 }
 
 if ($phone== "") {
 $error['message'] = "Please enter your phone";
 }
 if ($adress=="") {
 $error['subject'] = "Please enter your adress";
 }
 if (!$error) {
 
 $mail = mail($site_owners_email, $subject, $message,
 "From: ".$name." <".$email.">\r\n"
 ."Reply-To: ".$email."\r\n"
 ."X-Mailer: PHP/" . phpversion());
 $success['success'] = "<div class='success'>" . $name . ", We've received your email. We'll be in touch with you as soon as possible! </div>";
 
 echo json_encode($success);
 
 } # end if no error
 else {

  echo json_encode($error);
 } # end if there was an error sending
 
    die(); // this is required to return a proper result
 
}
