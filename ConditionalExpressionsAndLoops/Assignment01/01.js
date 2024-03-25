'use strict';

const container = document.querySelector('.container');
const temperatureCelsius = parseFloat(prompt('Enter temperature in celsius'));
container.innerHTML = `Tempereature in fahrenheit: ${(temperatureCelsius * 9 / 5) + 32}<br>
Temperature in kelvin: ${temperatureCelsius + 273.15}`;

document.body.append(container);
