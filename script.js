/* Valeurs Boutton */

let buttonelement = document.querySelector("#buttonelement");
let avoirladoc = document.querySelector("#coolstory");
let deleteeverything = document.querySelector("#toutretirer");

/* On nous écoute*/
buttonelement.addEventListener("click", clicksurlebouton);

/* Valeurs texte && Creation */

let conteneur = document.querySelector("#LaBoite");
let paragraphe = document.createElement("div");
conteneur.appendChild(paragraphe);

/* La Fonctions */

function clicksurlebouton() {

    // pour le check dans la console
    console.log("click");
    console.log(avoirladoc.value);

    // creation de liste
    let list = document.createElement("p");
    list.innerText = avoirladoc.value;
    list.className= "texte";
    paragraphe.appendChild(list);
   
    // bouton "jl'ai déjà fait !"
    let jrajoute = document.createElement("button");
    jrajoute.innerText = "Fait !";
    jrajoute.className = "btn btn-outline-secondary";
    list.appendChild(jrajoute);

    // le bouton suppression
    let supprimer = document.createElement("button");
    supprimer.innerText = "Supprimer";
    supprimer.className = "btn btn-outline-secondary";
    list.appendChild(supprimer);

    //fonction rayer
    jrajoute.addEventListener("click", function () {
        list.style.textDecoration = "line-through";
        jrajoute.remove();
    });

    // fonction listening dans la fonction suppression de ligne
    supprimer.addEventListener("click", function () {
        list.remove();
    });

    // clear input
    avoirladoc.value = "";
}







