var button = document.querySelector('#button');
var content = document.querySelector('#content');

//    Als javascript niet beschikbaar is wordt de content dus NIET verborgen.
content.classList.add('hidden');

//    Wanneer er op de button geklikt wordt voeren we een functie uit.
button.addEventListener("click", function () {

    //        We schakelen de class .hidden
    content.classList.toggle('hidden');

});

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