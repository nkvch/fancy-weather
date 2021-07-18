export default () => {
    const holder = document.getElementById('refreshHolder');
    holder.innerText = '';
    const button = document.createElement('button');
    button.id = 'refreshButton';
    button.className = 'btn btn-outline-light resfresh-button';
    const icon = document.createElement('i');
    icon.className = 'icon bi bi-arrow-repeat';
    button.appendChild(icon);
    holder.appendChild(button);
}