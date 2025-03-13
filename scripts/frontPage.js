import { FastAverageColor } from './node_modules/fast-average-color/dist/index.js'
import { skillsArray } from './skills.js'
// Add smooth scrolling behavior to navigation links

document.querySelectorAll('.sections-link').forEach((link) => {

    link.addEventListener('click', function (event) {

        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID

        // console.log(targetId);

        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    });
});
function generateSkillButton(){
    let allSkills=``;
    skillsArray.forEach((skill)=>{
        allSkills+=`<button class="skill-button"><img class="${skill.name}"src="${skill.image}"><p class="skill-text">${skill.name.toUpperCase()}</p></button>`
    });
    document.querySelector('.skills').innerHTML=allSkills;
}
 window.addEventListener('load', function () {
    const fac = new FastAverageColor();
    function generateShadows(fac) {
        document.querySelectorAll('.skills .skill-button img').forEach((image) => {
            const defaultColor = 'rgba(211, 211, 211 ,0.5)'; // Light gray fallback
            image.addEventListener('load', () => {
                try {
                    const color = fac.getColor(image).rgb || defaultColor;
                    image.parentElement.style.boxShadow = `0px 3px 7px ${color}`;
                } catch {
                    image.parentElement.style.boxShadow = `0px 3px 7px ${defaultColor}`;
                }
            });
            image.addEventListener('error',()=>{
                image.parentElement.style.boxShadow=`0px 3px 7px ${defaultColor}`
            });
        });
    }
    
    generateSkillButton();
    generateShadows(fac);
});
