const papyrusFor = document.getElementById("papyrus")
const undyneFor = document.getElementById("undyne")
const sansFor = document.getElementById("sans")
const noone1 = document.getElementById("noone1")
const noone2 = document.getElementById("noone2")
const noone3 = document.getElementById("noone3")
const foro1 = document.getElementById("foro-de-papyrus")
const papyrus = document.getElementById("papyrus-click")
const undyne = document.getElementById("undyne-click")
const sans = document.getElementById("sans-click")
function mostrarPapyrus() {
    papyrusFor.classList.add("novisible")
    undyneFor.classList.add("novisible")
    sansFor.classList.add("novisible")
    noone1.classList.add("novisible")
    noone2.classList.add("novisible")
    noone3.classList.add("novisible")
    foro1.classList.remove("novisible")
    foro1.classList.add("papyrus-styles")
}


papyrus.addEventListener("click", mostrarPapyrus)