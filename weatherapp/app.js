var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var inputBox = document.querySelector(".input-box");
var searchBtn = document.getElementById("searchBtn");
var weatherImg = document.querySelector(".weather-img");
var temperature = document.querySelector(".temperature");
var description = document.querySelector(".description");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var locationNotFound = document.querySelector(".location-not-found");
var weatherBody = document.querySelector(".weather-body");
function checkWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, url, response, weatherData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    apiKey = "dab8b5291cb33160eb3fa5a681c1cde6";
                    url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    weatherData = _a.sent();
                    if (weatherData.cod === "404") {
                        handleNotFoundError();
                        return [2 /*return*/];
                    }
                    displayWeatherInfo(weatherData);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("An error occurred while fetching weather data:", error_1);
                    handleNotFoundError();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleNotFoundError() {
    locationNotFound.style.display = "flex";
    weatherBody.style.display = "none";
    console.log("Error: City not found or API request failed");
}
function displayWeatherInfo(weatherData) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log("Weather data:", weatherData);
    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    var temperatureValue = (_b = (_a = weatherData.main) === null || _a === void 0 ? void 0 : _a.temp) !== null && _b !== void 0 ? _b : null;
    var descriptionValue = (_d = (_c = weatherData.weather) === null || _c === void 0 ? void 0 : _c[0].description) !== null && _d !== void 0 ? _d : null;
    var humidityValue = (_f = (_e = weatherData.main) === null || _e === void 0 ? void 0 : _e.humidity) !== null && _f !== void 0 ? _f : null;
    var windSpeedValue = (_h = (_g = weatherData.wind) === null || _g === void 0 ? void 0 : _g.speed) !== null && _h !== void 0 ? _h : null;
    temperature.innerHTML = temperatureValue ? "".concat(Math.round(temperatureValue - 273.15), "\u00B0C") : "";
    description.innerHTML = descriptionValue || "";
    humidity.innerHTML = humidityValue !== null ? "".concat(humidityValue, "%") : "";
    windSpeed.innerHTML = windSpeedValue !== null ? "".concat(windSpeedValue, "Km/H") : "";
    setWeatherImage(weatherData);
}
function setWeatherImage(weatherData) {
    var _a, _b;
    var weatherMain = (_b = (_a = weatherData.weather) === null || _a === void 0 ? void 0 : _a[0].main) !== null && _b !== void 0 ? _b : null;
    switch (weatherMain) {
        case "Clouds":
            weatherImg.src = "./images/cloud.png";
            break;
        case "Clear":
            weatherImg.src = "./images/clear.png";
            break;
        case "Rain":
            weatherImg.src = "./images/rain.png";
            break;
        case "Mist":
            weatherImg.src = "./images/mist.png";
            break;
        case "Snow":
            weatherImg.src = "./assets/snow.png";
            break;
        default:
            weatherImg.src = ""; // Set a default image or leave it empty based on your design
    }
}
searchBtn.addEventListener("click", function () {
    checkWeather(inputBox.value);
});
