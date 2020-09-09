$('.form').submit(e => {
    e.preventDefault();

    // $.fancybox.open({
    //     src: "#modal",
    //     type: "inline"
    // });

const form = $(e.currentTarget);
const name = form.find("[name='name']");
const phone = form.find("[name='phone']");
const country = form.find("[name='comment']");
const city = form.find("[name='city']");
const street = form.find("[name='street']");
const apartment = form.find("[name='apartment']");
const zip = form.find("[name='zip']");
const to = form.find("[name='to']");

const modal = $(".modal");
const content = modal.find(".modal__content");

const isValid = validateForm(e.currentTarget);

if (isValid) {

    const request = $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
            name: name.val(),
            phone: phone.val(),
            comment: country.val(),
            to: to.val(),
        },
        error: data => {},
    });

    request.done((data) => {
        content.text(data.message);
        e.currentTarget.reset();
    });

    request.fail((data) => {
        const message = data.responseJSON.message;
        content.text(message);
        modal.addClass("error-modal");
    });

    request.always(() => {
        $.fancybox.open({
            src: "#modal",
            type: "inline",
        });
    })
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
    return form__block.checkValidity();
}

$(".app-close-btn").click((e) => {
    e.preventDefault();

    $.fancybox.close();
});

