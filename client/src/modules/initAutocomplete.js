import translate from './translate';

let autocomplete;
function initAutocomplete(appData, input) {
    autocomplete = new google.maps.places.Autocomplete(
        //document.getElementById('autocomplete'),
        input,
        {
            types: ['(cities)'],
            fields: ['address_components', 'geometry']
        }
    );
    autocomplete.addListener('place_changed', async () => {
        var place = autocomplete.getPlace();
        input.value = place.address_components[0].long_name;
        const city = await translate(appData.lang, 'en', place.address_components[0].long_name);
        appData.location = {
            city,
            country: place.address_components.filter(obj => obj.types.includes('country'))[0].short_name,
            loc: [String(place.geometry.location.lat()), String(place.geometry.location.lng())]
        };
    });
}

export { initAutocomplete };