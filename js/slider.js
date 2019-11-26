const sliderImg1 = document.querySelector('.slider.img1');
const sliderImg2 = document.querySelector('.slider.img2');
const sliderText = document.querySelector('.slider-text');
const sliderH1 = document.querySelector('.slider-text h1');
const sliderH2 = document.querySelector('.slider-text h2');

let i = 1;
let j = 2;

// IMGAGES CHANGE

const slider1 = () => {
    if (window.innerWidth <= 768) {
        sliderImg1.style.backgroundImage = `url(img/slider${i}-768.jpg)`;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1366) {
        sliderImg1.style.backgroundImage = `url(img/slider${i}-1366.jpg)`;
    } else {
        sliderImg1.style.backgroundImage = `url(img/slider${i}-1920.jpg)`;
    }
}

const slider2 = () => {
    if (window.innerWidth <= 768) {
        sliderImg2.style.backgroundImage = `url(img/slider${j}-768.jpg)`;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1366) {
        sliderImg2.style.backgroundImage = `url(img/slider${j}-1366.jpg)`;
    } else {
        sliderImg2.style.backgroundImage = `url(img/slider${j}-1920.jpg)`;
    }
}

// CONTENT CHANGE

const text1 = () => {
    sliderH1.textContent = 'Kwiaciarnia "Calineczka"';
    sliderH2.textContent = 'Starannie dobrane kompozycje na każdą okazję';
    sliderText.style = '';
    sliderH1.style = '';
    sliderH2.style = '';
}

const text2 = () => {
    sliderH1.textContent = 'Służymy poradą w sprawie doboru kompozycji';
    sliderH2.textContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam';
    sliderText.style.backgroundColor = '#F2F2F2';
    sliderText.style.padding = '15px 30px';
    sliderText.style.textAlign = 'left';
    sliderH1.style.fontSize = '28px';
    sliderH1.style.color = 'black';
    sliderH1.style.padding = '15px 0';
    sliderH1.style.textShadow = 'none';
    sliderH1.style.borderBottom = 'solid .5px #656565';
    sliderH2.style.color = '#656565';
    sliderH2.style.fontSize = '20px';
    sliderH2.style.fontStyle = 'italic';
    sliderH2.style.padding = '15px 0';
    sliderH2.style.margin = '0';
    if (window.innerWidth <= 768) {
        sliderText.style.width = '';
        sliderText.style.left = '';
        sliderText.style.top = '';
        sliderText.style.transform = '';
    } else if (window.innerWidth > 768) {
        sliderText.style.width = '400px';
        sliderText.style.left = '15%';
        sliderText.style.top = '150px';
        sliderText.style.transform = 'none';
    }
}

const text3 = () => {
    sliderH1.textContent = 'Posiadamy specjalną ofertę na okoliczności ślubne i weselne';
    sliderH2.textContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam';
    sliderText.style.textAlign = 'right';
    if (window.innerWidth <= 768) {
        sliderText.style.width = '';
        sliderText.style.left = '';
        sliderText.style.top = '';
        sliderText.style.transform = '';
    } else if (window.innerWidth > 768) {
        sliderText.style.width = '450px';
        sliderText.style.left = '85%';
        sliderText.style.top = '125px';
        sliderText.style.transform = 'translateX(-100%)';
    }
}

// ITERATIONS COUNTER

window.setInterval(() => {
    i++;
    j++;
    if (i == 4) i = 1;
    if (j == 4) j = 1;
}, 5000)

const contentChanger = () => {
    slider1();
    if (i == 1) {
        text1();
    } else if (i == 2) {
        text2();
    } else if (i == 3) {
        text3();
    }
}

// CHANGING FUNCTIONS

window.setTimeout(() => {
    slider2();
    window.setInterval(slider2, 5000);
}, 2500)

window.setInterval(contentChanger, 5000)
window.onresize = () => contentChanger();
