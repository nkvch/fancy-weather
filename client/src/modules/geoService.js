const BASE_URL = 'https://ipinfo.io';

export default async () => {
    try {
        const res = await fetch(`${BASE_URL}/json?token=${process.env.IPINFO_ACCESS_KEY}`);
        const json = await res.json();
        return json;
    } catch (e) {
        console.error(e);
    }
}