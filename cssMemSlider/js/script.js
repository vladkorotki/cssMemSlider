let slides = document.querySelectorAll('.slider__item');
let controls = document.querySelector('.slider__controls');

let controlsItems = document.querySelectorAll('.controls__item');
let desriptions = document.querySelectorAll('.item__description');

function showSlide(e) {
    if (e.target.closest('.controls__item')) {

        controlsItems.forEach((item) => {
            item.classList.remove('controls-active')
        });
        e.target.classList.add('controls-active');


        let index = +e.target.dataset.index;
        // slides[index].classList.add('to-left');
        // slides[index].classList.add('active');

        // slides[index].addEventListener('animationend', function () {
        //     slides.forEach(item => {
        //         if (item.classList.contains('check')) {
        //             item.classList.remove('active');
        //             // item.classList.remove('to-left');
        //             item.classList.remove('check')
        //         }
        //     })
        //     this.classList.add('check');
        //     this.classList.add('active');
        // });


        slides.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');


            }
        })

        slides[index].classList.add('active');




        desriptions.forEach((item) => {
            if (item.classList.contains('description-active')) {
                item.classList.remove('description-active');
            }
        })
        desriptions[index].classList.add('description-active');


    }
}


controls.addEventListener('click', showSlide)
