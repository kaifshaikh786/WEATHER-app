function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const apiKey = "b54d2922b5cb4b5ca58141201252605";

  if (!location) {
    alert("Please enter a location.");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById("weather").innerHTML = `<p>${data.error.message}</p>`;
        return;
      }

      const { temp_c, condition } = data.current;

      document.getElementById("weather").innerHTML = `
        <img src="https:${condition.icon}" alt="${condition.text}" />
        <p><strong>Condition:</strong> ${condition.text}</p>
        <p><strong>Temperature:</strong> ${temp_c} °C</p>
      `;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("weather").innerHTML = `<p>Error fetching data.</p>`;
    });
}
