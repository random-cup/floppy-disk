$( document ).ready(function() {

  $('#fromValue').on('input', function(){
    convert();
  });

  $('#from, #to').on('hidden.bs.select', function () {
    convert();
});

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  var convert = function(){

    var from = $('#from').find(":selected").val();
    var to = $('#to').find(":selected").val();
    var fromValue = $('#fromValue').val();
 
    var fromInMb;
    var result;

    switch(from){
      case 'mb': fromInMb = 1.0 * fromValue ; break;
      case 'gb': fromInMb = (1.0*fromValue*1e3); break;
      case 'book': fromInMb = (fromValue*240.0); break;
      case 'movie': fromInMb = (4.0*fromValue*1e3); break;
      case 'song': fromInMb = (fromValue*3.5); break;
      case 'game': fromInMb = (30*fromValue*1e3); break;
    }

    switch(to){

      case 'smlflop': result = fromInMb * 0.694444444; break;
      case 'midflop': result = fromInMb * 1.388888889; break;
      case 'bigflop': result = fromInMb * 2.0; break;
    }

    result = result.toFixed(2)
    var num_parts = result.toString().split(".")
    num_parts[0] = numberWithCommas(num_parts[0])
    $('#toValue').text(num_parts.join("."));
  }

});
