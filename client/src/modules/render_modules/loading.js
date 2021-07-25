const onLoading = () => {
    const app = document.getElementById('app');
    app.className += ' is-loading';
    const loadingBg = document.createElement('div');
    loadingBg.id = 'loadingBg';
    loadingBg.className = 'loading-bg';
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'spinner-border loading-spinner';
    loadingSpinner.id = 'loadingSpinner';
    const hiddenSpan = document.createElement('span');
    hiddenSpan.className = 'visually-hidden';
    hiddenSpan.innerText = 'Loading...';
    loadingSpinner.appendChild(hiddenSpan);
    app.appendChild(loadingBg);
    app.appendChild(loadingSpinner);
}

const offLoading = () => {
    const app = document.getElementById('app');
    app.className = app.className.replace(' is-loading', '');
    app.removeChild(document.getElementById('loadingBg'));
    app.removeChild(document.getElementById('loadingSpinner'));
}

export { onLoading, offLoading };