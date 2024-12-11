document.addEventListener('DOMContentLoaded', function () {
    const home = document.getElementById('home');
    const portfolio = document.getElementById('portfolio');
    const contactus = document.getElementById('contactus');

    home.addEventListener('click', function () {
        console.log('Home Clicked');
        location.href = 'index.html';
    });

    portfolio.addEventListener('click', function () {
        console.log('Portfolio Clicked');
        location.href = 'portfolio.html';
    });

    contactus.addEventListener('click', function () {
        console.log('Contact Us Clicked');
        location.href = 'contactus.html';
    });
});

