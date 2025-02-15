let navBar = document.querySelector(".headerS1")
let boite1 = document.querySelector(".boite1")
let boite2 = document.querySelector(".boite2")
let boite3 = document.querySelector(".boite3")
let boite4 = document.querySelector(".boite4")
let boite5 = document.querySelector(".boite5")
let boite6 = document.querySelector(".boite6")
let cube = document.querySelector(".cube")

document.addEventListener("scroll", ()=>{

    let valeur = window.scrollY
    if(valeur > 899){
        navBar.classList.add("toggleNavBar")
       
    }else{
        navBar.classList.remove("toggleNavBar")
    }
})




function ajouterDesBoites(valeur){
    valeur.addEventListener("mouseenter", ()=>{
        valeur.classList.add("boiteDesboites2")
    })
    valeur.addEventListener("mouseleave", ()=>{
       
        valeur.classList.remove("boiteDesboites2")
    })
}
ajouterDesBoites(boite1)
ajouterDesBoites(boite2)
ajouterDesBoites(boite3)
ajouterDesBoites(boite4)
ajouterDesBoites(boite5)
ajouterDesBoites(boite6)

// -----------------------------------------------------------------------------------------------

// PARTIE 5 IMAGE FLEX MOUSEOVER

let home1 = document.querySelector("#home1")
let home2 = document.querySelector("#home2")
let home3 = document.querySelector("#home3")
let home4 = document.querySelector("#home4")
let home5 = document.querySelector("#home5")
let hone6 = document.querySelector("#home6")
let boxDeplacant = document.querySelector("#boxDeplacant")


// ---------------------SCROLL-----------------------------------

let imageContenair = document.querySelector(".imageContenair")
let imageContenair1 = document.querySelector(".imageContenair1")
let imageContenair2 = document.querySelector(".imageContenair2")
let imageContenair3 = document.querySelector(".imageContenair3")
let imageContenair4 = document.querySelector(".imageContenair4")
let imageContenair5 = document.querySelector(".imageContenair5")

let overlay = document.querySelector(".overlay")
let overlay1 = document.querySelector(".overlay1")
let overlay2 = document.querySelector(".overlay2")
let overlay3 = document.querySelector(".overlay3")
let overlay4 = document.querySelector(".overlay4")
let overlay5 = document.querySelector(".overlay5")


function overlayAjout (conteneur, boite){
    conteneur.addEventListener("mouseover",()=>{
        boite.style.opacity = "1"
    })
    conteneur.addEventListener("mouseleave", ()=>{
        boite.style.opacity = "0"
    })
}

overlayAjout(imageContenair, overlay)
overlayAjout(imageContenair1, overlay1)
overlayAjout(imageContenair2, overlay2)
overlayAjout(imageContenair3, overlay3)
overlayAjout(imageContenair4, overlay4)
overlayAjout(imageContenair5, overlay5)

// SCROLLER LE BOXSERVICE----------------------------------------------------------------------------

let boxeService = document.querySelector(".boxeService")
let btnNext = document.getElementById("btnNext")
let btnPreview = document.getElementById("btnPreview")

btnNext.addEventListener("click", ()=>{
    boxeService.scrollLeft += 320
    
})
btnPreview.addEventListener("click", ()=>{
    boxeService.scrollLeft -= 320
})


  // Initialise la carte et centre-la sur une position (latitude, longitude)
  var map = L.map('map').setView([48.8566, 2.3522], 13); // Paris

  // Ajoute une couche de tuiles OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Ajoute un marqueur
  L.marker([48.8566, 2.3522]).addTo(map)
    .bindPopup('Hello Paris!')
    .openPopup();


// RENDRE LE BOUTTON MENU CLIQUABLE
let logoMenu = document.querySelector(".logoMenu")
let ul = document.querySelector(".liste")

logoMenu.addEventListener("click", ()=>{
    ul.classList.toggle("display")
})

document.addEventListener("scroll", ()=>{
    ul.classList.remove("display")
})


