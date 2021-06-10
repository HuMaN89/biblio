console.log('file 1');


if (document.title === 'Костанайская районная библиотека | Главная' ){
  
  const slides = document.querySelectorAll(".mySlide");
  const dots = document.querySelectorAll(".dot");


  let slideIndex = 1;
  showSlides(slideIndex);

  let prev = document.querySelector('.prev');
  prev.addEventListener('click', () => {
    
    if(slideIndex == 1){
      slideIndex = slides.length
    showSlides(slideIndex);
    }else {
    showSlides(slideIndex -= 1);
  }
  })


  let next = document.querySelector('.next');
  next.addEventListener('click', () => {
    
  if(slideIndex == slides.length) {
    slideIndex = 0; 
  }
    showSlides(slideIndex += 1);
  })


  document.querySelectorAll('.dot').forEach(dot => dot.addEventListener('click', function(e) {
    e.preventDefault()
    showSlides(slideIndex = parseInt(this.dataset.id))
  }));


  function showSlides(index) {
    
    let i = 0;
    index= parseInt(index)

    for(i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++){
      dots[i].classList.remove('active') ;
    }
    slides[index-1].style.display = 'block';
    dots[index-1].classList.add('active');
  }


  setInterval(() => {
    
    if(slideIndex == slides.length) {
    slideIndex = 0; 
  }
    showSlides(slideIndex += 1);
  }, 4000);

  let slideshow = document.querySelector('.slideshow');
}
console.log(document.title);

//  скрытие онлайн мероприятий
if (document.title === 'Онлайн мероприятия | Костанайская районная библиотека' ){
let may = document.querySelector('#onlineMay');
let febray = document.querySelector('#onlineFebray');
let mart = document.querySelector('#onlineMart');
may.addEventListener('click', () => {
  may.nextElementSibling.style.height != 'auto' ? may.nextElementSibling.style.height = 'auto' : may.nextElementSibling.style.height = '0';
})
mart.addEventListener('click', () => {
  mart.nextElementSibling.style.height != 'auto' ? mart.nextElementSibling.style.height = 'auto' : mart.nextElementSibling.style.height = '0';
})
febray.addEventListener('click', () => {
  febray.nextElementSibling.style.height != 'auto' ? febray.nextElementSibling.style.height = 'auto' : febray.nextElementSibling.style.height = '0';
})
}
