function windowLoad() {
    
    if (document.querySelector('[data-glow]')) {

        document.documentElement.addEventListener('mouseover', buttonActions);
        document.documentElement.addEventListener('mouseout', buttonActions);
        document.documentElement.addEventListener('mousemove', buttonActions);

        let buttonGlow;
        let buttonGlowColor;
        let buttonGlowSize;
        

        function buttonActions(event) {

            const button = event.target.closest('[data-glow]');
            
            if (!button) return;

            if (event.type === 'mouseover') {

                button.insertAdjacentHTML('beforeend', `
                    <span class="button__glow">
                        <span class="button__color"></span>
                    </span>
                `)

                buttonGlow = button.querySelector('.button__glow');
                buttonGlowColor = button.querySelector('.button__color');
                buttonGlowSize = Math.min(button.offsetWidth, button.offsetHeight);
                buttonGlow.style.width = buttonGlow.style.height = `${buttonGlowSize}px`;

                buttonGlowColor.style.width = `${button.offsetWidth}px`;
                buttonGlowColor.style.height = `${button.offsetHeight}px`;
            }

            if (event.type === 'mouseout') {
                button.querySelector('.button__glow').remove();
            }

            if (event.type === 'mousemove') {
                const posX = event.pageX - (button.getBoundingClientRect().left - scrollX);
                const posY = event.pageY - (button.getBoundingClientRect().top - scrollY);

                buttonGlow.style.left =  `${posX - buttonGlowSize / 2}px`;
                buttonGlow.style.top =  `${posY - buttonGlowSize / 2}px`;

                buttonGlowColor.style.transform = `
                    translate(${posX - (button.offsetWidth - buttonGlowSize / 2)}px,
                              ${posY - (button.offsetHeight - buttonGlowSize / 2)}px)`;
            }
        }
    }
}

window.addEventListener('load', windowLoad);