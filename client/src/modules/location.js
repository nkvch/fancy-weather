export default async () => {
    try {
        // if production
        //const res = await fetch('/location');
        // else
        const res = await fetch(`https://ipinfo.io/json?token=b85e547dc988a1`);
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