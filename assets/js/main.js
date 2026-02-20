    document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
        });
    }
    });

    document.querySelectorAll('img').forEach(function (img) {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function () {
                img.classList.add('loaded');
            });
            img.addEventListener('error', function () {
                img.classList.add('loaded');
            });
        }

    var overlay = document.getElementById('div');
    overlay.classList.add('img-lightbox-overlay');
    var overlayImage = document.createElement('img');
    overlayImage.classList.add('img-lightbox-image');
    overlay.appendChild(overlayImage);
    document.body.appendChild(overlay);

    document.querySelectorAll('.project-card .card-image').forEach(function (img) {

    img.addEventListener('click', function () {
            overlayImage.src = img.src;
            overlayImage.alt = img.alt;
            overlay.classList.add('active');    
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });
});
