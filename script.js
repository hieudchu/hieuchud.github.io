function navigateToPage(pageNumber) {
    switch(pageNumber) {
        case 1: 
            window.location.href = 'page1.html';
            break;
        case 2: 
            window.location.href = 'pageBank.html';
            break;
        case 3:
            window.location.href = 'index.html';
            break;
        default:
            window.location.href = 'index.html';
    }
}

function addClickAnimation(box) {
    box.classList.add('onClickAnimation'); // Add the onClick animation class

    setTimeout(function () {
        box.classList.remove('onClickAnimation'); // Remove the animation class
    }, 1000); // Adjust the time (in milliseconds) to match the duration of your onClick animation
}
