const perfiles = document.querySelector("#click")
function mensaje() {
    perfiles.classList.remove("centrado")
    perfiles.classList.add("novisible")
}

perfiles.addEventListener("click", mensaje)
