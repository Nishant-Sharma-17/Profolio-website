import {FastAverageColor} from './node_modules/fast-average-color/dist/index.js'

// Add smooth scrolling behavior to navigation links

document.querySelectorAll('.sections-link').forEach((link) => {

    link.addEventListener('click',function (event){

        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID

        // console.log(targetId);

        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior:'smooth',block:'start',inline:'start'});
    });
});
window.addEventListener('load',function(){
    const fac=new FastAverageColor();
    document.querySelectorAll('.skills .skill-button').forEach((button)=>{
        const element =button.querySelector('img');
       if(element){
        const color =fac.getColor(element).rgb;
        // console.log(color.rgb);
        button.style.boxShadow=`0px 3px 7px ${color}`
    }
    else
    {
    button.style.boxShadow=`0px 3px 7px antiquewhite`
       }
        // console.log(button);
        // console.log(element)
        // console.log(fac.getColor(element));
        // button.style.boxShadow=' 0px 3px 7px blue'
    });
    
    // const color=fac.getColor(document.querySelector('.my-image'));
    // console.log(color.rgb);
    // console.log(fac.getColor(document.querySelector('.my-image')).rgb);
    // const sidebarDiv=document.querySelector('.sidebar-div');
    // console.log(sidebarDiv);
    // sidebarDiv.style.backgroundColor=color.rgb;
});