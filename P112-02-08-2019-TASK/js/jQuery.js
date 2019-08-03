
/* Header */

$('body').append($('<header>'));
$('header').append($('<nav>', {class: 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'}));
$('nav').append($('<div>', {class:  'container'}));
$('.container').append($('<a class = "navbar-brand" href = "#">Start Bootstrap</a>'));
$('.container').append($('<button>', {class:  'navbar-toggler', type: 'button'}));
$('.container').append($('<div>', {class:  'collapse navbar-collapse', id: 'navbarResponsive'}));
$('.collapse').append($('<ul>', {class:  'navbar-nav ml-auto'}));

$('.navbar-nav').append($('<li>', {class:  'nav-item active home'}));
$('.home').append($('<a class = "nav-link" href = "#">Home</a>'));
$('.home').append($('<span class="sr-only">(current)</span>'));

$('.navbar-nav').append($('<li>', {class:  'nav-item about'}));
$('.about').append($('<a class = "nav-link" href = "#">About</a>'));

$('.navbar-nav').append($('<li>', {class:  'nav-item services'}));
$('.services').append($('<a class = "nav-link" href = "#">Services</a>'));

$('.navbar-nav').append($('<li>', {class:  'nav-item contact'}));
$('.contact').append($('<a class = "nav-link" href = "#">Contact</a>'));

/* Main */

$('body').append($('<main>'));
$('main').append($('<section>'));
$('section').append($('<div>', {class:  'container welcome'}));

$('.welcome').append($('<header class = "jumbotron my-4 button-action"></header>'));
$('.jumbotron').append($('<h1 class="display-3">A Warm Welcome!</h1>'));
$('.my-4').append($('<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>'));
$('.button-action').append($('<a href="#" class="btn btn-primary btn-lg">Call to action!</a>'));

$('.welcome').append($('<div>', {class:  'row text-center', id: 'img1'}));

$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4'}));
$('.col-lg-3').append($('<div>', {class:  'card h-100 card-1'}));
$('.card-1').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('.card').append($('<div>', {class:  'card-body'}));
$('.card-body').append($('<h4 class="card-title">Card title</h4>'));
$('.card-body').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>'));
$('.col-lg-3').append($('<div>', {class:  'card-footer'}));
$('.card-footer').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));


$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card'}));
$('#card').append($('<div>', {class:  'card h-100', id: 'card-1'}));
$('#card-1').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card-1').append($('<div>', {class:  'card-body', id: 'title'}));
$('#title').append($('<h4 class="card-title">Card title</h4>'));
$('#title').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>'));
$('#card').append($('<div>', {class:  'card-footer'}));
$('#card').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));

$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card1'}));
$('#card1').append($('<div>', {class:  'card h-100', id: 'card2'}));
$('#card2').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card2').append($('<div>', {class:  'card-body', id: 'title1'}));
$('#title1').append($('<h4 class="card-title">Card title</h4>'));
$('#title1').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>'));
$('#card1').append($('<div>', {class:  'card-footer'}));
$('#card1').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));

$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card12'}));
$('#card12').append($('<div>', {class:  'card h-100', id: 'card21'}));
$('#card21').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card21').append($('<div>', {class:  'card-body', id: 'title12'}));
$('#title12').append($('<h4 class="card-title">Card title</h4>'));
$('#title12').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>'));
$('#card12').append($('<div>', {class:  'card-footer'}));
$('#card12  ').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));
