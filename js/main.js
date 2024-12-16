document.addEventListener('DOMContentLoaded', function () {
  const card = document.querySelector('.card');
  const audio = document.getElementById('card__audio');

  card.addEventListener('click', function () {
      audio.play();
  });
});