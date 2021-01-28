
//<ПОДКЛЮЧЕНИЕ КЛАСС IBG>====================================================================================================
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();
//<ПОДКЛЮЧЕНИЕ МЕНЮ БУРГЕР>====================================================================================================
document.querySelector('.header__burger').addEventListener('click', () => {
 document.querySelector('.header__burger').classList.toggle('active')
 document.querySelector('.header__menu').classList.toggle('active')
 document.body.classList.toggle('lock')
})

//<ПОДКЛЮЧЕНИЕ МЕНЮ БУРГЕР>====================================================================================================
document.querySelector('.actions__human-icon').addEventListener('click', () => {
 document.querySelector('.actions__human-icon').classList.toggle('active')
 document.querySelector('.actions__choice').classList.toggle('active')
 document.body.classList.toggle('lock')
})


new Swiper ('.main-slider',{
	loop: true,
	speed: 800,
	autoHeight: true,
	navigation:{
		nextEl: '.navigation__right',
		prevEl: '.navigation__left'
	},
	autoplay:{
		delay: 6000,
	},
})


new Swiper ('.lots-slider',{
	loop: true,
	slidesPerView: 3,
	spacebetween: 90,
	navigation:{
		nextEl: '.right-arr',
		prevEl: '.left-arr'
	},
	breakpoints:{
		320: {
			slidesPerView: 1,
			spacebetween: 0,
		},
		700: {
			slidesPerView: 3,
			spacebetween: 10,
		},
		769: {
			slidesPerView: 3,
			spacebetween: 10,
		}
	}
})



const quoteSlider = new Swiper ('.quotes__slider-container',{
	loop: true,
	autoplay:{
		delay: 2000,
	},
	speed: 1000,

})

document.querySelector('.decor__refresh-btn').addEventListener('click', () => {
	quoteSlider.slideTo(1)
})