export default async (loc, weather) => {
    const formattedCity = loc.city.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace('ł', 'l');
    const weatherDescription = weather.weather[0].description;
    const responses = await Promise.all([fetch(`http://localhost:8000/images/${formattedCity}`), fetch(`http://localhost:8000/images/${weatherDescription}`)]);
    const [cityRes, weatherRes] = responses;
    const options = await Promise.all([cityRes.json(), weatherRes.json()]);
    const [cityOptions, weatherOptions] = options;
    return cityOptions?.results[0]?.urls?.full || weatherOptions?.results[0]?.urls?.full;
}