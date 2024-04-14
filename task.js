window.addEventListener('scroll', function() {
    const reveal = document.querySelectorAll('.reveal');

    for (let position of reveal) {
        const {top, bottom} = position.getBoundingClientRect();

            if ((bottom < window.innerHeight) && (top > 0)) {
                position.classList.add('reveal_active');
            } else {
                position.classList.remove('reveal_active');
            };
    };
});
