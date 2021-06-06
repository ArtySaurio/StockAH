function welcome_animation() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    //Cogemos el .text, clase perteneciente a los textos de la intro
    //de warren buffet
    tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});
    //Movimiento del slider que movera a la pantalla negra
    tl.to('.slider', {y: "-100%", duration: 1, delay: 1.2});
    //Movemos la pantalla negra y l;e ponemos que se mueva 1 segundo antes con -=
    tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
    tl.fromTo();
}

if (sessionStorage.getItem('doNotShow') == null) {
    sessionStorage.setItem('doNotShow', true);
    welcome_animation();
    
} else {
    $('.intro').hide()
    
}