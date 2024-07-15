import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import SelectCar from "../images/img23.png";
import Contact from "../images/img24.png";
import Drive from "../images/img25.png";

const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function PlanTrip() {
  const [selectHorseRef, selectHorseInView] = useInView({ threshold: 0.7 }); 
  const [contactOperatorRef, contactOperatorInView] = useInView({ threshold: 0.7 }); 
  const [letsRideRef, letsRideInView] = useInView({ threshold: 0.7 }); 

  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container__title">
            <h3>Plan your adventure now</h3>
            <h2>Quick & easy horse ride booking</h2>
          </div>

          <div className="plan-container__boxes">
            <motion.div
              className="plan-container__boxes__box"
              ref={selectHorseRef}
              initial="hidden"
              animate={selectHorseInView ? "visible" : "hidden"}
              variants={boxVariants}
              transition={{ duration: 0.6 }}
            >
              <img src={SelectCar} alt="icon_img" />
              <h3>Select Horse</h3>
              <p>
                Choose from a diverse range of horses tailored to your riding needs and preferences.
              </p>
            </motion.div>

            <motion.div
              className="plan-container__boxes__box"
              ref={contactOperatorRef}
              initial="hidden"
              animate={contactOperatorInView ? "visible" : "hidden"}
              variants={boxVariants}
              transition={{ duration: 0.6 }}
            >
              <img src={Contact} alt="icon_img" />
              <h3>Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are available to assist with any inquiries or assistance you may need.
              </p>
            </motion.div>

            <motion.div
              className="plan-container__boxes__box"
              ref={letsRideRef}
              initial="hidden"
              animate={letsRideInView ? "visible" : "hidden"}
              variants={boxVariants}
              transition={{ duration: 0.6 }}
            >
              <img src={Drive} alt="icon_img" />
              <h3>Let's Ride</h3>
              <p>
                Whether you're exploring scenic trails or embarking on an adventurous trek, enjoy the journey with our wide range of horses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
