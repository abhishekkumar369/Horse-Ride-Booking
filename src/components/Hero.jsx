import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import BgShape from "../images/chooseUs/bg.png";
import HeroCar from "../images/img15.jpg";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);
  const { scrollY } = useViewportScroll();

  // Define transform animations based on scroll position
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const imgOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const imgY = useTransform(scrollY, [0, 300], [0, 50]);

  // Additional transforms for more sophisticated effects
  const textScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const imgScale = useTransform(scrollY, [0, 300], [1, 1.2]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <motion.div
              className="hero-content__text"
              style={{
                opacity: textOpacity,
                y: textY,
                scale: textScale,
              }}
              transition={{ duration: 0.5 }}
            >
              <h4>Plan your adventure now</h4>
              <h1>
                Experience <span>great saving</span> with our horse booking.
              </h1>
              <p>
                Book your ideal horse riding experience. Enjoy competitive prices, scenic trails, flexible scheduling options, and more.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </motion.div>

            {/* img */}
            <motion.img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
              style={{
                opacity: imgOpacity,
                y: imgY,
                scale: imgScale,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}

export default Hero;
