const sliderImg1 = document.querySelector('.slider.img1');
const sliderImg2 = document.querySelector('.slider.img2');
const sliderText = document.querySelector('.slider-text');
const sliderH1 = document.querySelector('.slider-text h1');
const sliderH2 = document.querySelector('.slider-text h2');
let i = 1;
let j = 2;

// IMGAGES CHANGE

const sliderPhotoFront = () => {
    if (window.innerWidth <= 768) {
        sliderImg1.style.backgroundImage = `url(img/slider${i}-768.jpg)`;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1366) {
        sliderImg1.style.backgroundImage = `url(img/slider${i}-1366.jpg)`;
    } else {
        sliderImg1.style.backgroundImage = `url(img/slider${i}-1920.jpg)`;
    }
}

const sliderPhotoBack = () => {
    if (window.innerWidth <= 768) {
        sliderImg2.style.backgroundImage = `url(img/slider${j}-768.jpg)`;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1366) {
        sliderImg2.style.backgroundImage = `url(img/slider${j}-1366.jpg)`;
    } else {
        sliderImg2.style.backgroundImage = `url(img/slider${j}-1920.jpg)`;
    }
}

// CONTENT CHANGE

const text1TimeOrResize = () => {
    sliderH1.textContent = 'Kwiaciarnia "Calineczka"';
    sliderH2.textContent = 'Starannie dobrane kompozycje na każdą okazję';
    sliderText.style = '';
    sliderH1.style = '';
    sliderH2.style = '';
}

const text2TimeOnly = () => {
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
    sliderH2.style.margin = '0px';
    sliderH2.style.maxWidth = '100%';
}

const text2TimeOrResize = () => {
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

const text3TimeOnly = () => {
    sliderH1.textContent = 'Posiadamy specjalną ofertę na okoliczności ślubne i weselne';
    sliderH2.textContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam';
    sliderText.style.textAlign = 'right';
}

const text3TimeOrResize = () => {
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

// CHANGING FUNCTIONS

window.setInterval(() => {
    i++;
    j++;
    if (i == 4) i = 1;
    if (j == 4) j = 1;
}, 10000)

const timeContentChanger = () => {
    sliderPhotoFront();
    if (i == 1) {
        text1TimeOrResize();
    } else if (i == 2) {
        text2TimeOnly();
        text2TimeOrResize();
    } else if (i == 3) {
        text3TimeOnly();
        text3TimeOrResize();
    }
}

const sizeContentChanger = () => {
    sliderPhotoFront();
    if (i == 1) {
        text1TimeOrResize();
    } else if (i == 2) {
        text2TimeOrResize();
    } else if (i == 3) {
        text3TimeOrResize();
    }
}

window.setInterval(timeContentChanger, 10000)
window.setTimeout(() => {
    sliderPhotoBack();
    window.setInterval(sliderPhotoBack, 10000);
}, 7000)

window.onresize = () => sizeContentChanger();
