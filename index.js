//JS code for the fixed and scroll effect of the background image of the home section
const navbarEl = document.querySelector(".navbar");
const topContainerEl = document.querySelector(".top-container");

const topContainerParent = topContainerEl.closest("section")


const bottomContainer = document.querySelector(".bottom-container");


document.querySelectorAll("[data-href]").forEach(button=>{
  button.addEventListener("click", ()=>{
    const target = document.getElementById(button.dataset.href)
    if (target){
      target.scroll({
        top:0,
        behavior:"smooth"
      })
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
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
      const percent = skill.dataset.percent;
      const skillBar = document.createElement("div");
      skillBar.classList.add("skill-bar");
      skillBar.style.width = "0"; // Start with zero width
      skillBar.innerText = "0%"; // Initial text

      const skillLabel = document.createElement("div");
      skillLabel.classList.add("skill-label");
      skillLabel.innerText = skill.dataset.skill;

      skill.appendChild(skillBar);
      skill.appendChild(skillLabel);

      // Trigger the animation by adding a class after a short delay
      setTimeout(() => {
          skillBar.style.width = percent + "%";
          skillBar.innerText = percent + "%";
      }, 100);
  });
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

prevEl.addEventListener("click", () => {
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
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

