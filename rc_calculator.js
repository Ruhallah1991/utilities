function calculate() {
  var R = parseFloat(document.getElementById("resistance").value);
  var C = parseFloat(document.getElementById("capacitance").value);
  var R_unit = parseFloat(document.getElementById("res_unit").value);
  var C_unit = parseFloat(document.getElementById("cap_unit").value);

  if (R && C) {
    var tau = R * R_unit * C * C_unit;
    var freq = 1 / (2 * Math.PI * tau);
    var riseTime = 2.2 * tau;

    var settling3tau = 100 * Math.exp(-3);
    var settling4tau = 100 * Math.exp(-4);
    var settling5tau = 100 * Math.exp(-5);

    var time3tau = 3 * tau;
    var time4tau = 4 * tau;
    var time5tau = 5 * tau;

    var result = "Time Constant (\u03C4): " + tau + " seconds<br>";
    result += "Filter Corner Frequency: " + freq + " Hz<br>";
    result += "Rise Time (10% to 90%): " + riseTime + " seconds<br>";

    result += "Amplitude at 3\u03C4: " + time3tau + " seconds, " + (100 - settling3tau).toFixed(2) + "% completed<br>";
    result += "Amplitude at 4\u03C4: " + time4tau + " seconds, " + (100 - settling4tau).toFixed(2) + "% completed<br>";
    result += "Amplitude at 5\u03C4: " + time5tau + " seconds, " + (100 - settling5tau).toFixed(2) + "% completed";

    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML = "Please enter both Resistance and Capacitance values.";
  }
}
