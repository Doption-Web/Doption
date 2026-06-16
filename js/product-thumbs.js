document.querySelectorAll('.product-card').forEach(card => {
  const mainImg = card.querySelector('.main-img');
  card.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.src = thumb.src;
    });
  });
});