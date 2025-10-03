import {
  ScrollTrigger,
  SplitText,
  ScrollSmoother,
  ScrollToPlugin,
} from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import FullTextScroll from "./components/FullTextScroll";
import CoffeeArt from "./components/CoffeeArt";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import { useGSAP } from "@gsap/react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, ScrollToPlugin);

const App = () => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 4,
      effects: true,
      normalizeScroll: true,
    });
    ScrollTrigger.refresh();
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Story />
          <FullTextScroll />
          <CoffeeArt />
          <Gallery />
          <Menu />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
