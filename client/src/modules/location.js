export default async () => {
    try {
        // if production
        const res = await fetch('http://localhost:8000/location');
        const data = await res.json();
        const { city, country, loc, timezone } = data;
        return {
            city,
            country,
            loc: loc.split(','),
            timezone
        };
    } catch (e) {
        console.error(e);
    }
}