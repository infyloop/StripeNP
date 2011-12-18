$(document).ready(function() {

  Stripe.setPublishableKey('pk_gSydoFvSERSnOolp6caFnpyXUDp2G');
  function stripeResponseHandler(status, response) {
    alert(response.error);
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
                    form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
                    // and submit
                    //form$.get(0).submit();
                }}


  $(".submit").live("click", function(e) {
    e.preventDefault();

    var card_valid = Stripe.validateCardNumber($('.card-number').val());
    var expiry_valid = Stripe.validateExpiry($('.card-expiry-month').val()); // true
    var cvc_valid = Stripe.validateCVC($('.card-cvc').val());
    console.log(card_valid);
    console.log(expiry_valid);
    console.log(cvc_valid);
    if (card_valid && expiry_valid && cvc_valid){
   alert("here");
          // disable the submit button to prevent repeated clicks
      $('.submit-button').attr("disabled", "disabled");

    var amount = 1000; //amount you want to charge in cents
    Stripe.createToken({
        number: $('.card-number').val(),
        cvc: $('.card-cvc').val(),
        exp_month: $('.card-expiry-month').val(),
        exp_year: $('.card-expiry-year').val()
    }, amount, stripeResponseHandler);

    // prevent the form from submitting with the default action
    return false;
    }

    else{
      alert("here");
      if(! card_valid) alert("Please verify the credit card numbers.");
      if(! expiry_valid) alert("Please verify the card expiry month.");
      if(! cvc_valid) alert("Please verify the cvc number");
    }
    
  });
});
