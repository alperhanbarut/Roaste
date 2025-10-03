import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowDown } from "react-icons/fa";

const Story = () => {
  useGSAP(() => {
    // Title animasyonu
    gsap.from(".story-title", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    // Story kartları animasyonu
    gsap.from(".story-card", {
      opacity: 0,
      x: -150,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
      delay: 2,
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    // Ok ikonları animasyonu
    gsap.from(".story-arrow", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "bounce.out",
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 40%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      id="story"
      className="story-section min-h-screen md:my-40 my-0 bg-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Story Title */}
      <div className="story-title mt-5 absolute top-32 left-1/2 transform -translate-x-1/2 text-center z-50">
        <h2 className="font-playfair md:text-6xl text-2xl font-bold text-coffee-dark mb-4">
          Our Perfect Cup
        </h2>
        <p className="font-lora text-xl text-coffee tracking-wide">
          From Bean to Heart
        </p>
      </div>

      {/* Story Points - Sol Tarafta Dikey */}
      <div className="story-points md:opacity-100 opacity-0 mt-5 absolute left-20 top-1/2 transform -translate-y-1/2 z-40">
        {/* Köken */}
        <div className="story-card text-left max-w-xs">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-coffee/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=80&h=80&fit=crop&crop=center"
                alt="Coffee Origin"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <h3 className="playfair font-bold text-coffee-dark md:text-lg text-md">
                Origin
              </h3>
            </div>
            <p className="text-coffee leading-relaxed text-sm">
              Dünyanın en seçkin kahve bölgelerinden özenle toplanan premium
              çekirdekler
            </p>
          </div>
        </div>

        {/* Ok İkonu 1 */}
        <div className="story-arrow flex justify-center my-6">
          <FaArrowDown className="text-coffee/60 text-2xl animate-pulse" />
        </div>

        {/* Kavurma */}
        <div className="story-card text-left max-w-xs">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-coffee/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=80&fit=crop&crop=center"
                alt="Coffee Roasting"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <h3 className="playfair font-bold text-coffee-dark text-lg">
                Roasting
              </h3>
            </div>
            <p className="text-coffee leading-relaxed text-sm">
              Geleneksel yöntemlerle mükemmel kavrulma noktasına getirilen
              aromalı çekirdekler
            </p>
          </div>
        </div>

        {/* Ok İkonu 2 */}
        <div className="story-arrow flex justify-center my-6">
          <FaArrowDown className="text-coffee/60 text-2xl animate-pulse" />
        </div>

        {/* Demleme */}
        <div className="story-card text-left max-w-xs">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-coffee/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=80&h=80&fit=crop&crop=center"
                alt="Coffee Brewing"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <h3 className="playfair font-bold text-coffee-dark text-lg">
                Brewing
              </h3>
            </div>
            <p className="text-coffee leading-relaxed text-sm">
              Uzman barista'larımızın deneyimli elleriyle özenle hazırlanan
              mükemmel ekstraksiyon
            </p>
          </div>
        </div>

        {/* Ok İkonu 3 */}
        <div className="story-arrow flex justify-center my-6">
          <FaArrowDown className="text-coffee/60 text-2xl animate-pulse" />
        </div>

        {/* Sunum */}
        <div className="story-card text-left max-w-xs">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-coffee/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&h=80&fit=crop&crop=center"
                alt="Coffee Serving"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <h3 className="playfair font-bold text-coffee-dark text-lg">
                Serving
              </h3>
            </div>
            <p className="text-coffee leading-relaxed text-sm">
              Size özel hazırlanmış mükemmel fincanınız, en güzel anlarınıza
              eşlik etmeye hazır
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
