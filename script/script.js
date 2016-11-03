// Filter button

var button = document.querySelector('#button');
var content = document.querySelector('#content');

content.classList.add('hidden');

button.addEventListener("click", function () {

    content.classList.toggle('hidden');

});

// Toevoegen leeslijst

// bron: http://stackoverflow.com/questions/22119673/find-the-closest-ancestor-element-that-has-a-specific-class

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
    //net zo lang door parents omhoog gaat tot het een parent vind met de meegegeven class
}

//regel eronder, selecteert alle elemeneten met .leeslijst-actie en stopt in array
var leeslijstbutton = document.querySelectorAll('.leeslijst-actie');

//regel eronder is loop 
for (i = 0; i < leeslijstbutton.length; i++) {
    
    //voor elke element voegt die click functie toe, leeslijstbutton is button van leeslijst
    leeslijstbutton[i].addEventListener("click", function(){
        
    //findAncestor vind dichtsbijzijnde parent met class verhaalblokje
    var verhaalblokje = findAncestor(this, 'verhaalblokje');
        
    //Het gevonden verhaalblokje krijgt class animation
    verhaalblokje.classList.add('animation');
});
}