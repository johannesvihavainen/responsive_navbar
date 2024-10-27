var button = document.querySelector('.hamburger-btn');
var counter = 0;
button.addEventListener('click', function () {


    if (counter === 0) {
        counter++;
        createLinks();
    }
    else if (counter === 1) {
        counter = 2;
        hideLinks();
    }
    else if (counter === 2) {
        counter = 1;
        showLinks();
    }
});

// var imageLogo = document.querySelector('.hamburger-logo');
// imageLogo.addEventListener('mouseover', function () {
//     button.style = "transform: rotate(180deg);"
//     button.style = "transition-delay: 0;"
//     button.style = "transition: all 0.6s;"
// });

function hideLinks() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style = "display: none";
}
function showLinks() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style = "display: block";
}

function createLinks() {
    var links = [
        {
            link: '<a href="">Home</a>'
        },
        {
            link: '<a href="">About</a>'
        },
        {
            link: '<a href="">Projects</a>'
        },
        {
            link: '<a href="">Contact</a>'
        }
    ]

    const dropdown = document.querySelector('.dropdown');

    const newDiv = document.createElement('div');
    newDiv.classList.add('nav-links');
    dropdown.appendChild(newDiv);

    const ul = document.createElement('ul');
    newDiv.appendChild(ul);



    for (var i = 0; i < links.length; i++) {
        const liLinks = document.createElement('li');
        liLinks.innerHTML = links[i]["link"];
        ul.appendChild(liLinks);
    }
}


