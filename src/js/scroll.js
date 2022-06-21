export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");

    function animaScroll() {
        sections.forEach((section) => {
            const halfSection = window.innerHeight * 0.5;
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop - halfSection < 0) {
                section.querySelector('.section').classList.add('animation')
                section.querySelector('.scroll').classList.add('fadeout')
            } else {
                section.querySelector('.section').classList.remove('animation')
                section.querySelector('.scroll').classList.remove('fadeout')
            }
        })

        if(document.querySelector('.home .right').getBoundingClientRect().bottom - (window.innerHeight * 0.15) < 0 ) {
            document.querySelector('.button').classList.add('btn-top')
        }
        else {document.querySelector('.button').classList.remove('btn-top')}
    }
    
    window.addEventListener('scroll', animaScroll);
    window.addEventListener('load', animaScroll);
}
