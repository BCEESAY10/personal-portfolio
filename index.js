//JS code for the fixed and scroll effect of the background image of the home section
const navbarEl = document.querySelector(".navbar");
const topContainerEl = document.querySelector(".top-container");

const bottomContainer = document.querySelector(".bottom-container");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > bottomContainer.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    } else{
        navbarEl.classList.remove("active");
    }
});

window.addEventListener("scroll", ()=>{
    updateImage()
});

function updateImage(){
    topContainerEl.style.opacity = 1 - window.scrollY / 900;
    topContainerEl.style.backgroundSize = 160 - window.scrollY/12 + "%";
}

//Harmburger menu for smaller devices
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById('navbar-toggle');
  var navbarMenu = document.querySelector('ul');

  navbarToggle.addEventListener('click', function () {
  navbarMenu.style.display = (navbarMenu.style.display === 'flex') ? 'none' : 'flex';
  });

  // Close the menu when a menu item is clicked
  var navbarItems = document.querySelectorAll('ul a');

  navbarItems.forEach(function (item) {
      item.addEventListener('click', function () {
          navbarMenu.style.display = 'none';
      });
  });
});


// JS Code for the auto-text animation in the home section
const containerEl = document.querySelector(".auto-text");

const careers = ["Graphic Designer", "Web Developer", "Science Teacher", "Maths Teacher"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
     I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}

//JS Code for the Project section
const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});

//JS Code for the progress bar animation in skills section

