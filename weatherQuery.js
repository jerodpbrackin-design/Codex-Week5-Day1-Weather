async function fetchWeather() {
  const lat = document.getElementById("latitude").value;
  const long = document.getElementById("longitude").value;
  const temp = document.getElementById("temperatureResult");

  const weatherResult = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
  );

  if (!weatherResult.ok) {
    throw new Error("Could not fetch weather data");
  }

  const weatherData = await weatherResult.json();
  temp.innerText = `The current temperature is ${weatherData.current_weather.temperature}°C`;

}
