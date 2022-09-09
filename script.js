'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// cookie
const body = document.body
const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = ' <p>  We Use Cookie !</p> <button class="btn btn--close-cookie "> OK </button>'
body.append(message);
const btnCloseCookie = document.querySelector('.btn--close-cookie')
btnCloseCookie.addEventListener('click', function () {
    message.remove();
})

// scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')
const s1coords = section1.getBoundingClientRect();

btnScrollTo.addEventListener('click', function () {

    //old-school
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    section1.scrollIntoView({behavior: 'smooth'})
})
// nav scroll
// document.querySelectorAll('.nav__link').forEach( function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault()
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     })
// })

//event delegation
// 1. add listener to common parent
// 2. determine what element
document.querySelector('.nav__links').addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault()
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
})

//random color
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}) , rgb(${randomInt(0, 255)}) , rgb(${randomInt(0, 255)})`

//tabs

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', (e) => {

    const clicked = e.target.closest('.operations__tab');
    //Guard clause
    if (!clicked) return;

    //remove classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c=>c.classList.remove('operations__content--active'))

    //activate classes
    clicked.classList.add('operations__tab--active');
    console.log(clicked.dataset.tab);

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})