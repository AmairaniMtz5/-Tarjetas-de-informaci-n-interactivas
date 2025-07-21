const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    cards.forEach(c => c.classList.remove('active'));
    container.classList.remove('active');

    if (!isActive) {
      card.classList.add('active');
      container.classList.add('active');
    }
  });
});
