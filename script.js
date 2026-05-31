// تغيير لون النافبار عند النزول

window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav');

    if(window.scrollY > 50){

        nav.style.background = '#071427';

    }else{

        nav.style.background = '#0b1f3a';

    }

});


// القائمة في الموبايل

const menuBtn = document.getElementById('menu-btn');

const menu = document.getElementById('menu');

menuBtn.onclick = () => {

    menu.classList.toggle('active');

};


// تأثير ظهور الكروت

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = '1';

            card.style.transform = 'translateY(0)';

        }

    });

});


// تجهيز أولي للكروت

cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform = 'translateY(50px)';

    card.style.transition = '.7s';

});