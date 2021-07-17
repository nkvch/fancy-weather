export default (appData) => {
    const holder = document.getElementById('switch-degrees-holder');
    holder.innerText = '';
    const switchDeg = document.createElement('div');
    switchDeg.className = 'btn-group';
    switchDeg.role = 'group';
    
    const csButton = document.createElement('input');
    csButton.type = 'radio';
    csButton.className = 'btn-check';
    csButton.name = 'btnradio';
    csButton.id = 'btnradio1';
    csButton.autocomplete = 'off';
    csButton.checked = appData.degrees === 'C';
    csButton.addEventListener('click', () => {
        appData.degrees = 'C';
    });

    const csLabel = document.createElement('label');
    csLabel.className = 'btn btn-outline-light';
    csLabel.htmlFor = 'btnradio1';
    csLabel.innerText = 'C°';

    const frButton = document.createElement('input');
    frButton.type = 'radio';
    frButton.className = 'btn-check';
    frButton.name = 'btnradio';
    frButton.id = 'btnradio2';
    frButton.autocomplete = 'off';
    frButton.checked = appData.degrees === 'F';
    frButton.addEventListener('click', () => {
        appData.degrees = 'F';
    })

    const frLabel = document.createElement('label');
    frLabel.className = 'btn btn-outline-light';
    frLabel.htmlFor = 'btnradio2';
    frLabel.innerText = 'F°';

    switchDeg.appendChild(csButton);
    switchDeg.appendChild(csLabel);
    switchDeg.appendChild(frButton);
    switchDeg.appendChild(frLabel);

    holder.appendChild(switchDeg);

}