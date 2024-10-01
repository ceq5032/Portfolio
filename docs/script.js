document.addEventListener('DOMContentLoaded', function() {
  
  /* Header Hover Effect */
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
      slide.classList.remove('active');
    });
    slides[index].classList.add('active'); 
  }

  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex); 
  }

  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    showSlide(currentIndex); 
  }

  
  showSlide(currentIndex);

  
  document.getElementById('nextButton').addEventListener('click', nextSlide);
  document.getElementById('prevButton').addEventListener('click', prevSlide);

  /* Image Hover Zoom Effect for the Gallery */
  const photos = document.querySelectorAll('.photo img'); 
  photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
      photo.style.transform = 'scale(1.05)'; 
    });

    photo.addEventListener('mouseout', () => {
      photo.style.transform = 'scale(1)'; 
    });
  });

  /* Function to Add Hover Effect to Specific Elements */
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

 
  addHoverEffect(headerTitle);
  photos.forEach(photo => addHoverEffect(photo));
});
