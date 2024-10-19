let slideIndex = 0;
showSlides(slideIndex);

// Automatically change slides every 2 seconds
setInterval(() => {
  plusSlides(1); // Move to the next slide
}, 2000); // 2000 milliseconds = 2 seconds

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to show the slides based on the current index
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  
  // If the current index exceeds the number of slides, reset it to 0
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // If the index is less than 0, go to the last slide
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}
