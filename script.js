const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){

            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const observerTop = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){

            entry.target.classList.add('top-anime');
        } else{
            entry.target.classList.remove('top-anime');
        }
    });
});

const observerBot = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){

            entry.target.classList.add('bottom-anime');
        } else{
            entry.target.classList.remove('bottom-anime');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const topHidden = document.querySelectorAll('.top-hid');
const botHidden = document.querySelectorAll('.bot-hid');

topHidden.forEach((e) => observerTop.observe(e));
botHidden.forEach((e) => observerBot.observe(e));
hiddenElements.forEach((el) => observer.observe(el));
