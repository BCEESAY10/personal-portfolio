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
