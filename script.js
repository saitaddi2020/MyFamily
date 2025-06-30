const scrollContainer = document.querySelector(".members-wrapper");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

const memberWidth = 180; // Width of each member including margin
const visibleMembers = 4; // Number of visible members at a time
const scrollAmount = memberWidth * visibleMembers; // Scroll width

function scrollLeft() {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function scrollRight() {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

// Disable/Enable Buttons Based on Scroll Position
function checkScrollButtons() {
    setTimeout(() => {
        if (scrollContainer.scrollLeft <= 0) {
            leftBtn.style.display = "none"; // Hide left button at the start
        } else {
            leftBtn.style.display = "block";
        }

        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            rightBtn.style.display = "none"; // Hide right button at the end
        } else {
            rightBtn.style.display = "block";
        }
    }, 300); // Small delay to ensure smooth detection
}

// Event Listeners
scrollContainer.addEventListener("scroll", checkScrollButtons);
document.addEventListener("DOMContentLoaded", checkScrollButtons);
