import translate from "./translate";

const formatWeatherData = (weather, textTemplate) => {
    let currTemperature = `${Math.round(weather.main.temp)}°`;
    let iconLink = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    let feelsLike = `${textTemplate.feelsLike} ${Math.round(weather.main.feels_like)}°`;
    let pressure = `${textTemplate.pressure}: ${weather.main.pressure}`;
    let hummidity = `${textTemplate.hummidity}: ${weather.main.humidity} %`;
    let wind = `${textTemplate.wind}: ${weather.wind.speed} m/s`;
    return {
        currTemperature,
        iconLink,
        feelsLike,
        pressure,
        hummidity,
        wind
    };
};

const formatLocationData = (location, textTemplate) => {
    let city = textTemplate.city;
    let country = location.country;
    const fractionalPartLat = location.loc[0].split('.').pop();
    const fractionalPartLng = location.loc[1].split('.').pop();
    let latitude = `${textTemplate.latitude}: ${Math.floor(Number(location.loc[0]))}°${fractionalPartLat.slice(0,2)}'`;
    let longitude = `${textTemplate.longitude}: ${Math.floor(Number(location.loc[1]))}°${fractionalPartLng.slice(0,2)}'`;
    return {
        city,
        country,
        latitude,
        longitude
    };
};

export { formatWeatherData, formatLocationData };

