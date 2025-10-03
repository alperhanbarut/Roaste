import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import baristaImg from "../assets/images/barista.jpg";

const CoffeeArt = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const maskTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#coffee-art",
        start: "top top",
        end: "bottom",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeLine.to(".will-change", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });
    if (isMobile) {
      maskTimeLine.to(".mobile-masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "200%",
        duration: 1,
        ease: "power1.inOut",
      });
    } else {
      maskTimeLine.to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "300%",
        duration: 1,
        ease: "power1.inOut",
      });
    }
    maskTimeLine.to(
      "#center-text",
      {
        opacity: 1,
        y: 10,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
    maskTimeLine.to(
      "#left-text",
      {
        opacity: 1,
        x: 20,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );
    maskTimeLine.to(
      "#right-text",
      {
        opacity: 1,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );
  });
  return (
    <section id="coffee-art" className="bg-milk relative overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-8">
        {/* Title */}
        <div className="will-change text-center md:mt-0 mt-10 mb-16">
          <h2 className="font-playfair text-coffee-dark md:text-6xl text-2xl font-bold mb-6">
            The Coffee Art
          </h2>
          <p className="font-lora text-coffee md:text-2xl text-md tracking-wide max-w-2xl">
            Sanatın ve kahvenin mükemmel buluşması
          </p>
        </div>

        {/* Masked Coffee Image */}
        {!isMobile ? (
          <div className="masked-img mx-auto">
            <img
              src={baristaImg}
              alt="Coffee Art"
              className="rounded-lg shadow-2xl"
            />
          </div>
        ) : (
          <div className="mobile-masked-img mx-auto">
            <img
              src={baristaImg}
              alt="Coffee Art"
              className="rounded-lg shadow-2xl"
            />
          </div>
        )}

        {/* Decorative Elements */}
        <div className="will-change absolute md:bottom-20 bottom-10 left-1/2  transform -translate-x-1/2">
          <div className="flex items-center space-x-4">
            <div className="md:w-8 w-3.5 h-px bg-coffee"></div>
            <span className="font-lora text-coffee text-sm tracking-widest">
              ARTISAN COFFEE
            </span>
            <div className="md:w-8 w-3.5 h-px bg-coffee"></div>
          </div>
        </div>

        {/* Yukarı Orta - Mask açılınca görünecek */}
        <div
          id="center-text"
          className="absolute md:top-40 top-30 left-1/2 transform -translate-x-1/2 opacity-0 text-center"
        >
          <h3 className="font-playfair text-coffee-dark text-3xl font-bold mb-3">
            İşte Bu Bizim Sanatımız
          </h3>
          <p className="font-lora text-coffee text-lg leading-relaxed max-w-md">
            - Roasté -
          </p>
        </div>

        {/* Sol Orta - Mask açılınca görünecek */}
        <div
          id="left-text"
          className="md:bg-none bg-milk md:p-0 p-5 absolute md:left-12 left-1/2 md:top-1/2 top-2/3 transform -translate-y-1/2 opacity-0"
        >
          <h3 className="font-playfair text-coffee-dark md:text-2xl text-lg font-bold mb-3">
            Özenle Seçilmiş
          </h3>
          <p className="font-lora text-coffee text-base leading-relaxed md:max-w-sm max-w-30">
            Dünyanın en iyi kahve bölgelerinden özenle seçilmiş çekirdekler.
          </p>
        </div>

        {/* Sağ Orta - Mask açılınca görünecek */}
        <div
          id="right-text"
          className="md:bg-none bg-milk md:p-0 p-5 absolute md:right-12 right-1/2 md:top-1/2 top-[90%] transform -translate-y-1/2 opacity-0 text-right"
        >
          <h3 className="font-playfair text-coffee-dark md:text-2xl text-lg font-bold mb-3">
            Tutkuyla İşlenmiş
          </h3>
          <p className="font-lora text-coffee text-base leading-relaxed md:max-w-sm max-w-30">
            Uzman ellerde ve tutkuyla hazırlanan her fincan kahve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoffeeArt;
