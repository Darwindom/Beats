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

const isValid = true;

if (isValid) {

    const request = $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
            name: name.val(),
            phone: phone.val(),
            country: country.val(),
            city: city.val(),
            street: street.val(),
            apartment: apartment.val(),
            zip: zip.val(),
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

$(".app-close-btn").click((e) => {
    e.preventDefault();

    $.fancybox.close();
});

