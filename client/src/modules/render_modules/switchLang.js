export default (appData) => {
    const holder = document.getElementById('switch-lang-holder');
    holder.innerText = '';
    const switchLang = document.createElement('select');
    const languages = [
        ['🇬🇧','en'],
        ['🇨🇳','zh-CN'],
        ['🇮🇳','hi'],
        ['🇪🇸','es'],
        ['🇸🇦','ar'],
        ['🇷🇺','ru'],
        ['🇵🇱','pl'],
        ['🇫🇷','fr'],
        ['🇮🇹','it'],
        ['🇺🇦','uk'],
        ['🇧🇾','be'],
        ['🇯🇵','ja'],
        ['🇩🇪','de'],
        ['🇨🇿','cs']
    ];
    languages.forEach((language) => {
        const option = document.createElement('option');
        option.className = 'lang-switch-option';
        option.value = language[1];
        option.text = language[0];
        option.selected = language[1] === appData.lang;
        switchLang.appendChild(option);
    });
    switchLang.className = 'form-select lang-switch';
    switchLang.addEventListener('change', (event) => {
        appData.lang = event.target.value;
    });
    holder.appendChild(switchLang);
}