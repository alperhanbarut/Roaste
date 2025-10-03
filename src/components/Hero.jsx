import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import coffeeBeans from "../assets/images/coffee-beans.png";
import videoFile from "../assets/videos/output.mp4";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const videoTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: isMobile ? "center 50%" : "center 60%",
        end: "110% top",
        scrub: isMobile ? 1.2 : true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoTimeLine.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: "power1.out",
      });
    };

    const initSplitText = () => {
      const logoSplit = new SplitText("#logo", {
        type: "chars",
      });
      const descriptionSplit = new SplitText("#description", {
        type: "lines",
      });
      const passionTitleSplit = new SplitText("#passion-title", {
        type: "lines",
      });
      const passionDescriptionSplit = new SplitText("#passion-description", {
        type: "lines",
      });

      gsap.set("#logo", { willChange: "transform" });
      gsap.from(logoSplit.chars, {
        opacity: 0,
        yPercent: -80,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,
        delay: 0,
        onComplete: () => gsap.set("#logo", { willChange: "auto" }),
      });

      gsap.set("#video", { willChange: "opacity" });
      gsap.to("#video", {
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5,
        onComplete: () => gsap.set("#video", { willChange: "auto" }),
      });

      gsap.from(descriptionSplit.lines, {
        opacity: 0,
        xPercent: -100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.8,
      });

      gsap.to("#right-coffee-beans", {
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        delay: 2.0,
      });

      gsap.from(passionTitleSplit.lines, {
        opacity: 0,
        yPercent: 50,
        duration: 1.2,
        ease: "expo.out",
        delay: 2.5,
      });

      gsap.from(passionDescriptionSplit.lines, {
        opacity: 0,
        yPercent: 50,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.2,
        delay: 3.2,
      });

      if (!isMobile) {
        gsap.set("#right-coffee-beans", { willChange: "transform" });
        gsap.set("#passion", { willChange: "transform" });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "section",
              start: "top top",
              end: "bottom top",
              scrub: 1,
              onComplete: () => {
                gsap.set("#right-coffee-beans", { willChange: "auto" });
                gsap.set("#passion", { willChange: "auto" });
              },
            },
          })
          .to(
            "#right-coffee-beans",
            {
              x: 200,
              y: 500,
              rotation: 45,
              force3D: true,
            },
            0
          )
          .to("#passion", {
            x: -600,
            y: 300,
            force3D: true,
          });
      } else {
        gsap.to("#right-coffee-beans", {
          opacity: 0.7,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "section",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    };
    document.fonts.ready
      .then(() => {
        initSplitText();
      })
      .catch(() => {
        setTimeout(initSplitText, 300);
      });
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white pt-24 flex items-center justify-center"
    >
      {/* Sağ coffee beans */}
      <img
        id="right-coffee-beans"
        src={coffeeBeans}
        alt="Coffee Beans"
        className="absolute md:right-[-20px] right-[-120px] rotate-[90deg] md:bottom-[-300px] bottom-[-200px] transform -translate-y-1/2 md:w-lg w-3xs h-auto z-30 opacity-0"
      />

      {/* Hero Video */}
      <div id="video" className="video absolute ml-10 inset-0 z-20 opacity-0">
        <video
          ref={videoRef}
          src={videoFile}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="absolute mt-0 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center">
        <h1
          id="logo"
          className="font-playfair text-4xl md:text-9xl font-bold italic text-coffee-dark mb-4 drop-shadow-2xl"
        >
          Roasté
        </h1>
        <p
          id="description"
          className="text-xl md:text-3xl font-playfair font-light text-coffee tracking-wide drop-shadow-lg"
        >
          Crafted to Perfection
        </p>
      </div>

      {/* Bottom Left Text */}
      <div
        id="passion"
        className="absolute md:top-180 top-[40%]  md:left-25 left-10 z-30 max-w-md"
      >
        <h3
          id="passion-title"
          className="font-lora text-coffee-dark font-semibold italic md:text-lg text-sm mb-2 drop-shadow-lg"
        >
          Kahve Tutkumuz
        </h3>
        <p
          id="passion-description"
          className="text-coffee font-playfair md:text-sm text-xs leading-relaxed drop-shadow-md"
        >
          Dünya'nın en seçkin kahve bölgelerinden özenle seçtiğimiz
          çekirdekleri, geleneksel yöntemlerle modern teknolojinin mükemmel
          uyumuyla işliyoruz.
        </p>
      </div>
    </section>
  );
};

export default Hero;
