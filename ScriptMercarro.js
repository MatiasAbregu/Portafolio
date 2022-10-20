let Mactivado = false;
let Merovalor = 1;

function mostrarP2() {
    let proyecto2 = document.getElementById("proyectoCompleto2");

    if (Mactivado == false) {
        Mactivado = true;
    } else {
        Mactivado = false;
    }

    if (Mactivado == true) {
        proyecto2.style.visibility = 'visible';
        proyecto2.style.display = 'inline-block';
    } else {
        proyecto2.style.visibility = 'hidden';
        proyecto2.style.display = 'none';
    }
}

function moverMercarro(flecha) {
    let proyecto2 = document.getElementById("proyectoCompleto2");
    let primerVideo = document.getElementById('VideoMercarro');
    let flechaDerAir = document.querySelector(".flechaDer");
    let flechaIzqAir = document.querySelector(".flechaIzq");

    let video = document.createElement('video');
    video.id = 'VideoMercarro';
    video.src = 'Mercarro/VideoMercarro.mov';
    video.controls = true;

    let img = document.createElement('img');
    img.id = "IMGMercarro";

    let rempIMG = document.getElementById("IMGMercarro");

    if (flecha === "Der") {
        if (Merovalor < 9 && Merovalor >= 1) {
            Merovalor++;
        } else {
            Merovalor = 1;
        }

        if (Merovalor == 1) {
            proyecto2.replaceChild(video, rempIMG);
        } else if (Merovalor == 2) {
            img.src = 'Mercarro/MercarroIMG1.png';
            proyecto2.replaceChild(img, primerVideo);
        } else if (Merovalor == 3) {
            rempIMG.src = 'Mercarro/MercarroIMG2.png';
        } else if (Merovalor == 4) {
            rempIMG.src = 'Mercarro/MercarroC1.png';
        } else if (Merovalor == 5) {
            rempIMG.src = 'Mercarro/MercarroC2.png';
        } else if (Merovalor == 6) {
            rempIMG.src = 'Mercarro/MercarroC3.png';
        } else if (Merovalor == 7) {
            rempIMG.src = 'Mercarro/MercarroC4.png';
        } else if (Merovalor == 8) {
            rempIMG.src = 'Mercarro/MercarroC5.png';
        }
    } else if (flecha === "Izq") {
        if (Merovalor <= 8 && Merovalor > 1) {
            Merovalor--;
        } else {
            Merovalor = 8;
        }

        if (Merovalor == 1) {
            proyecto2.replaceChild(video, rempIMG);
        } else if (Merovalor == 2) {
            rempIMG.src = 'Mercarro/MercarroIMG1.png';
        } else if (Merovalor == 3) {
            rempIMG.src = 'Mercarro/MercarroIMG2.png';
        } else if (Merovalor == 4) {
            rempIMG.src = 'Mercarro/MercarroC1.png';
        } else if (Merovalor == 5) {
            rempIMG.src = 'Mercarro/MercarroC2.png';
        } else if (Merovalor == 6) {
            rempIMG.src = 'Mercarro/MercarroC3.png';
        } else if (Merovalor == 7) {
            rempIMG.src = 'Mercarro/MercarroC4.png';
        } else if (Merovalor == 8) {
            proyecto2.replaceChild(img, primerVideo);
            img.src = 'Mercarro/MercarroC5.png';
        }
    }
}