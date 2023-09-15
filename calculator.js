function calculate() {
  var R = parseFloat(document.getElementById("resistance").value);
  var C = parseFloat(document.getElementById("capacitance").value);
  var R_unit = parseFloat(document.getElementById("res_unit").value);
  var C_unit = parseFloat(document.getElementById("cap_unit").value);

  if (R && C) {
    var tau = R * R_unit * C * C_unit;
    var freq = 1 / (2 * Math.PI * tau);
    
    var result = "Time Constant (tau): " + tau + " seconds<br>";
    result += "Filter Corner Frequency: " + freq + " Hz";
    
    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML = "Please enter both Resistance and Capacitance values.";
  }
}
