const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Initialize GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Function to scroll to the bottom of the page
const scrollToBottom = () => {
  gsap.to(window, { 
    scrollTo: { y: "max" }, 
    duration: 2, 
    ease: "power2.inOut" 
  });
};

// Add event listener to the scroll down button
document.querySelector('.scroll-down').addEventListener('click', scrollToBottom);


// .................................................hero-page animation........................................
var tl = gsap.timeline({scrollTrigger:{
    trigger: "#hero-page",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    markers:false,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-div-2",{
    marginTop: "5%"
},'a')
tl.to("#row-div-3",{
    marginTop: "-2%"
},'a')
tl.to("#row-div-4",{
    marginTop: "-8%"
},'a')
tl.to("#row-div-5",{
    marginTop: "-10%"
},'a')
tl.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000eb",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')

// .................................................home-page animation........................................
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#home-page",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    markers:false,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"10% 50%",
        end: "100% 70%",
        markers: false,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.2,
    width:"100%",
})

// .................................................Intro-page animation........................................

let tli = gsap.timeline({
    scrollTrigger:{
        trigger: "#intro-page",
        start:"20% 50%",
        end: "100% 80%",
        markers: false,
        scrub: 1,
    },
});
tli.to('.desc',{
    marginTop:0,
    opacity:'1',
    duration:2,
},'ip')
tli.to('#intro',{
    marginTop:0,
    opacity:'1',
    duration:3,
    delay:1
},'ip')
tli.to('.year p',{
    marginTop:'0%',
    duration:5,
    delay:4
},'ip')

let tle = gsap.timeline({
    scrollTrigger:{
        trigger: "#experience-page",
        start:"0% 50%",
        end: "100% 50%",
        markers: false,
        scrub: 1,
    },
});
tle.to('.exp-1',{
    marginLeft:'0%',
    opacity:'1',
    duration:1.5
},'cc')
tle.to('.exp-2',{
    marginRight:'0%',
    opacity:'1',
    duration:1.5
},'cc')

// Media query check for smaller screens (max-width: 767px)
if (window.innerWidth <= 767) {
    let tl4SmallScreens = gsap.timeline({
        scrollTrigger: {
            trigger: "#service-page",
            start: "50% 50%",
            end: "200% 50%",
            pin: true,
            scrub: 1,
        },
    });

    tl4SmallScreens.to(".c-one", {
        marginTop: "-10vh",
        opacity: "1",
    }, 'sct-1')
    .to(".c-two", {
        opacity: "1",
    }, 'sct-2')
    .to(".c-one", {
        marginTop: "-40vh",
        opacity: "0",
    }, 'sct-2')
    .to(".c-three", {
        opacity: "1",
    }, 'sct-3')
    .to(".c-two", {
        opacity: "0",
    }, 'sct-3')
    .to(".c-one", {
        marginTop: "-80vh",
    }, 'sct-3')
    .to(".c-four", {
        opacity: "1",
    }, 'sct-4')
    .to(".c-three", {
        opacity: "0",
    }, 'sct-4')
    .to(".c-one", {
        marginTop: "-160vh",
    }, 'sct-4')
    .to(".c-four", {
        opacity: "1",
    }, 'sct-5')
    .to(".cir-part-4", {
        marginLeft: "100%",
        rotate: 360,
        opacity:0.1
    }, 'sct-5');
} 
else{

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#service-page",
        start:"50% 50%",
        end: "250% 50%",
        scrub: 1,
        pin: true,
        markers: false,
    },  
});
tl4.to(".c-one",{
    marginTop: "-25%",
    opacity:"1",
}, 'sct-1')

tl4.to(".c-two",{
    opacity:"1",
}, 'sct-2')

tl4.to(".c-one",{
    marginTop: "-100",
    opacity:"0",
}, 'sct-2')

tl4.to(".c-three",{
    opacity:"1",
}, 'sct-3')

tl4.to(".c-two",{
    opacity:"0",
}, 'sct-3')

tl4.to(".c-one",{
    marginTop:"-180%",
}, 'sct-3')

tl4.to(".c-four",{
    opacity:"1",
}, 'sct-4')

tl4.to(".c-three",{
    opacity:"0",
}, 'sct-4')

tl4.to(".c-one",{
    marginTop:"-250%",
}, 'sct-4')

tl4.to(".c-four",{
    opacity:"0",
}, 'sct-5')

tl4.to(".cir-part-4",{
    marginLeft:"100%",
    rotate: 360,
}, 'sct-5')

}


//..........................................Featured Work.....
let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: "#featured-work",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },  
});

tl7.to(".my-work-txt-div",{
    height:"60vh",
}, 'height')
tl7.to(".my-work-txt",{
    height:"60vh",
}, 'height')
tl7.to("#my",{
    left:"0%",
}, 'height')
tl7.to("#work",{
    right:"0%",
}, 'height')
tl7.to(".scroll-img",{
    marginTop:"-300%",
})
tl7.to("#demo",{
    bottom:"7%",
})



const menuBtn = document.getElementById('menu');
const sideMenuBar = document.getElementById('side-menu-bar');
const menuBar = document.getElementById('menu-bar');
const closeMenu = document.getElementById('side-cross');

menuBtn.addEventListener('click', () => {
    sideMenuBar.classList.remove('side-menu-inactive');
    sideMenuBar.classList.add('side-menu-active');
    menuBar.classList.remove('menu-container-inactive');
    menuBar.classList.add('menu-container-active');
});

closeMenu.addEventListener('click', () => {
    menuBar.classList.remove('menu-container-active');
    menuBar.classList.add('menu-container-inactive');
    
    sideMenuBar.classList.add('side-menu-inactive');
    setTimeout(() => {
        sideMenuBar.classList.remove('side-menu-active');
    }, 300); // Match this duration with the transition duration
});
