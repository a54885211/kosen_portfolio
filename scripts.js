document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content-section');
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
