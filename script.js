document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    
    FlightPrices(source, destination);
  });
  
  function FlightPrices(Source, Dest) {
    const flightResults = document.getElementById('flightResults');
    flightResults.innerHTML = ''; // Clear previous results
    
    if (Source === 'Delhi' && Dest === 'Jaipur') {
      flightResults.innerHTML += "<p>Air India: Rs. 1899</p>";
      flightResults.innerHTML += "<p>Vistara: Rs. 2999</p>";
      flightResults.innerHTML += "<p>AirAsia: Rs. 1973</p>";
      flightResults.innerHTML += "<p>Indigo: Rs. 1499</p>";
    } else if (Source === 'Delhi' && Dest === 'Bangalore') {
      flightResults.innerHTML += "<p>Air India: Rs. 2340</p>";
      flightResults.innerHTML += "<p>Vistara: Rs. 5646</p>";
      flightResults.innerHTML += "<p>AirAsia: Rs. 3256</p>";
      flightResults.innerHTML += "<p>Indigo: Rs. 2015</p>";
    } else if (Source === 'Bangalore' && Dest === 'Ranchi') {
      flightResults.innerHTML += "<p>Air India: Rs. 2469</p>";
      flightResults.innerHTML += "<p>Vistara: Rs. 5894</p>";
      flightResults.innerHTML += "<p>AirAsia: Rs. 3216</p>";
      flightResults.innerHTML += "<p>Indigo: Rs. 2264</p>";
    } else if (Source === 'Delhi' && Dest === 'Ranchi') {
      flightResults.innerHTML += "<p>Air India: Rs. 1647</p>";
      flightResults.innerHTML += "<p>Vistara: Rs. 3258</p>";
      flightResults.innerHTML += "<p>AirAsia: Rs. 2964</p>";
      flightResults.innerHTML += "<p>Indigo: Rs. 1532</p>";
    } else {
      flightResults.innerHTML = "<p>No flights found.</p>";
    }
  }
  