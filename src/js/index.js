let bubbles = document.querySelectorAll('.bubble');
let content = document.querySelector('.content');
let bId = 0;
bubbles = Array.from(bubbles);

const images = [
    {src: "./img/nano-1.jpeg", alt: "Nano-1"},
    {src: "./img/nano-2.jpeg", alt: "Nano-2"},
    {src: "./img/nano-3.jpeg", alt: "Nano-3"}
]

const contents = images.map(({src, alt}, i) => {
    return `<div class='content-${i + 1}'>
        <img src=${src} alt=${alt}>
    </div>
    `
});

for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('click', () => {
        bubble(i);
    });
}

window.addEventListener('load', () => {
    setInterval(()=> {
        bId++;
        if (bId >= bubbles.length) {
            bId = 0;
        }
        bubble(bId);
    }, 4000);
});

function bubble(bi) {
    content.classList.add("opacity");
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].classList.remove('active');
    }
    bubbles[bi].classList.add("active");
    // bi++;
    if (bi >= bubbles.length) {
        bi = 0;
    }
    setTimeout(() => {
        content.innerHTML = contents[bi];
        content.classList.remove("opacity");
    }, 300);
}

function scrollApear() {
    const element = document.querySelector('.main-content__body');
    const elPosition = element.getBoundingClientRect().top;
    const ulPosition = Array.from(document.querySelectorAll('.features ul li'));
    const winPosition = window.innerHeight /1.3;
    ulPosition.forEach(e => {
        if (e.getBoundingClientRect().top < winPosition) {
            e.classList.add('appear');
        }
    });
    
    if (elPosition < winPosition) {
        element.classList.add('appear');
    }
}

setTimeout(() => {
    document.querySelector(".frame").style.display = 'none';
}, 3000);

window.addEventListener('scroll', scrollApear);