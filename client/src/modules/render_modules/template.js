const textTemplate =  (containerType, containerClass, textType, textClass, text) => {
    const container = document.createElement(containerType);
    container.className = containerClass;
    const textHolder = document.createElement(textType);
    textHolder.className = textClass;
    textHolder.innerText = text;
    container.appendChild(textHolder);
    return container;
}

const textListTemplate = (listClass, liClass, textType, textClass, list) => {
    const listElement = document.createElement('ul');
    listElement.className = listClass;
    list.forEach(text => {
        const item = document.createElement('li');
        item.className = liClass;
        const textElement = document.createElement(textType);
        textElement.className = textClass;
        textElement.innerText = text;
        item.appendChild(textElement);
        listElement.appendChild(textElement);
    });
    return listElement;
}

export { textTemplate, textListTemplate };