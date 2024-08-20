/* Event Delegation */

const carouselNavEl = document.querySelector(".carousel nav");

const carouselSliderEl = document.querySelector(".carousel .slider")

carouselNavEl.addEventListener("click", handleCarouselBtnClick);

function handleCarouselBtnClick(e){
    const targetBtn = e.target;
    const btnIndex = targetBtn.dataset.index;

    const moveX = Number(btnIndex) * -100;

    console.log(moveX)

    carouselSliderEl.style.marginLeft = moveX + "%"
}


const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleBtnClick);

function handleBtnClick(e) {
    const target = e.target
    const currentlyActiveBtn = document.querySelector("nav button.active");

    if (currentlyActiveBtn) {
        currentlyActiveBtn.classList.remove("active");
    }

    target.classList.add("active");
}