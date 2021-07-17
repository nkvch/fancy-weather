import translate from "./translate";

const prepareText = async (location, lang) => {
    let jointText = 
    `Feels like|Pressure|Hummidity|Wind|${location.city}|Latitude|Longitude`;
    if (lang !== 'en') {
        jointText = await translate('en', lang, jointText);
    }
    const splited = jointText.split(/[|]/);
    return {
        feelsLike: splited[0],
        pressure: splited[1],
        hummidity: splited[2],
        wind: splited[3],
        city: splited[4],
        latitude: splited[5],
        longitude: splited[6]
    }
}

export { prepareText };

