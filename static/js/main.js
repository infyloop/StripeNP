
Stripe.setPublishableKey('pk_gSydoFvSERSnOolp6caFnpyXUDp2G');
function stripeResponseHandler(status, response) {
  console.log(response);
  if (response.error) {
    // re-enable the submit button
    $('.submit-button').removeAttr("disabled");
    // show the errors on the form
    $(".payment-errors").html(response.error.message);
  } else {
    var form$ = $("#payment-form");
    // token contains id, last4, and card type
    var token = response['id'];
    // insert the token into the form so it gets
    // submitted to the server
    alert(token);
    var url = "/create";
    $.post(url, {stripe_token:token})
    // and submit
    //form$.get(0).submit();
  }
}
$(document).ready(function() {
  $(".submit").live("click", function(e) {
    e.preventDefault();
    var card_valid = Stripe.validateCardNumber($('#txt_cardno').val());
    var expiry_valid = Stripe.validateExpiry($('#txt_expmonth').val(), $('#txt_expyear').val()); 
    var cvc_valid = Stripe.validateCVC($('#txt_cvv').val());

    if (card_valid && expiry_valid && cvc_valid) {
      // disable the submit button to prevent repeated clicks
      alert("valid");
      $('.submit-button').attr("disabled", "disabled");
      var amount = 1000; //amount you want to charge in cents
      Stripe.createToken({
        number: $('#txt_cardno').val(),
        cvc: $('#txt_cvv').val(),
        exp_month: $('#txt_expmonth').val(),
        exp_year: $('#txt_expyear').val()
      }, amount, stripeResponseHandler);

      // prevent the form from submitting with the default action
      return false;
    }
    else {
      if (!card_valid) {
        alert("Please verify the credit card numbers.");
      }
      if (!expiry_valid) {
        alert("Please verify the card expiry month.");
      }
      if (!cvc_valid) {
        alert("Please verify the cvc number");
      }
    }

  });
});
