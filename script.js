document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;
  
    function showSlide(index) {
      const translateValue = -index * 100 + "%";
      slider.style.transform = "translateX(" + translateValue + ")";
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showSlide(currentIndex);
    }
  
    // Auto-switch slides every 5 seconds
    setInterval(nextSlide, 2000);
  });


  let techCopy = document.querySelector(".techslide").cloneNode(true)
  document.querySelector(".techContainer").appendChild(techCopy)

  let marketingCopy = document.querySelector(".marketing-slide").cloneNode(true)
  document.querySelector(".marketingContainer").appendChild(marketingCopy)