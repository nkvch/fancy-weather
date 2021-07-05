const BASE_URL = 'https://api.unsplash.com/';

export class ImageService {
    static searchWithQuery = async (query) => {
        const rawResponse = await fetch(`${BASE_URL}/search/photos?query=${query}`, {
            headers: {
                Authorization: 'Client-ID '+ process.env.UNSPLASH_ACCESS_KEY
            }
        });
        const jsonResponse = await rawResponse.json();
        return jsonResponse;
    }
}