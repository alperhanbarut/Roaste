import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      alt: "Kahve Çekirdeği",
      title: "Premium Çekirdekler",
    },
    {
      id: 2,
      src: gallery2,
      alt: "Espresso",
      title: "Perfect Espresso",
    },
    {
      id: 3,
      src: gallery3,
      alt: "Latte Art",
      title: "Latte Sanatı",
    },
    {
      id: 4,
      src: gallery4,
      alt: "Coffee Shop",
      title: "Roasté Atmosferi",
    },
    {
      id: 5,
      src: gallery5,
      alt: "Pour Over",
      title: "El Yapımı Kahve",
    },
    {
      id: 6,
      src: gallery6,
      alt: "Coffee Roasting",
      title: "Kavurma Sanatı",
    },
  ];

  useGSAP(() => {
    const galleryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    galleryTimeline
      .fromTo(
        ".gallery-title",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".gallery-item",
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        ".gallery-quote",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .fromTo(
        ".coffee-beans",
        {
          opacity: 0,
          scale: 0,
          rotation: 0,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
      const img = item.querySelector("img");
      const overlay = item.querySelector(".overlay");

      item.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.out" });
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(overlay, { opacity: 0, duration: 0.3 });
      });
    });
  });

  return (
    <section
      id="gallery"
      className="min-h-screen relative overflow-hidden bg-milk"
    >
      <div className="relative mt-20 z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
        {/* Aesthetic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item relative overflow-hidden rounded-2xl group cursor-pointer transform hover:scale-105 transition-all duration-700 ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                  ? "md:row-span-2"
                  : index === 2
                  ? "md:col-span-1 md:row-span-2"
                  : index === 3
                  ? "md:col-span-2 md:row-span-1"
                  : index === 4
                  ? "md:row-span-1"
                  : "md:col-span-1 md:row-span-1"
              }`}
              style={{
                background: `linear-gradient(135deg, rgba(110, 75, 58, 0.1), rgba(248, 245, 240, 0.1))`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/70 via-transparent to-transparent opacity-70"></div>
              </div>

              {/* Content Overlay */}
              <div className="overlay absolute inset-0 bg-coffee-dark/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="playfair text-2xl font-bold mb-3 drop-shadow-lg">
                    {image.title}
                  </h3>
                  <div className="w-16 h-px bg-white/80 mx-auto mb-2"></div>
                  <p className="lora text-sm opacity-90">{image.alt}</p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom Text */}
        <div className="text-center mt-8">
          <div className="relative inline-block">
            <p className="gallery-quote playfair text-coffee-dark md:text-xl text-md italic font-light tracking-wide">
              " Her kadraj bir anı, her fincan bir hikaye"
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-coffee to-transparent"></div>
          </div>

          {/* Coffee Beans Decoration */}
          <div className="flex justify-center items-center mt-4 space-x-3 md:pb-0 pb-5">
            <div className="coffee-beans w-1.5 h-2.5 bg-coffee-dark rounded-full transform rotate-12"></div>
            <div className="coffee-beans w-1 h-2 bg-coffee rounded-full transform -rotate-6"></div>
            <div className="coffee-beans w-2 h-3 bg-coffee-dark rounded-full transform rotate-45"></div>
            <div className="coffee-beans w-1 h-1.5 bg-coffee rounded-full transform -rotate-12"></div>
            <div className="coffee-beans w-1.5 h-2.5 bg-coffee-dark rounded-full transform rotate-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
