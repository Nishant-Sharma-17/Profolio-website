// Add smooth scrolling behavior to navigation links
document.querySelectorAll('.sections-link').forEach((link) => {
    link.addEventListener('click',function (event){
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        console.log(targetId)
        const targetElement = document.querySelector(targetId);
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior:'smooth',block:'start',inline:'start'});
    });
});
console.log('hello');
