let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.querySelectorAll(".progreso");

        habilidades.forEach((habilidad) => {
            let porcentaje = habilidad.getAttribute("data-porcentaje");
            habilidad.style.width = porcentaje + "%";
        });
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 

document.addEventListener('DOMContentLoaded', function () {
    let checks = document.querySelectorAll(".check, .check2"); // Selecciona ambos checkboxes
    checks.forEach(function(check) {
        check.addEventListener('click', idioma);
    });

    function idioma() {
        // Accede al checkbox que desencadenó el evento
        let id = this.checked;

        if (id == true) {
            if (window.location.pathname.includes("ingles.html")) {
                location.href = "../index.html";
            } else {
                location.href = "pages/ingles.html";
            }
        } else {
            if (window.location.pathname.includes("ingles.html")) {
                location.href = "index.html";
            } else {
                location.href = "../index.html";
            }
        }
    }
});


