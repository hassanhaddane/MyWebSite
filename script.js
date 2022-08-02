    window.addEventListener("scroll" ,function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
    window.scrollTo(0, 0);
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

