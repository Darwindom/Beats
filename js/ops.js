const section = $("section");
const display = $(".maincontent");



const performTransition = sectionEq => {
    const position = sectionEq * -100;

    display.css({
        transform: `translateY(${position}%)`
    });

    section.eq(sectionEq).addClass("active").siblings().removeClass("active");
};

const scrollViewport = direction =>{
    console.log(direction)
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

    if (tagName !== "input" && tagName !== "textarea") {
        switch (e.keyCode) {
            case 38: //prev
            scrollViewport("prev");
            break;

            case 40: //next
            scrollViewport("next");
            break;
        }
    }
});

$("[data-scroll-to").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());

});

// SIDE MENU

