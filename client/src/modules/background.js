export default async (loc) => {
    const formattedCity = loc.city.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace('ł', 'l');
    const res = await fetch(`http://localhost:8000/images/${formattedCity}`);
    const imageOptions = await res.json();
    return imageOptions.results[0].urls.full;
}