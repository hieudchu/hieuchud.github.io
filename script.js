function navigateToPage(pageNumber) {
    if (pageNumber === 1) {
        window.location.href = 'page1.html';
    } else if (pageNumber === 2) {
        window.location.href = 'page2.html';
    }
}


function addClickAnimation(box) {
    box.classList.add('onClickAnimation'); // Add the onClick animation class

    setTimeout(function () {
        box.classList.remove('onClickAnimation'); // Remove the animation class
    }, 1000); // Adjust the time (in milliseconds) to match the duration of your onClick animation
}
