//JS code for the fixed and scroll effect of the background image of the home section
const navbarEl = document.querySelector(".navbar");
const topContainerEl = document.querySelector(".top-container");

const topContainerParent = topContainerEl.closest("section")


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
    topContainerEl.style.backgroundSize = `${160 - window.scrollY / 12}%`;
    
}

//Scroll control on navigations
document.querySelectorAll("[data-href]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.href);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (target) {

      const scrollPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  });
});

//Harmburger menu for smaller devices
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById('navbar-toggle');
  var navbarMenu = document.querySelector('ul');

  navbarToggle.addEventListener('click', function () {
    if (window.innerWidth < 768) { 
      navbarMenu.classList.toggle('hidden');
    }
  });

  var navbarItems = document.querySelectorAll('ul button');

  navbarItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.innerWidth < 768) { 
        navbarMenu.classList.add('hidden'); 
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      navbarMenu.classList.remove('hidden');
    } else {
      navbarMenu.classList.add('hidden');
    }
  });
});



// JS Code for the auto-text animation in the home section
const containerEl = document.querySelector(".auto-text");

const careers = ["Aspiring Software Developer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
     I am ${careers[careerIndex].slice(0, 1) === "A" ? "an" : "a"} ${careers[
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
  setTimeout(updateText, 500);
}


//JS Code for the progress bar animation in skills section

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skills");
  const skills = document.querySelectorAll(".skill");
  let animationTriggered = false; 

  function startSkillAnimation() {
    skills.forEach((skill) => {
      const percent = parseInt(skill.dataset.percent);
      const skillBar = skill.querySelector(".skill-bar");
      let width = 0;

      let int = setInterval(() => {
        if (width >= percent) {
          clearInterval(int);
        } else {
          width += 5;
          skillBar.style.width = width + "%";
          skillBar.innerText = width + "%";
        }
      }, 100);
    });
  }

  // Set up the Intersection Observer to detect when the skills section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && !animationTriggered) {
        animationTriggered = true;

        setTimeout(() => {
          startSkillAnimation();
        }, 500); 
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(skillsSection);
});


//Handling the slider for the projects section
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let scrollAmount = 0;

  nextButton.addEventListener("click", () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth; 
    const pageWidth = slider.clientWidth; 

    if (scrollAmount < maxScroll) {
      scrollAmount = Math.min(scrollAmount + pageWidth, maxScroll); 
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
  });

  prevButton.addEventListener("click", () => {
    const pageWidth = slider.clientWidth; 

    if (scrollAmount > 0) {
      scrollAmount = Math.max(scrollAmount - pageWidth, 0); 
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
  });
});

