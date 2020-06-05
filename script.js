var num = 0; //variabile che tiene traccia della categoria precedente scelta dall'utente (utile per le animazioni)
//funzione imputata a mostrare/nascondere la lista dei prodotti
function showimages(n) { 
    //array degli elementi HTML che hanno classe "images".
    var images = document.getElementsByClassName("images");
    //array degli input radio
    var radios = document.getElementsByTagName("input");
    //ciclo "for" che nasconde tutte le liste dei prodotti
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    //display settato a "grid" per rendere visibile la categoria scelta dall'utente
    images[n].style.display = "grid";
    //applicare effetti di dissolvenza in entrata (fade in) e in uscita (fade out) alle liste
    images[num].classList.remove("fadeiin");
    images[num].classList.add("fadeoout");
    images[n].classList.add("fadeiin");
    images[n].classList.remove("fadeoout");
    num = n;
}