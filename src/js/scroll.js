export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");
    var dist
    if (window.matchMedia('(max-width: 600px), (max-height: 700px)').matches){
        dist = 0.1} else {dist = 0.15}

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

        if(document.querySelector('.home .right').getBoundingClientRect().bottom - (window.innerHeight * dist) < 0 ) {
            document.querySelector('.home .button').getElementsByTagName('button')[0].classList.add('btn-top')
        }
        else {document.querySelector('.home .button').getElementsByTagName('button')[0].classList.remove('btn-top')}
    }
    
    window.addEventListener('scroll', animaScroll);
    window.addEventListener('load', animaScroll);
}
