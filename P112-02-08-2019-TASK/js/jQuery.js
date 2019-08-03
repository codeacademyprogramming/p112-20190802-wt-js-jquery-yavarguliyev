
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

/* Header of the title */

$('.welcome').append($('<header class = "jumbotron my-4 button-action"></header>'));
$('.jumbotron').append($('<h1 class="display-3">A Warm Welcome!</h1>'));
$('.my-4').append($('<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>'));
$('.button-action').append($('<a href="#" class="btn btn-primary btn-lg">Call to action!</a>'));

/* Image cards */

$('.welcome').append($('<div>', {class:  'row text-center', id: 'img1'}));

$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card01'}));
$('#card01').append($('<div>', {class:  'card h-100', id: 'card-21'}));
$('#card-21').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card-21').append($('<div>', {class:  'card-body', id: 'title11'}));
$('#title11').append($('<h4 class="card-title">Card title</h4>'));
$('#title11').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>'));
$('#card-21').append($('<div>', {class:  'card-footer button-1'}));
$('.button-1').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));


$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card'}));
$('#card').append($('<div>', {class:  'card h-100', id: 'card-1'}));
$('#card-1').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card-1').append($('<div>', {class:  'card-body', id: 'title'}));
$('#title').append($('<h4 class="card-title">Card title</h4>'));
$('#title').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>'));
$('#card-1').append($('<div>', {class:  'card-footer button-2'}));
$('.button-2').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));

$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card1'}));
$('#card1').append($('<div>', {class:  'card h-100', id: 'card2'}));
$('#card2').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card2').append($('<div>', {class:  'card-body', id: 'title1'}));
$('#title1').append($('<h4 class="card-title">Card title</h4>'));
$('#title1').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>'));
$('#card2').append($('<div>', {class:  'card-footer button-3'}));
$('.button-3').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));

$('#img1').append($('<div>', {class:  'col-lg-3 col-md-6 mb-4', id: 'card12'}));
$('#card12').append($('<div>', {class:  'card h-100', id: 'card21'}));
$('#card21').append($('<img>', {class:  'card-img-top', src: 'https://cdn.pixabay.com/photo/2019/07/03/16/38/light-bulb-4314993_1280.jpg'}));
$('#card21').append($('<div>', {class:  'card-body', id: 'title12'}));
$('#title12').append($('<h4 class="card-title">Card title</h4>'));
$('#title12').append($('<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>'));
$('#card21').append($('<div>', {class:  'card-footer button-4'}));
$('.button-4 ').append($('<a href="#" class="btn btn-primary">Find Out More!</a>'));

/* Footer */

$('body').append($('<footer>', {class:  'py-5 bg-dark'}));
$('footer').append($('<div>', {class:  'container', id: 'ttt'}));
$('#ttt').append($('<p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>'));
