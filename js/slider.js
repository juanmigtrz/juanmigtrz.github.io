(function() {

    const sliders = [...document.querySelectorAll('.proyectos__body')];
    const buttonNext = document.querySelector('#Next');
    const buttonBefore = document.querySelector('#Before');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });
    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.proyectos__body--show').dataset.id;
        value = currentTestimony;
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove('proyectos__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('proyectos__body--show');

    }
})()