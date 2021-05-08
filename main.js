const tl = gsap.timeline({ defaults: { ease: "power1.out"}});


tl.to(".text", { y: "0%", duration: 1, stagger: 0.60}); 
tl.to(".slider",{ y: "-100%", duration: 1.8, delay: 0.3});
tl.to(".intro", {y: "-100%", duration: 1.2}, "=-1")



tl.fromTo(".logo", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".menu-link", {opacity: 0}, {opacity: 1, duration: 1}, "=-1");
tl.fromTo(".banner", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".productos-main", {opacity: 0}, {opacity: 1, duration: 1});

