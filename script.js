var moreText = document.getElementById("more-text");
var btnText = document.getElementById("see-more-btn");

// See more in paragraph
btnText.addEventListener("click", function () {
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "See less...";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "See more...";
    }
});

/*change the buttons color when clicked*/
function toggleButton(btn) {
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function (button) {
        button.classList.remove('active'); // Remove 'active' class from all buttons
    });
    btn.classList.add('active'); // Add 'active' class to the clicked button
}

// Change the color for links in list item in navigation bar 
function changeColor(element) {
    // Get all anchor elements in the navigation
    var links = document.querySelectorAll('nav ul li a');
    // Loop through all links and remove the 'active' class
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    // Add the 'active' class to the clicked link
    element.classList.add('active');
}