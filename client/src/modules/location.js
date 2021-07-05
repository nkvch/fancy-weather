export default async () => {
    try {
        const res = await fetch('/location');
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