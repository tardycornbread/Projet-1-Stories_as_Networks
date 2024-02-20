const keyToButtonIdMap = {
    '.': 'period',
    ',': 'comma',
    ' ': 'space',
    "'": 'apostrophe',
    ':': 'colon',
    '?': 'qm',
    '"': 'quom',
    ';': 'sc',
    '!': 'em'
};

document.addEventListener('keydown', function(event) {
    const buttonId = keyToButtonIdMap[event.key];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            button.dispatchEvent(clickEvent);
        }
    }
});
