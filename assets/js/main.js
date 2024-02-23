console.log("works");

// const per img con array
const imgCarousel = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

// selezionare le img che sono dentro il carousel con una const/let

let activeImg = 3;
const carousel = document.querySelector('.carousel_img');
console.log(imgCarousel, activeImg, carousel);

// const per i button
const upButton = document.querySelector('.top_button');
const downButton = document.querySelector('.bottom_button');



// cicliamo (loop)

for (let i = 0; i < imgCarousel.length; i++) {
    const elementCarousel = imgCarousel[i];
    console.log(elementCarousel);
    // selezioniamo il markup e facciamo una condizione per che la classe sia assegnata 
    const markupCarousel = `<img class="${i === activeImg ? 'active' : ''}" src="${elementCarousel}" ></img>`;
    console.log(markupCarousel);

    carousel.insertAdjacentHTML('beforeend', markupCarousel);
}

console.log(upButton);
console.log(downButton);

// facciamo funzionare i button 
upButton.addEventListener('click', function () {
    console.log('up button');
    activeImg++
    console.log(activeImg);

    const currentImg = document.querySelector('.active');

    // Rimuovi la classe 'active' dall'immagine corrente
    currentImg.classList.remove('active');

    const allImg = document.querySelectorAll('.carousel_img img');
    
    allImg[activeImg].classList.add('active');
});

downButton.addEventListener('click', function () {
    console.log('down button');
    activeImg--
    console.log(activeImg);

    const currentImg = document.querySelector('.active');

    // Rimuovi la classe 'active' dall'immagine corrente
    currentImg.classList.remove('active');

    const allImg = document.querySelectorAll('.carousel_img img');
    
    allImg[activeImg].classList.add('active');
});