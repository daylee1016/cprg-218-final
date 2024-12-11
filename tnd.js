document.addEventListener('DOMContentLoaded', function() {
    const home = document.getElementById('home');
    const portfolio = document.getElementById('portfolio');
    const contactus = document.getElementById('contactus');
    
    home.addEventListener('click',function(){
        console.log('Home Clicked');
        
    });

    portfolio.addEventListener('click',function(){
        console.log('Portfolio Clicked');
        
    });

    contactus.addEventListener('click',function (){
        console.log('Contact Us Clicked');

    });

});