function nextSlide(button) {
    const slideshow = button.closest('.pc-slideshow');
    const images = slideshow.querySelectorAll('img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add('active');
}

function prevSlide(button) {
    const slideshow = button.closest('.pc-slideshow');
    const images = slideshow.querySelectorAll('img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    images[activeIndex].classList.add('active');
}
