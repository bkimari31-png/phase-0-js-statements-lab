const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


let temperature = 85;       
let timeOfDay = "evening";  
let soilMoisture = 10;      



if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}


if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}



while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}
