console.log("works");

//const per img con array
const imgCarousel = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

//selezionare le img che sono dentro il carousel con una const/let

const activeImg = 3;
const carousel = document.querySelector('.carousel_img')
console.log(imgCarousel, activeImg, carousel);

//cicliamo (loop)

for (let i = 0; i < imgCarousel.length; i++) {
    const elementCarousel = imgCarousel[i];
    console.log(elementCarousel);

    const markupCarousel = `<img class="${i === activeImg ? 'active' : ''}" src="assets/img/${elementCarousel}" ></img>`
    console.log(markupCarousel);
}