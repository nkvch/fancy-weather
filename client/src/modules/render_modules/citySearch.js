export default () => {
    const cityInput = document.createElement('input');
    cityInput.id = 'autocomplete';
    cityInput.className = 'form-control city-search';
    cityInput.placeholder = 'Type in city';
    cityInput.type = 'text';
    return cityInput;
}