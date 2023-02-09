let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

// fromTo(控制對象,Duration,控制對象原始狀態,控制對象動畫結束狀態,設定提早開始)
time_line
    .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
    .fromTo(slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
    animation.style.pointerEvents = "none";
}, 2500);
