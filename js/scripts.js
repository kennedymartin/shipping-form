// Business (or back-end) logic:

var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#us-orders").submit(function() {
    event.preventDefault();
  var value = parseInt($("#order-value").val());
  var isolates = parseInt($("#isolates").val());
  var carts = parseInt($("#cartridges").val());

    if (value >= 100 && isolates === 1 && carts === 1) {
      $('#cartsIsolates').show(); 
      $('#isolatesUS').hide(); 
    } else if (value >= 100 && isolates === 1 && carts === 2) {
      $('#isolatesUs').show();
      $('#cartsIsolates').hide(); 
    } else if (value >= 100 && isolates === 2 && carts === 2) {
        $('#noSpecials').show();
        $('#isolatesUs').hide();
        $('#cartsIsolates').hide();
    } else if (value >= 100 && isolates === 2 && carts === 1) {
        $('#cartsUs').show();
        $('#noSpecials').hide();
        $('#isolatesUs').hide();
        $('#cartsIsolates').hide();
    }
    // } else if (value < 100 && isolates === 1 && carts === 1)

  });
});
