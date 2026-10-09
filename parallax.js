// Parallax Script powered by GSAP
gsap.registerPlugin(ScrollTrigger);

let speed = 100;
// Wait for SVG to load
window.addEventListener('load', () => {
    let height = document.querySelector("svg.parallax").getBBox().height;

    gsap.set("#h2-1", { opacity: 0 });
    gsap.set("#bg_grad", { attr: { cy: "-50" } });

    const mm = gsap.matchMedia();
    mm.add("(max-width: 1922px)", () => {
        gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
    });

    /* SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene1,
        trigger: ".scrollElement",
        start: "top top",
        end: "45% 100%",
        scrub: 3
    });

    scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
    scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
    scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
    scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
    scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
    scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
    scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudStart-L", { x: -300 }, 0);
    scene1.to("#cloudStart-R", { x: 300 }, 0);
    scene1.to("#info", { y: 8 * speed }, 0);

    /* Hero Mascot Floating Animation */
    gsap.to(".floating-mascot", {
        y: "20px",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"
    });

    /* Background Text Parallax */
    gsap.to(".hero-bg-text", {
        scrollTrigger: {
            trigger: ".hero-banner",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 100,
        opacity: 0
    });

    /* Bird */
    gsap.fromTo("#bird", { opacity: 1 }, {
        y: -250, x: 800, ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top", end: "60% 100%", scrub: 4,
            onEnter: () => gsap.to("#bird", { scaleX: 1, rotation: 0 }),
            onLeave: () => gsap.to("#bird", { scaleX: -1, rotation: -15 })
        }
    });

    /* Clouds */
    let clouds = gsap.timeline();
    ScrollTrigger.create({
        animation: clouds, trigger: ".scrollElement", start: "top top", end: "70% 100%", scrub: 1
    });
    clouds.to("#cloud1", { x: 500 }, 0);
    clouds.to("#cloud2", { x: 1000 }, 0);
    clouds.to("#cloud3", { x: -1000 }, 0);
    clouds.to("#cloud4", { x: -700, y: 25 }, 0);

    /* Sun Animation */
    let sun = gsap.timeline();
    ScrollTrigger.create({
        animation: sun, trigger: ".scrollElement", start: "1% top", end: "35% 100%", scrub: 2
    });
    sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
    sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
    sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
    sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
    sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
    sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#ab04e8" } }, 0);

    /* SCENE 2 */
    let scene2 = gsap.timeline();
    ScrollTrigger.create({ animation: scene2, trigger: ".scrollElement", start: "15% top", end: "40% 100%", scrub: 3 });
    scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
    scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
    scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
    scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
    scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
    scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

    /* Bats */
    gsap.set("#bats", { transformOrigin: "50% 50%" });
    gsap.fromTo("#bats", { opacity: 1, y: 400, scale: 0 }, {
        y: 20, scale: 0.8, ease: "power3.out",
        scrollTrigger: {
            trigger: ".scrollElement", start: "40% top", end: "70% 100%", scrub: 3,
            onEnter: () => {
                gsap.utils.toArray("#bats path").forEach((item, i) => {
                    gsap.to(item, { scaleX: 0.5, yoyo: true, repeat: 9, transformOrigin: "50% 50%", duration: 0.15, delay: 0.7 + i / 10 });
                });
                gsap.set("#bats", { opacity: 1 });
            }
        }
    });

    /* Sun increase */
    let sun2 = gsap.timeline();
    ScrollTrigger.create({ animation: sun2, trigger: ".scrollElement", start: "33% top", end: "83% 100%", scrub: 2 });
    sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
    sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
    sun2.to("#sun", { attr: { "stop-color": "#FF4500" } }, 0);
    sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#8A2BE2" } }, 0);
    sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#1A002E" } }, 0);
    sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#4B0082" } }, 0);

    /* Transition SCENE 2 to SCENE 3 (NIGHT) - EVEN EARLIER */
    gsap.set("#scene3", { y: height - 100, visibility: "visible" });
    let sceneTransition = gsap.timeline();
    ScrollTrigger.create({ animation: sceneTransition, trigger: ".scrollElement", start: "35% top", end: "65% 100%", scrub: 3 });
    sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
    sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
    sceneTransition.to("#bg2", { y: 0 }, 0);

    /* Scene 3 (STARS & PEAKS) */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({ animation: scene3, trigger: ".scrollElement", start: "40% top", end: "bottom 100%", scrub: 3 });
    scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
    scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);
    scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.8, y: -500 }, 0);
    scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
    scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

    /* Reveal elements independently */
    gsap.utils.toArray(".glass-card, .product-card, .category-card, .product-card-mini, .section-title").forEach((card) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom bottom",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    /* Falling Star */
    gsap.set("#fstar", { y: -400 });
    let fstarTL = gsap.timeline();
    ScrollTrigger.create({
        animation: fstarTL, trigger: ".scrollElement", start: "70% top", end: "bottom bottom", scrub: 2,
        onEnter: () => gsap.set("#fstar", { opacity: 1 }),
        onLeave: () => gsap.set("#fstar", { opacity: 0 })
    });
    fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

    // Twinkling stars
    const starIndices = [1, 3, 5, 8, 11, 15, 17, 18, 25, 28, 30, 35, 40, 45, 48];
    starIndices.forEach(idx => {
        gsap.fromTo(`#stars path:nth-of-type(${idx})`, { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: Math.random() * 2 });
    });
});

window.onbeforeunload = function () { window.scrollTo(0, 0); };
