document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('mouseover', () => {
    block.style.animation = 'none';
    block.offsetHeight;
    block.style.animation = '';
  });
});