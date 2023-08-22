const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y:'-10',
        opacity:0,
        duration:1,
        ease:Expo.InOut
    })
    .to(".boundingelement",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
    
}
var timeout;

function circleflat(){
    var xscale  = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale,yscale);
        timout = setTimeout(function(){
        document.querySelector("#mycircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1, 1)`;

        },100);
    })
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mycircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}





circleMouseFollower();
firstPageAnimation();
circleflat();


document.querySelectorAll(".element").forEach(function(element){
    var rotate = 0;
    var diffrotate = 0;

    element.addEventListener("mousemove",function(details){
        var diff = details.clientY - element.getBoundingClientRect().top;
        diffrotate = details.clientX - rotate;
        rotate = details.clientX;
       
       
        gsap.to(element.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top: diff,
            left:details.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrotate * 0.5)
        })
    })

    element.addEventListener("mouseleave",function(details){
        gsap.to(element.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
        })
    })
    
     

})

