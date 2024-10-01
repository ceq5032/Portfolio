/* Added hover effect on the header to animate it */
const headerTitle = document.querySelector('header h1');
if (headerTitle) {
  headerTitle.addEventListener('mouseover', () => {
    headerTitle.style.transform = 'scale(1.1)';
  });

  headerTitle.addEventListener('mouseout', () => {
    headerTitle.style.transform = 'scale(1)';
  });
}

/* Gallery Scrolling */
let currentIndex = 0;
const slides = document.querySelectorAll('.photo');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; /* Loop back to the first slide */
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; /* Loop back to the last slide */
}

/* Initial display */
showSlide(currentIndex);

/* Set up event listeners for buttons */
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

/* Image hover zoom effect for the gallery */
const photos = document.querySelectorAll('.photo img');
photos.forEach(photo => {
  photo.addEventListener('mouseover', () => {
    photo.style.transform = 'scale(1.05)';
  });

  photo.addEventListener('mouseout', () => {
    photo.style.transform = 'scale(1)';
  });
});

/* Function to add hover effect to elements */
function addHoverEffect(element) {
  if (element) {
    element.addEventListener('mouseover', () => {
      element.style.transform = 'scale(1.05)';
    });

    element.addEventListener('mouseout', () => {
      element.style.transform = 'scale(1)';
    });
  }
}

/* Add hover effect to header and photos */
addHoverEffect(headerTitle);
photos.forEach(photo => addHoverEffect(photo));
