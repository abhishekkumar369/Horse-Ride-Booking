import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
};

const questionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const answerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Faq() {
  const [activeQ, setActiveQ] = useState(null);
  const [containerRef, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  const openQ = (id) => {
    setActiveQ(activeQ === id ? null : id);
    controls.start("visible");
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Answers to Common Questions About Horse Ride Bookings on Our Website:
              Providing Clarity on Your Horse Riding Adventure.
            </p>
          </div>

          <motion.div
            className="all-questions"
            ref={containerRef}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="faq-box">
              <motion.div
                id="q1"
                className={`faq-box__question ${activeQ === "q1" ? "active-question" : ""}`}
                onClick={() => openQ("q1")}
                variants={questionVariants}
                whileHover={{ scale: 1.1 }}
              >
                <p>1. What makes booking horse rides special?</p>
                <i className="fa-solid fa-angle-down"></i>
              </motion.div>
              <motion.div
                id="a1"
                className={`faq-box__answer ${activeQ === "q1" ? "active-answer" : ""}`}
                variants={answerVariants}
                animate={controls}
              >
                Booking horse rides allows you to tailor your experience to fit your preferences and needs. Whether you're looking for a leisurely ride through scenic trails or an adventurous trek across varied terrain, comparing options helps you find the ideal ride that suits your adventure style and budget. Researching online and comparing different horse riding providers enables you to discover competitive prices, diverse riding routes, and additional services such as guided tours or specialized equipment rental.
              </motion.div>
            </div>
            <div className="faq-box">
              <motion.div
                id="q2"
                className={`faq-box__question ${activeQ === "q2" ? "active-question" : ""}`}
                onClick={() => openQ("q2")}
                variants={questionVariants}
                whileHover={{ scale: 1.1 }}
              >
                <p>2. How do I find horse ride deals?</p>
                <i className="fa-solid fa-angle-down"></i>
              </motion.div>
              <motion.div
                id="a2"
                className={`faq-box__answer ${activeQ === "q2" ? "active-answer" : ""}`}
                variants={answerVariants}
                animate={controls}
              >
                You can find horse ride deals by exploring online platforms specializing in adventure activities. Websites like TripAdvisor, Viator, or local adventure tour operators' websites often list various horse riding options along with customer reviews and ratings. Following adventure tour providers on social media and subscribing to their newsletters can also keep you updated on special offers, seasonal discounts, and package deals tailored for different riding preferences and group sizes.
              </motion.div>
            </div>
            <div className="faq-box">
              <motion.div
                id="q3"
                className={`faq-box__question ${activeQ === "q3" ? "active-question" : ""}`}
                onClick={() => openQ("q3")}
                variants={questionVariants}
                whileHover={{ scale: 1.1 }}
              >
                <p>3. How can I find affordable horse riding experiences?</p>
                <i className="fa-solid fa-angle-down"></i>
              </motion.div>
              <motion.div
                id="a3"
                className={`faq-box__answer ${activeQ === "q3" ? "active-answer" : ""}`}
                variants={answerVariants}
                animate={controls}
              >
                Book in advance: Booking your horse riding adventure in advance often results in better pricing and availability, especially during peak seasons.
                Compare options: Use adventure booking platforms to compare prices, ratings, and available riding routes from different providers.
                Look for promotions: Keep an eye out for special promotions, seasonal discounts, or bundle packages that can offer more value for your horse riding experience.
                Off-peak times: Consider riding during off-peak hours or days to potentially find lower rates and enjoy a quieter riding experience.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
