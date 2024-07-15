import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainImg from "../images/img14.jpg";
import Box1 from "../images/img25.png";
import Box2 from "../images/img26.png";
import Box3 from "../images/img27.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

function ChooseUs() {
  const [containerRef, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="choose-section">
      <div className="container">
        <div className="choose-container">
          <img
            className="choose-container__img"
            src={MainImg}
            alt="Horse_img"
          />
          <motion.div
            className="text-container"
            ref={containerRef}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-container__left">
              <h4>Why Choose Us</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value
                for your money, so you can enjoy top-quality services and
                products without breaking the bank. Our deals are designed to
                give you the ultimate riding adventure experience, so don't miss
                out on your chance to save big.
              </p>
              <a href="#home">
                Find Details &nbsp;
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </div>
            <motion.div
              className="text-container__right"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="text-container__right__box">
                <img src={Box1} alt="car-img" />
                <div className="text-container__right__box__text">
                  <h4>Adventure Riding</h4>
                  <p>Elevate your riding experience with our top-notch horses for your adventurous journeys.</p>
                </div>
              </div>
              <div className="text-container__right__box">
                <img src={Box2} alt="coin-img" />
                <div className="text-container__right__box__text">
                  <h4>All Inclusive Pricing</h4>
                  <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
              </div>
              <div className="text-container__right__box">
                <img src={Box3} alt="coin-img" />
                <div className="text-container__right__box__text">
                  <h4>No Hidden Charges</h4>
                  <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
