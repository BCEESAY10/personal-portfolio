//JS code for the fixed and scroll effect of the background image of the home section
const navbarEl = document.querySelector(".navbar");
const topContainerEl = document.querySelector(".top-container");

const topContainerParent = topContainerEl.closest("section")


const bottomContainer = document.querySelector(".bottom-container");

//Scroll control on navigations
document.querySelectorAll("[data-href]").forEach(button=>{
  button.addEventListener("click", ()=>{
    const target = document.getElementById(button.dataset.href)
    if (target){
      target.scrollIntoView({block:{}})
    }
  })
})

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
    console.log("Position", topContainerParent.getBoundingClientRect());
    
    console.log("Opacity", (1 - window.scrollY / 900),);
    console.log("BgSize", 160 - window.scrollY/12 + "%");
    
    
}

//Harmburger menu for smaller devices
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById('navbar-toggle');
  var navbarMenu = document.querySelector('ul');

  // Toggle the menu for small screens
  navbarToggle.addEventListener('click', function () {
    if (window.innerWidth < 768) { 
      navbarMenu.style.display = (navbarMenu.style.display === 'flex') ? 'none' : 'flex';
    }
  });

  // Close the menu when a menu item is clicked (only for small screens)
  var navbarItems = document.querySelectorAll('ul a');

  navbarItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.innerWidth < 768) { 
        navbarMenu.style.display = 'none';
      }
    });
  });

  // Ensure menu is always visible for larger screens
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      navbarMenu.style.display = 'flex';
    } else {
      navbarMenu.style.display = 'none';
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



//Script for Graphics section
const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl?.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl?.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  if (imageContainerEl)
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

