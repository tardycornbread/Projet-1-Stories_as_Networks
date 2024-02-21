document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.punctuation');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const punctuation = this.getAttribute('data-punctuation');
            removePunctuation(punctuation);
        });
    });

    function removePunctuation(punctuation) {
        const textContainer = document.querySelector('.main_text p');
        let textContent = textContainer.textContent;
        const regex = new RegExp(escapeRegExp(punctuation), 'g');
        textContent = textContent.replace(regex, '');
        textContainer.textContent = textContent;
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    document.getElementById('resetButton').addEventListener('click', function() {
        window.location.reload();
    });
    document.addEventListener('keydown', function(event) {
        const focusedElement = document.activeElement;
        const sections = Array.from(document.querySelectorAll('.section'));
        let index = sections.indexOf(focusedElement);
    
        if (event.key === 'ArrowDown') {
            index++;
            if (index >= sections.length) {
                index = 0; // Loop back to the first element
            }
        } else if (event.key === 'ArrowUp') {
            index--;
            if (index < 0) {
                index = sections.length - 1; // Loop back to the last element
            }
        }
    
        sections[index].focus();
    });

    
    






});

