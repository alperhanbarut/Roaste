import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const headerSplit = new SplitText("#contact-header", {
      type: "lines, words",
    });
    const addressSplit = new SplitText("#address-block", {
      type: "lines, words",
    });
    const hoursSplit = new SplitText("#contact-hours", {
      type: "lines, words",
    });
    const infoSplit = new SplitText("#contact-info", {
      type: "lines, words",
    });
    const inviteSplit = new SplitText("#contact-invite", {
      type: "lines, words",
    });
    const mapSplit = new SplitText("#contact-map h3", {
      type: "lines, words",
    });

    gsap.set(
      [
        headerSplit.words,
        addressSplit.words,
        hoursSplit.words,
        infoSplit.words,
        inviteSplit.words,
        mapSplit.words,
      ],
      {
        opacity: 0,
        x: -20,
      }
    );

    gsap.set("#map-container", {
      opacity: 0,
      scale: 0.3,
      rotationY: 45,
      transformOrigin: "center center",
      z: -200,
    });

    const contactTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
      },
    });

    contactTimeline
      .to(headerSplit.words, {
        opacity: 1,
        x: 0,
        stagger: 0.06,
        duration: 0.8,
      })
      .to(addressSplit.words, {
        opacity: 1,
        x: 0,
        stagger: 0.05,
        duration: 0.7,
      })
      .to(
        hoursSplit.words,
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.7,
        },
        "-=0.2"
      )
      .to(
        infoSplit.words,
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.7,
        },
        "-=0.2"
      )
      .to(
        inviteSplit.words,
        {
          opacity: 1,
          x: 0,
          stagger: 0.06,
          duration: 0.8,
        },
        "-=0.1"
      )
      .to(
        mapSplit.words,
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          duration: 0.7,
        },
        "-=0.1"
      )
      .to(
        "#map-container",
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
  });
  return (
    <section
      id="contact"
      className="min-h-screen bg-milk md:py-20 py-12 md:pb-20 pb-24"
    >
      <div className="max-w-6xl mx-auto md:px-8 px-4">
        {/* Başlık */}
        <div id="contact-header" className="text-center md:mb-16 mb-12">
          <p className="text-coffee/70 md:text-xl text-lg max-w-2xl mx-auto font-lora">
            Kahve tutkunuzla buluşalım. Kapımız her zaman açık, fincanlarımız
            her zaman dolu.
          </p>
        </div>

        <div
          id="contact-address"
          className="max-w-4xl mx-auto md:space-y-16 space-y-12"
        >
          {/* Adres Bilgisi */}
          <div id="address-block" className="contact-item text-center">
            <h3 className="md:text-3xl text-2xl font-bold text-coffee font-lora md:mb-6 mb-4">
              Adresimiz
            </h3>
            <p className="text-coffee/70 md:text-xl text-lg leading-relaxed font-lora">
              Beyoğlu Mahallesi
              <br />
              Kahve Sokağı No: 42
              <br />
              34420 Beyoğlu/İstanbul
            </p>
          </div>

          {/* Çalışma Saatleri */}
          <div id="contact-hours" className="contact-item text-center">
            <h3 className="md:text-3xl text-2xl font-bold text-coffee font-lora md:mb-8 mb-6">
              Açık Olduğumuz Saatler
            </h3>
            <div className="md:max-w-md max-w-xs mx-auto space-y-4">
              <div className="flex justify-between items-center border-b border-coffee/20 pb-3">
                <span className="text-coffee font-semibold md:text-lg text-base font-lora">
                  Pazartesi - Cuma
                </span>
                <span className="text-coffee/70 md:text-lg text-base font-lora">
                  07:00 - 22:00
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-coffee/20 pb-3">
                <span className="text-coffee font-semibold md:text-lg text-base font-lora">
                  Cumartesi
                </span>
                <span className="text-coffee/70 md:text-lg text-base font-lora">
                  08:00 - 23:00
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-coffee/20 pb-3">
                <span className="text-coffee font-semibold md:text-lg text-base font-lora">
                  Pazar
                </span>
                <span className="text-coffee/70 md:text-lg text-base font-lora">
                  09:00 - 21:00
                </span>
              </div>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div id="contact-info" className="contact-item text-center">
            <h3 className="md:text-3xl text-2xl font-bold text-coffee font-lora md:mb-8 mb-6">
              İletişim Bilgileri
            </h3>
            <div className="md:max-w-md max-w-xs mx-auto space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-coffee font-semibold md:text-lg text-base font-lora">
                  Telefon
                </span>
                <span className="text-coffee/70 md:text-lg text-base font-lora">
                  +90 (212) 555 01 23
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-coffee font-semibold md:text-lg text-base font-lora">
                  E-mail
                </span>
                <span className="text-coffee/70 md:text-lg text-base font-lora">
                  info@roaste.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-coffee font-semibold md:text-lg text-base font-lora">
                  WhatsApp
                </span>
                <span className="text-coffee/70 md:text-lg text-base font-lora">
                  +90 (535) 555 01 23
                </span>
              </div>
            </div>
          </div>

          {/* Kahve İçmeye Bekliyoruz */}
          <div
            id="contact-invite"
            className="contact-invite bg-coffee md:p-12 p-8 rounded-2xl text-center"
          >
            <h3 className="md:text-4xl text-3xl font-bold text-milk font-lora md:mb-6 mb-4">
              Kahve İçmeye Bekliyoruz!
            </h3>
            <p className="text-milk/80 md:text-xl text-lg leading-relaxed md:mb-8 mb-6 max-w-2xl mx-auto font-lora">
              Roasté'de sizi ağırlamaktan mutluluk duyarız. Özel karışımlarımızı
              denemeye ve sıcak atmosferimizde keyifli vakit geçirmeye
              davetlisiniz.
            </p>
          </div>

          {/* Harita */}
          <div id="contact-map" className="contact-map">
            <h3 className="md:text-3xl text-2xl font-bold text-coffee font-lora md:mb-8 mb-6 text-center">
              Konumumuz
            </h3>
            <div
              id="map-container"
              className="relative rounded-2xl overflow-hidden shadow-2xl md:border-4 border-2 border-coffee/20 md:mb-0 mb-12"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8512.74551085934!2d28.977755921344496!3d41.03159929878456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab75ad870363d%3A0x25bc05b50533efb0!2zQmV5b8SfbHUvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1759520676045!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:h-[450px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
