let Nactivado = false;
let Norvalor = 1;

function mostrarP3() {
    let proyecto3 = document.getElementById("proyectoCompleto3");

    if (Nactivado == false) {
        Nactivado = true;
    } else {
        Nactivado = false;
    }

    if (Nactivado == true) {
        proyecto3.style.visibility = 'visible';
        proyecto3.style.display = 'inline-block';
    } else {
        proyecto3.style.visibility = 'hidden';
        proyecto3.style.display = 'none';
    }
}

function moverNorex(flecha) {
    let proyecto3 = document.getElementById("proyectoCompleto3");
    let primerVideo = document.getElementById('VideoNorex');
    let flechaDerAir = document.querySelector(".flechaDer");
    let flechaIzqAir = document.querySelector(".flechaIzq");

    let video = document.createElement('video');
    video.id = 'VideoNorex';
    video.src = 'Norex/VideoNorex.mp4';
    video.controls = true;

    let img = document.createElement('img');
    img.id = "IMGNorex";

    let rempIMG = document.getElementById("IMGNorex");

    if (flecha === "Der") {
        if (Norvalor < 8 && Norvalor >= 1) {
            Norvalor++;
        } else {
            Norvalor = 1;
        }

        if (Norvalor == 1) {
            proyecto3.replaceChild(video, rempIMG);
        } else if (Norvalor == 2) {
            img.src = 'Norex/NorexIMG1.png';
            proyecto3.replaceChild(img, primerVideo);
        } else if (Norvalor == 3) {
            rempIMG.src = 'Norex/NorexIMG2.png';
        } else if (Norvalor == 4) {
            rempIMG.src = 'Norex/NorexC1.png';
        } else if (Norvalor == 5) {
            rempIMG.src = 'Norex/NorexC2.png';
        } else if (Norvalor == 6) {
            rempIMG.src = 'Norex/NorexC3.png';
        } else if (Norvalor == 7) {
            rempIMG.src = 'Norex/NorexC4.png';
        }
    } else if (flecha === "Izq") {
        if (Norvalor <= 7 && Norvalor > 1) {
            Norvalor--;
        } else {
            Norvalor = 7;
        }

        if (Norvalor == 1) {
            proyecto3.replaceChild(video, rempIMG);
        } else if (Norvalor == 2) {
            rempIMG.src = 'Norex/NorexIMG1.png';
        } else if (Norvalor == 3) {
            rempIMG.src = 'Norex/NorexIMG2.png';
        } else if (Norvalor == 4) {
            rempIMG.src = 'Norex/NorexC1.png';
        } else if (Norvalor == 5) {
            rempIMG.src = 'Norex/NorexC2.png';
        } else if (Norvalor == 6) {
            rempIMG.src = 'Norex/NorexC3.png';
        } else if (Norvalor == 7) {
            proyecto3.replaceChild(img, primerVideo);
            img.src = 'Norex/NorexC4.png';
        }
    }
}