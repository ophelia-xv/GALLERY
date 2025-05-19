const carousel = document.querySelector('.carousel');
const cubes = Array.from(carousel.children);
const btnLeft = document.querySelector('.nav-btn.left');
const btnRight = document.querySelector('.nav-btn.right');

let selectedIndex = 0;

function updateSelected(index) {
  cubes.forEach((cube, i) => {
    cube.classList.toggle('selected', i === index);
  });
  // Scroll carousel to center selected cube
  const cubeWidth = cubes[0].offsetWidth + parseInt(getComputedStyle(cubes[0]).marginRight);
  const scrollPos = cubeWidth * index - (carousel.offsetWidth / 2) + (cubeWidth / 2);
  carousel.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}

btnLeft.addEventListener('click', () => {
  selectedIndex = (selectedIndex - 1 + cubes.length) % cubes.length;
  updateSelected(selectedIndex);
});

btnRight.addEventListener('click', () => {
  selectedIndex = (selectedIndex + 1) % cubes.length;
  updateSelected(selectedIndex);
});

cubes.forEach((cube, i) => {
  cube.addEventListener('click', () => {
    selectedIndex = i;
    updateSelected(selectedIndex);
  });
});

// Initialize
updateSelected(selectedIndex);
