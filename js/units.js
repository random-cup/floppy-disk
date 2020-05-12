function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateOutput() {
  var inForm = document.getElementById("inCalc");
  var outForm = document.getElementById("outCalc");

  var fromValue = parseFloat(inForm.elements["fromValue"].value);
  var fromType = inForm.elements["fromType"];
  var toType = outForm.elements["toType"];

  var fromInMb = 0;
  var result = 0;
  var toValue = outForm.elements["result"];

  switch(fromType.value) {
    case 'mb': fromInMb = 1.0 * fromValue ; break;
    case 'gb': fromInMb = (1.0*fromValue*1e3); break;
    case 'book': fromInMb = (fromValue*240.0); break;
    case 'movie': fromInMb = (4.0*fromValue*1e3); break;
    case 'song': fromInMb = (fromValue*3.5); break;
    case 'game': fromInMb = (30*fromValue*1e3); break;
  }
  switch(toType.value) {
    case 'smFloppy': result = fromInMb * 0.694444444; break;
    case 'mdFloppy': result = fromInMb * 1.388888889; break;
    case 'lgFloppy': result = fromInMb * 2.0; break;
  }

  result = result.toFixed(2);
  var num_parts = result.toString().split(".");
  num_parts[0] = numberWithCommas(num_parts[0]);
  toValue.value = num_parts.join(".");
}