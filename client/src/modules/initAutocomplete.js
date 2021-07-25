import translate from './translate';

let autocomplete;
function initAutocomplete(appData, input) {
    autocomplete = new google.maps.places.Autocomplete(
        input,
        {
            language: 'en',
            types: ['(cities)'],
            fields: ['address_components', 'geometry']
        }
    );
    autocomplete.addListener('place_changed', async () => {
        var place = autocomplete.getPlace();
        appData.location = {
            city: place.address_components[0].long_name,
            country: place.address_components.filter(obj => obj.types.includes('country'))[0].short_name,
            loc: [String(place.geometry.location.lat()), String(place.geometry.location.lng())]
        };
    });
}

export { initAutocomplete };