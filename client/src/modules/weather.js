export default async (location, degrees) => {
    const formattedCity = location.city.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace('ł', 'l');
    const res = await fetch(`http://localhost:8000/weather/${formattedCity}?degrees=${degrees}`);
    const data = await res.json();
     
    return data;
}