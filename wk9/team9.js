/* Week 9 Team Activity*/
'use strict';
let aCounter = 10;
let sCounter = 10;
let dCounter = 10;
let fCounter = 10;
let gCounter = 10;
let hCounter = 10;
let jCounter = 10;
let kCounter = 10;
let lCounter = 10;
function playAudio(audioElem, counter) {
    console.log("counter: "+counter);
    audioElem[1].currentTime = 0;
    audioElem[1].play();
    audioElem[0].classList.add("playing");
    audioElem[0].style.transform = `translateY(${counter}px)`;
    counter+=10;
    setTimeout(() => {audioElem[0].classList.remove("playing");}, 1000);
    if(counter >= 100) counter = 0;
    return counter;
}
function testInput(keyPressed) {
    console.log(`pressed ${keyPressed}`);
    let audioElem;
    switch (keyPressed)
    {
        case 'a':
            audioElem = document.querySelectorAll("[data-key='65']");
            aCounter = playAudio(audioElem, aCounter);
            break;
        case 's':
            audioElem = document.querySelectorAll("[data-key='83']");
            sCounter = playAudio(audioElem, sCounter);
            break;
        case 'd':
            audioElem = document.querySelectorAll("[data-key='68']");
            dCounter = playAudio(audioElem, dCounter);
            break;
        case 'f':
            audioElem = document.querySelectorAll("[data-key='70']");
            fCounter = playAudio(audioElem, fCounter);
            break;
        case 'g':
            audioElem = document.querySelectorAll("[data-key='71']");
            gCounter = playAudio(audioElem, gCounter);
            break;
        case 'h':
            audioElem = document.querySelectorAll("[data-key='72']");
            hCounter = playAudio(audioElem, hCounter);
            break;
        case 'j':
            audioElem = document.querySelectorAll("[data-key='74']");
            jCounter = playAudio(audioElem, jCounter);
            break;
        case 'k':
            audioElem = document.querySelectorAll("[data-key='75']");
            kCounter = playAudio(audioElem, kCounter);
            break;
        case 'l':
            audioElem = document.querySelectorAll("[data-key='76']");
            lCounter = playAudio(audioElem, lCounter);
            break;
    }
}
addEventListener('keypress', (event) => testInput(event.key))