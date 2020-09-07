const form = document.querySelector('.form');
const submit = document.querySelector('.submit');

submit.addEventListener('submit', event => {
    event.preventDefault();


    if (validateForm(form)) {
        console.log('Done');
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateBlock(form.elements.name)) {
        valid = false;
    }
    if (!validateBlock(form.elements.phone)) {
        valid = false;
    }
    if (!validateBlock(form.elements.country)) {
        valid = false;
    }
    if (!validateBlock(form.elements.city)) {
        valid = false;
    }
    if (!validateBlock(form.elements.street)) {
        valid = false;
    }
    if (!validateBlock(form.elements.apartment)) {
        valid = false;
    }
    if (!validateBlock(form.elements.zip)) {
        valid = false;
    }
    if (!validateBlock(form.elements.comment)) {
        valid = false;
    }
    return valid;
}


function validateBlock(form__block) {
    form__block.nextElementSibling.textContent = form__block.validationMessage;
    return form__block.checkValidity();
}