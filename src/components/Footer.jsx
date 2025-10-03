import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (isMobile) {
      gsap.set("#footer-container", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
      });
      gsap.set("#footer-logo", {
        opacity: 1,
        scale: 1,
        y: 0,
      });
      return;
    } else {
      const footerDescSplit = new SplitText("#footer-desc", {
        type: "lines, words",
      });
      const copyrightSplit = new SplitText("#footer-copyright", {
        type: "lines, words",
      });

      gsap.set("#footer-container", {
        clipPath: "polygon(50% 1%, 91% 0, 59% 100%, 18% 100%)",
        opacity: 1,
      });

      gsap.set([footerDescSplit.words, copyrightSplit.words], {
        opacity: 0,
        y: 40,
      });

      gsap.set("#footer-logo", {
        opacity: 0,
        scale: 0.6,
        y: -20,
      });

      const footerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#footer",
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      footerTimeline
        .to("#footer-container", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.8,
          ease: "power2.out",
        })
        .to(
          "#footer-logo",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=1.2"
        )
        .to(
          footerDescSplit.words,
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          copyrightSplit.words,
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }
  });

  return (
    <footer id="footer" className="relative overflow-hidden">
      <div id="footer-container" className="bg-coffee text-milk md:py-16 py-12">
        <div className="max-w-6xl mx-auto md:px-8 px-4">
          {/* Ana İçerik */}
          <div className="flex justify-center items-center md:mb-12 mb-8">
            <div className="md:space-y-6 space-y-4">
              <div className="flex justify-center">
                <img
                  id="footer-logo"
                  src="/images/logo.png"
                  alt="Roasté Logo"
                  className="md:w-32 md:h-32 w-24 h-24"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p
                id="footer-desc"
                className="text-milk/80 md:text-lg text-base leading-relaxed font-lora text-center md:px-0 px-4"
              >
                " Her fincan kahvede, tutkuyla seçilmiş çekirdeklerden doğan
                eşsiz lezzetleri keşfedin. Kahve severlerin buluşma noktası. "
              </p>
            </div>
          </div>

          {/* Alt - Copyright */}
          <div className="border-t border-milk/20 md:pt-8 pt-6">
            <p
              id="footer-copyright"
              className="text-center text-milk/60 md:text-lg text-base font-lora md:px-0 px-4"
            >
              © 2025 Roasté. Tüm hakları saklıdır. Kahve tutkusu ile
              yapılmıştır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
