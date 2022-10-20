let activado = false;
let Movalor = 1;

function mostrarP1() {
    let proyecto1 = document.getElementById("proyectoCompleto1");

    if (activado == false) {
        activado = true;
    } else {
        activado = false;
    }

    if (activado == true) {
        proyecto1.style.visibility = 'visible';
        proyecto1.style.display = 'inline-block';
    } else {
        proyecto1.style.visibility = 'hidden';
        proyecto1.style.display = 'none';
    }
}

function mover(flecha) {
    let proyecto1 = document.getElementById("proyectoCompleto1");
    let primerVideo = document.getElementById('VideoAirlines');
    let flechaDerAir = document.querySelector(".flechaDer");
    let flechaIzqAir = document.querySelector(".flechaIzq");

    let video = document.createElement('video');
    video.id = 'VideoAirlines';
    video.src = 'Airlines/VideoMatiasAirlines.mp4';
    video.controls = true;

    let img = document.createElement('img');
    img.id = "IMGAirlines";

    let rempIMG = document.getElementById("IMGAirlines");

    if (flecha === "Der") {
        if (Movalor < 9 && Movalor >= 1) {
            Movalor++;
        } else {
            Movalor = 1;
        }

        if (Movalor == 1) {
            proyecto1.replaceChild(video, rempIMG);
        } else if (Movalor == 2) {
            img.src = 'Airlines/MatiasAirlinesIMG1.png';
            proyecto1.replaceChild(img, primerVideo);
        } else if (Movalor == 3) {
            rempIMG.src = 'Airlines/MatiasAirlinesIMG2.png';
        } else if (Movalor == 4) {
            rempIMG.src = 'Airlines/AirlinesC1.png';
        } else if (Movalor == 5) {
            rempIMG.src = 'Airlines/AirlinesC2.png';
        } else if (Movalor == 6) {
            rempIMG.src = 'Airlines/AirlinesC3.png';
        } else if (Movalor == 7) {
            rempIMG.src = 'Airlines/AirlinesC4.png';
        } else if (Movalor == 8) {
            rempIMG.src = 'Airlines/AirlinesC5.png';
        }
    } else if (flecha === "Izq") {
        if (Movalor <= 8 && Movalor > 1) {
            Movalor--;
        } else {
            Movalor = 8;
        }

        if (Movalor == 1) {
            proyecto1.replaceChild(video, rempIMG);
        } else if (Movalor == 2) {
            rempIMG.src = 'Airlines/MatiasAirlinesIMG1.png';
        } else if (Movalor == 3) {
            rempIMG.src = 'Airlines/MatiasAirlinesIMG2.png';
        } else if (Movalor == 4) {
            rempIMG.src = 'Airlines/AirlinesC1.png';
        } else if (Movalor == 5) {
            rempIMG.src = 'Airlines/AirlinesC2.png';
        } else if (Movalor == 6) {
            rempIMG.src = 'Airlines/AirlinesC3.png';
        } else if (Movalor == 7) {
            rempIMG.src = 'Airlines/AirlinesC4.png';
        } else if (Movalor == 8) {
            proyecto1.replaceChild(img, primerVideo);
            img.src = 'Airlines/AirlinesC5.png';
        }
    }
}