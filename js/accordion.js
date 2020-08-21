const tabs = document.querySelectorAll('.sizes__item-title');

Array.from(tabs).map(item => {
    item.addEventListener('click', function ($event) {
        console.log($event.target.textContent);

        if ($event.target.tagName === 'DIV') {
            let parentElement = $event.target.parentElement;
            const descriptionElement = parentElement.querySelector('.sizes__item-description');
            fillActiveClass(descriptionElement);
        }

        if ($event.target.tagName === 'SPAN') {
            let parentElement = $event.target.parentElement.parentElement;
            fillActiveClass(parentElement);
        }

        document.querySelectorAll('.sizes__item-description').forEach(item => {
            if (item.parentElement.querySelector('.sizes__item-title').textContent !== $event.target.textContent) {
                item.classList.remove('sizes__item-description_active');
            }
        });
    });
});

function fillActiveClass(el) {
    el.classList.contains('sizes__item-description_active') ?
        el.classList.remove('sizes__item-description_active')
        : el.classList.add('sizes__item-description_active');
}