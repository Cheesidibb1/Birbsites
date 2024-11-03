const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); // Use querySelectorAll
hiddenElements.forEach((el) => observer.observe(el)); // Iterate over the NodeList

const scrollDown = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) { // Adjust the scroll position value as needed
        document.querySelector('.sideslide').classList.add('show-sideslide');
    } else {
        document.querySelector('.sideslide').classList.remove('show-sideslide');
    }
};

window.addEventListener('scroll', scrollDown);