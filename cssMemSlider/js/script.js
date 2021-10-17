let slides = Array.prototype.slice.call(document.querySelectorAll('.slider__item'));
Array.from(slides);
// var nodes = Array.prototype.slice.call( document.getElementById('list').children ),
let controls = document.querySelector('.slider__controls');
let controlsItems = document.querySelectorAll('.controls__item');
let desriptions = document.querySelectorAll('.item__description');
let isEnable = true;
function showSlide(e) {

	if (e.target.closest('.controls__item')) {

		if (isEnable) {
			isEnable = false
			// определение индексов элеменов
			let currentItem = document.querySelector('.active');
			let index = +e.target.dataset.index;
			let currentIndex = slides.indexOf(currentItem);

			// подсвечивание буллетов

			controlsItems.forEach((item) => {
				item.classList.remove('controls-active')
			});
			e.target.classList.add('controls-active');




			//анимация слайдов
			if (currentIndex < index) {
				// slides.reverse();
				slides[index].classList.add('active');
				slides[index].classList.add('to-left');
				slides[index].addEventListener('animationend', function () {

					slides.forEach((item) => {
						if (item !== e.target) {
							item.classList.remove('active');
						}
					})

					this.classList.add('active');
					this.classList.add('to-left');
					isEnable = true;

				});


			} if (currentIndex > index) {

				// slides.forEach(item => {
				// 	item.style.right = '100';
				// })
				slides[index].classList.add('active');
				slides[index].classList.add('to-left');
				slides[currentIndex].classList.add('to-left')
				slides[index].addEventListener('animationend', function () {
					slides.forEach((item) => {
						if (item !== e.target) {
							item.classList.remove('active');
						}
					})
					this.classList.add('active');
					this.classList.add('to-left');
					isEnable = true;

				});
			}



			//смена текста
			desriptions.forEach((item) => {
				if (item.classList.contains('description-active')) {
					item.classList.remove('description-active');
				}
			})
			desriptions[index].classList.add('description-active');


		}
	}

}


controls.addEventListener('click', showSlide)
