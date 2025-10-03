import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullTextScroll = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Mobile
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".full-text-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl.to(".text-line-1", { x: 100 }, 0)
        .to(".text-line-2", { x: -120 }, 0)
        .to(".text-line-3", { x: 140 }, 0)
        .to(".text-line-4", { x: -110 }, 0)
        .to(".text-line-5", { x: 90 }, 0)
        .to(".text-line-6", { x: -150 }, 0)
        .to(".text-line-7", { x: 120 }, 0);
      return () => tl.kill();
    });

    // Desktop
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".full-text-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl.to(".text-line-1", { x: 400 }, 0)
        .to(".text-line-2", { x: -500 }, 0)
        .to(".text-line-3", { x: 600 }, 0)
        .to(".text-line-4", { x: -400 }, 0)
        .to(".text-line-5", { x: 300 }, 0)
        .to(".text-line-6", { x: -600 }, 0)
        .to(".text-line-7", { x: 500 }, 0);
      return () => tl.kill();
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          ".text-line-1",
          ".text-line-2",
          ".text-line-3",
          ".text-line-4",
          ".text-line-5",
          ".text-line-6",
          ".text-line-7",
        ],
        { x: 0 }
      );
      return () => {};
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="full-text-section md:min-h-screen min-h-[50vh] bg-coffee flex flex-col justify-center relative overflow-hidden md:py-20 py-0">
      {/* Yazı Satırları */}
      <div className="space-y-6">
        {/* 1. Satır */}
        <div className="text-line-1 text-center px-2">
          <h2 className="playfair text-3xl sm:text-5xl md:text-8xl font-bold text-milk whitespace-nowrap">
            ARTISAN ROASTED COFFEE BEANS
          </h2>
        </div>

        {/* 2. Satır */}
        <div className="text-line-2 text-center px-2">
          <h2 className="playfair text-4xl sm:text-6xl md:text-9xl font-bold text-milk whitespace-nowrap">
            PREMIUM EXPERIENCE
          </h2>
        </div>

        {/* 3. Satır */}
        <div className="text-line-3 text-center px-2">
          <h2 className="playfair text-3xl sm:text-5xl md:text-7xl font-bold text-milk whitespace-nowrap">
            CRAFTED TO PERFECTION
          </h2>
        </div>

        {/* 4. Satır */}
        <div className="text-line-4 text-center px-2">
          <h2 className="playfair text-5xl sm:text-7xl md:text-10xl font-bold text-milk whitespace-nowrap">
            ROASTED WITH PASSION
          </h2>
        </div>

        {/* 5. Satır */}
        <div className="text-line-5 text-center px-2">
          <h2 className="playfair text-4xl sm:text-6xl md:text-8xl font-bold text-milk whitespace-nowrap">
            EXCEPTIONAL QUALITY
          </h2>
        </div>

        {/* 6. Satır */}
        <div className="text-line-6 text-center px-2">
          <h2 className="playfair text-4xl sm:text-6xl md:text-9xl font-bold text-milk whitespace-nowrap">
            AUTHENTIC FLAVOR
          </h2>
        </div>

        {/* 7. Satır */}
        <div className="text-line-7 text-center px-2">
          <h2 className="playfair text-3xl sm:text-5xl md:text-7xl font-bold text-milk whitespace-nowrap">
            HANDCRAFTED EXCELLENCE
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FullTextScroll;
