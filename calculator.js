function calculate() {
  var R = document.getElementById("resistance").value;
  var C = document.getElementById("capacitance").value;
  
  if(R && C) {
    var tau = R * C;
    document.getElementById("result").innerHTML = "Time Constant: " + tau + " seconds";
  } else {
    document.getElementById("result").innerHTML = "Please enter both Resistance and Capacitance.";
  }
}

