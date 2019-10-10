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
  var bottleSize = parseInt($("#bottles").val());

    if (value >= 100 && isolates === 1 && carts === 1) {
        $('#cartsIsolates').show(); 
        $('#isolatesUS').hide(); 
        $('#noSpecials').hide();
        $('#cartsUs').hide();
        $('#isolatesLarge').hide();
        $('#isolatesSmall').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value >= 100 && isolates === 1 && carts === 2) {
        $('#isolatesUs').show();
        $('#cartsIsolates').hide();
        $('#cartsUs').hide();
        $('#noSpecials').hide();
        $('#isolatesLarge').hide();
        $('#isolatesSmall').hide();
        $('#under100Large').hide();
        $('#under100Small').hide(); 
    } else if (value >= 100 && isolates === 2 && carts === 2) {
        $('#noSpecials').show();
        $('#isolatesUs').hide();
        $('#cartsIsolates').hide();
        $('#cartsUs').hide();
        $('#isolatesLarge').hide();
        $('#isolatesSmall').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value >= 100 && isolates === 2 && carts === 1) {
        $('#cartsUs').show();
        $('#noSpecials').hide();
        $('#isolatesUs').hide();
        $('#cartsIsolates').hide();
        $('#isolatesLarge').hide();
        $('#isolatesSmall').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value < 100 && isolates === 1 && carts === 1) {
        $('#cartsIsolates').show();
        $('#cartsUs').hide();
        $('#noSpecials').hide();
        $('#isolatesUs').hide();
        $('#isolatesLarge').hide();
        $('#isolatesSmall').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value < 100 && isolates === 2 && carts === 1) {
        $('#cartsUs').show();
        $('#cartsIsolates').hide();
        $('#noSpecials').hide();
        $('#isolatesUs').hide();
        $('#isolatesLarge').hide();
        $('#isolatesSmall').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value < 100 && isolates === 1 && carts === 2 && bottleSize === 1) {
        $('#isolatesSmall').show();
        $('#cartsUs').hide();
        $('#cartsIsolates').hide();
        $('#noSpecials').hide();
        $('#isolatesUs').hide();
        $('#isolatesLarge').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value < 100 && isolates === 1 && carts === 2 && bottleSize === 2) {
        $('#isolatesLarge').show();
        $('#isolatesSmall').hide();
        $('#cartsUs').hide();
        $('#cartsIsolates').hide();
        $('#noSpecials').hide();
        $('#isolatesUs').hide();
        $('#under100Large').hide();
        $('#under100Small').hide();
    } else if (value < 100 && isolates === 2 && carts === 2 && bottleSize === 1) {
      $('#under100Small').show();
      $('#under100Large').hide();
      $('#isolatesLarge').hide();
      $('#isolatesSmall').hide();
      $('#cartsUs').hide();
      $('#cartsIsolates').hide();
      $('#noSpecials').hide();
      $('#isolatesUs').hide();
  } else if (value < 100 && isolates === 2 && carts === 2 && bottleSize === 2) {
    $('#under100Large').show();
    $('#under100Small').hide();
    $('#isolatesLarge').hide();
    $('#isolatesSmall').hide();
    $('#cartsUs').hide();
    $('#cartsIsolates').hide();
    $('#noSpecials').hide();
    $('#isolatesUs').hide();
}

  });
});
