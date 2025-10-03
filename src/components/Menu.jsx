import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const cards = sliderRef.current;
    const scrollAmount = cards.scrollWidth - window.innerWidth;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollAmount + (isMobile ? 400 : 1500)}px`,
      scrub: 1,
      pin: true,
      animation: gsap.to(cards, {
        x: `-${scrollAmount + (isMobile ? 400 : 1500)}px`,
        ease: "none",
      }),
      invalidateOnRefresh: true,
    });

    const menuTextSplit = new SplitText("#menu-text", {
      type: "lines, words",
    });

    const textAnimation = gsap.timeline({ paused: true }).fromTo(
      menuTextSplit.words,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -20,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.8,
      }
    );

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollAmount + 1000}px`,
      onEnter: () => {
        gsap.delayedCall(1.5, () => textAnimation.play());
      },
      onLeave: () => {
        textAnimation.reverse();
      },
      onEnterBack: () => {
        gsap.delayedCall(0.3, () => textAnimation.play());
      },
      onLeaveBack: () => {
        textAnimation.reverse();
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="menu"
      className="min-h-screen bg-coffee overflow-hidden"
    >
      <div className="flex h-screen">
        <div className="flex-shrink-0 md:w-[70%] w-[60%] flex items-center justify-center">
          <div
            id="menu-text"
            className="flex flex-col justify-center items-center h-full md:px-8 px-4 text-center"
          >
            <div className="md:mb-8 mb-6">
              <h1 className="md:text-7xl text-4xl font-lora font-bold text-milk/90 lora md:mb-4 mb-3">
                Kahve
                <span className="block md:text-4xl text-xl font-lora font-light italic text-milk/60 md:mt-2 mt-1">
                  Koleksiyonumuz
                </span>
              </h1>
            </div>
            <p className="text-milk/70 md:text-lg text-sm leading-relaxed md:max-w-md max-w-xs md:mb-6 mb-4 font-medium">
              Kaydırın ve lezzetlerimizi keşfedin.
            </p>
            <p className="text-milk/50 md:text-base text-sm leading-relaxed md:max-w-md max-w-xs">
              Her damlasında ustalık, her yudumda tutku.
              <span className="block md:mt-3 mt-2 italic font-light text-milk/40">
                Özenle seçilmiş çekirdeklerimizle benzersiz lezzet yolculuğu.
              </span>
            </p>
            <div className="md:mt-10 mt-6 text-milk/35 md:text-xs text-[10px] tracking-widest font-light">
              EST. 2024
            </div>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="flex items-center md:gap-8 gap-4 md:w-[30%] w-[40%]"
        >
          {/* Kahve Kartları */}
          <div className="md:min-w-[380px] min-w-[220px] bg-white rounded-lg overflow-hidden">
            <div className="md:h-52 h-36">
              <img
                src="/images/espresso.jpg"
                alt="Espresso"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:p-6 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="md:text-lg text-base font-bold text-coffee lora">
                  Espresso
                </h3>
                <span className="md:text-lg text-base font-bold text-coffee">
                  155 TL
                </span>
              </div>
              <p className="text-gray-600 md:text-sm text-xs">
                Güçlü ve yoğun lezzet
              </p>
            </div>
          </div>

          <div className="md:min-w-[380px] min-w-[220px] bg-white rounded-lg overflow-hidden">
            <div className="md:h-52 h-36">
              <img
                src="/images/americano.jpg"
                alt="Americano"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:p-6 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="md:text-lg text-base font-bold text-coffee lora">
                  Americano
                </h3>
                <span className="md:text-lg text-base font-bold text-coffee">
                  190 TL
                </span>
              </div>
              <p className="text-gray-600 md:text-sm text-xs">
                Sade ve saf kahve deneyimi
              </p>
            </div>
          </div>

          <div className="md:min-w-[380px] min-w-[220px] bg-white rounded-lg overflow-hidden">
            <div className="md:h-52 h-36">
              <img
                src="/images/cappucino.jpg"
                alt="Cappuccino"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:p-6 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="md:text-lg text-base font-bold text-coffee lora">
                  Cappuccino
                </h3>
                <span className="md:text-lg text-base font-bold text-coffee">
                  235 TL
                </span>
              </div>
              <p className="text-gray-600 md:text-sm text-xs">
                Kremsi süt köpüğü ile
              </p>
            </div>
          </div>

          <div className="md:min-w-[380px] min-w-[220px] bg-white rounded-lg overflow-hidden">
            <div className="md:h-52 h-36">
              <img
                src="/images/latte.jpg"
                alt="Latte"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:p-6 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="md:text-lg text-base font-bold text-coffee lora">
                  Latte
                </h3>
                <span className="md:text-lg text-base font-bold text-coffee">
                  220 TL
                </span>
              </div>
              <p className="text-gray-600 md:text-sm text-xs">
                Yumuşak ve dengeli tat
              </p>
            </div>
          </div>

          <div className="md:min-w-[380px] min-w-[220px] bg-white rounded-lg overflow-hidden">
            <div className="md:h-52 h-36">
              <img
                src="/images/mocha.jpg"
                alt="Mocha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:p-6 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="md:text-lg text-base font-bold text-coffee lora">
                  Mocha
                </h3>
                <span className="md:text-lg text-base font-bold text-coffee">
                  270 TL
                </span>
              </div>
              <p className="text-gray-600 md:text-sm text-xs">
                Çikolatalı kahve keyfi
              </p>
            </div>
          </div>

          <div className="md:min-w-[380px] min-w-[220px] bg-white rounded-lg overflow-hidden">
            <div className="md:h-52 h-36">
              <img
                src="/images/flat-white.jpg"
                alt="Flat White"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:p-6 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="md:text-lg text-base font-bold text-coffee lora">
                  Flat White
                </h3>
                <span className="md:text-lg text-base font-bold text-coffee">
                  240 TL
                </span>
              </div>
              <p className="text-gray-600 md:text-sm text-xs">
                Avustralya tarzı kahve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
