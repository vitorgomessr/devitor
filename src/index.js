let isFirstScroll = true

const areaHome = document.getElementById("home")
const areaSobre = document.getElementById("areaSobre")
const areaProjetos = document.getElementById("projetos")
const areaTechs = document.getElementById("techs")
const areaContato = document.getElementById("footer")

const navHome = document.getElementById("navHome")
const navSobre = document.getElementById("navSobre")
const navProjetos = document.getElementById("navProjetos")

const botoesSobre = document.getElementsByClassName("botaoSobre")
const areaBotoes = document.getElementById("areaBotoes")
const textos = document.getElementsByClassName("textos")

const arrayBotoes = Array.from(botoesSobre)
const arrayTextos = Array.from(textos)

const cards = document.getElementById("cards")

const tituloSobre = document.getElementById("tituloSobre")
const tituloProjetos = document.getElementById("tituloProjetos")

const setaSobre = document.getElementById("setaTudoSobre")

function showScreensFirstTime(){
    if (this.scrollY > areaSobre.offsetTop / 4) {
        tituloSobre.classList.add("slide-in-blurred-left-2")
        areaBotoes.classList.add("slide-in-blurred-left")
        setaSobre.classList.add("slide-in-blurred-top-2")
        areaSobre.classList.remove("opacity-0")
    }
    if (this.scrollY > areaProjetos.offsetTop / 2) {
        tituloProjetos.classList.add("slide-in-blurred-left")
        cards.classList.remove("visually-hidden")
        areaProjetos.classList.remove("opacity-0")
    }
    if (this.scrollY > areaProjetos.offsetTop / 2) {
        areaTechs.classList.remove("opacity-0")
    }
    if (this.scrollY > areaProjetos.offsetTop / 2) {
        areaContato.classList.remove("opacity-0")
    }
}

function showNavbarScrolling(){
    if (this.scrollY <= areaSobre.offsetTop / 2) {
        navSobre.classList.remove("active")
        navHome.classList.add("active")
    }
    if (this.scrollY > areaSobre.offsetTop / 2 && this.scrollY < areaProjetos.offsetTop / 2 + areaProjetos.offsetTop / 4) {
        navHome.classList.remove("active")
        navProjetos.classList.remove("active")
        navSobre.classList.add("active")
    }
    if (this.scrollY > areaProjetos.offsetTop / 2 + areaProjetos.offsetTop / 4) {
        navSobre.classList.remove("active")
        navProjetos.classList.add("active")
        if(isFirstScroll){
            window.removeEventListener("scroll", showScreensFirstTime)
        }
    }
}

const firstScrooling = window.addEventListener("scroll", showScreensFirstTime)
const navbarSelected = window.addEventListener("scroll", showNavbarScrolling)

function mostraTextoCerto(){    
    arrayTextos.forEach((el)=>{
        if(!el.classList.contains("visually-hidden")){
            el.classList.add("visually-hidden")
        }
    })

    for(i=0; i<arrayBotoes.length; i++){
        if(arrayBotoes[i].classList.contains("active")){
            arrayTextos[i].classList.remove("visually-hidden")
            arrayTextos[i+3].classList.remove("visually-hidden")
        }
    }
}

function botaoClick(target){
    arrayBotoes.forEach((el)=>{
        
        if(el.classList.contains("active")){
            el.classList.remove("active")
        }
    })
    this.classList.add("active")

    return mostraTextoCerto()
}

arrayBotoes.forEach((el) => {
    el.addEventListener("click", botaoClick)
})
