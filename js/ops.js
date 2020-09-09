const section = $("section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");
const menuItems = sideMenu.find('.fixed-menu__item');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false; 
// Sections.first().addClass("active");



const performTransition = sectionEq => {
    const position = sectionEq * -100;
    inScroll = true;
    display.css({
        transform: `translateY(${position}%)`,
    });

    section.eq(sectionEq).addClass("active").siblings().removeClass("active");

    
    setTimeout(() => {
        inScroll = false;

        sideMenu
        .find(".fixed-menu__item")
        .eq(sectionEq)
        .addClass("fixed-menu__item--active")
        .siblings()
        .removeClass("fixed-menu__item--active");
    }, 1300);
};

const scrollViewport = direction => {
    if (inScroll) return;

    const activeSection = section.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    console.log("wheeeel")

    if (deltaY > 0) {
        scrollViewport("next") 
    }
    if(deltaY < 0) {
        scrollViewport("prev") 
    }

    
});

// MENU NAVIGATION

$(window).on("keydown", (e) => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textArea";

    if (userTypingInInputs) return; 

        switch (e.keyCode) {
            case 38: //prev
            scrollViewport("prev");
            break;

            case 40: //next
            scrollViewport("next");
            break;
        
    }
});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());

});

if (isMobile) {
    $("body").swipe({
        swipe: function (event, direction) {
            if (direction === "up") scrollViewport('next')
            if (direction === "down") scrollViewport('prev')

        },
    });

}


// SIDE MENU


