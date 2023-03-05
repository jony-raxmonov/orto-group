let modal_window = $('.modal_window')

function open_modal(i){
    $('#modal').fadeIn();
    modal_window.fadeOut(1);
    $(modal_window[i]).fadeIn();
    $('body').toggleClass('lock')
};
function close_modal(){
    $('#modal').fadeOut();
	$('body').toggleClass('lock')
};


document.addEventListener('DOMContentLoaded', () => {

	let mySwiper = new Swiper('.slider-block', {
		slidesPerView: 1,
	})

	const maxItems = 5;
	const sliderNavItems = document.querySelectorAll('.slider-nav__item');
	const sliderNav = document.querySelector('.slider-nav');

	sliderNavItems.forEach((el, index) => {
		el.setAttribute('data-index', index);

		el.addEventListener('click', (e) => {
			const index = parseInt(e.currentTarget.dataset.index);
			console.log(index)
			mySwiper.slideTo(index);
		});
	});

	//const showMore = () => {
//		let childenLength = sliderNav.children.length;
//		console.log(childenLength)
//		if (childenLength > maxItems) {
//			sliderNav.insertAdjacentHTML('beforeend', `
//				<div class="btn-center">
//					<button class="modal-open">Еще ${childenLength - maxItems}</button>
//				</div>
//			`);
//			document.querySelectorAll(`.slider-nav__item:nth-child(n+${maxItems + 1})`).forEach(el => {el.style.display = 'none';});
//		}
//
//		const modalOpen = document.querySelector('.modal-open');
//		modalOpen.addEventListener('click', () => {new GraphModal().open('one');});
//	};
//
//	showMore();
//
})


window.onscroll = function ShowNavbar(){
	let navbar = document.querySelector(".navigation__bar")
	if(window.pageYOffset >10){
		navbar.classList.add('nav-bar')
	}else{
		navbar.classList.remove('nav-bar')
	}
  }