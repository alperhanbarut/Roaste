import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("nav", {
      opacity: 0,
      duration: 1,
      delay: 1.4,
      ease: "power4.out",
    });

    // FullTextScroll section
    ScrollTrigger.create({
      trigger: ".full-text-section",
      start: "top 15%",
      end: "bottom 15%",
      onEnter: () => {
        gsap.to(".nav-link", {
          color: "#f8f5f0",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(0) invert(1)",
          duration: 0.3,
        });
      },
      onLeave: () => {
        gsap.to(".nav-link", {
          color: "#6e4b3a",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(1) invert(0)",
          duration: 0.3,
        });
      },
      onEnterBack: () => {
        gsap.to(".nav-link", {
          color: "#f8f5f0",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(0) invert(1)",
          duration: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(".nav-link", {
          color: "#6e4b3a",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(1) invert(0)",
          duration: 0.3,
        });
      },
    });

    // Menu section
    ScrollTrigger.create({
      trigger: "#menu",
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        gsap.to(".nav-link", {
          color: "#f8f5f0",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(0) invert(1)",
          duration: 0.3,
        });
      },
      onLeave: () => {
        gsap.to(".nav-link", {
          color: "#6e4b3a",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(1) invert(0)",
          duration: 0.3,
        });
      },
      onEnterBack: () => {
        gsap.to(".nav-link", {
          color: "#f8f5f0",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(0) invert(1)",
          duration: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(".nav-link", {
          color: "#6e4b3a",
          duration: 0.3,
        });
        gsap.to(".nav-logo", {
          filter: "brightness(1) invert(0)",
          duration: 0.3,
        });
      },
    });

    const sections = [
      "#hero",
      "#story",
      "#menu",
      "#coffee-art",
      "#gallery",
      "#contact",
    ];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("nav-link-active");
          });
          const activeLink = document.querySelector(`a[href="${section}"]`);
          if (activeLink) {
            activeLink.classList.add("nav-link-active");
          }
        },
        onEnterBack: () => {
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("nav-link-active");
          });
          const activeLink = document.querySelector(`a[href="${section}"]`);
          if (activeLink) {
            activeLink.classList.add("nav-link-active");
          }
        },
      });
    });
  });
  const leftLinks = [
    { href: "#hero", label: "Ana Sayfa" },
    { href: "#story", label: "Hikayemiz" },
    { href: "#menu", label: "Menü" },
  ];

  const rightLinks = [
    { href: "#coffee-art", label: "Sanatımız" },
    { href: "#gallery", label: "Galeri" },
    { href: "#contact", label: "İletişim" },
  ];

  const linkClass =
    "nav-link text-coffee hover:text-coffee-dark transition-colors duration-300 font-medium md:text-sm text-[10px] relative ";

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 w-full h-30 bg-transparent backdrop-blur-md items-center justify-center px-4 z-[999]">
        <div className="flex items-center justify-center gap-3">
          {/* Sol linkler */}
          <div className="flex flex-row font-playfair gap-3">
            {leftLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link text-coffee hover:text-coffee-dark transition-colors duration-300 font-medium text-sm relative"
                aria-label={link.label}
                style={{ pointerEvents: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 mx-6">
            <a href={import.meta.env.BASE_URL}>
              <img
                src={logo}
                alt="Roasté Logo"
                className="nav-logo h-40 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </a>
          </div>

          {/* Sağ linkler */}
          <div className="flex flex-row playfair gap-3">
            {rightLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link text-coffee hover:text-coffee-dark transition-colors duration-300 font-medium text-sm relative"
                aria-label={link.label}
                style={{ pointerEvents: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 w-full h-16 bg-transparent backdrop-blur-md flex items-center px-4 z-[999]">
        {/* Logo Sol */}
        <div className="flex-shrink-0">
          <a href={import.meta.env.BASE_URL}>
            <img
              src={logo}
              alt="Roasté Logo"
              className="nav-logo h-18 w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </a>
        </div>

        {/* Linkler - Logoya yakın */}
        <div className="flex flex-row gap-1 text-center ml-8">
          <div className="flex gap-2">
            {leftLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link text-coffee hover:text-coffee-dark transition-colors duration-300 font-medium text-[8px] font-playfair"
                aria-label={link.label}
                style={{ pointerEvents: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            {rightLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link text-coffee hover:text-coffee-dark transition-colors duration-300 font-medium text-[8px] font-playfair"
                aria-label={link.label}
                style={{ pointerEvents: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
