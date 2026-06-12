window.addEventListener('scroll', () => {
    const header = document.getElementById('header')

    if (window.scrollY > 50) { 
        header.classList.add('active_header');
    } else {
    header.classList.remove('active_header');
    }
});