import axios from "axios";

export default async (from, to, text) => {
    try {
        const res = 
        await axios.post(`http://localhost:8000/translate?from=${from}&to=${to}`, { text })
        const data = res.data;
         
        return data.translated;
    } catch (e) {
        console.error(e);
    }
    
}