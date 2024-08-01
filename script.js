// scripts.js
window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var introSection = document.getElementById('intro');
    var aboutOffset = aboutSection.offsetTop;

    if (window.pageYOffset > aboutOffset - window.innerHeight / 2) {
        introSection.classList.add('fade-transition');
    } else {
        introSection.classList.remove('fade-transition');
    }
});
