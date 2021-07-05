export default async (city) => {
    const res = await fetch(`/weather/${city}`);
    const data = await res.json();
    console.log(data);
    return data;
}