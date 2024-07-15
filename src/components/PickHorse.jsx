import { useState } from "react";
import HorseBox from "./HorseBox";
import { HORSE_DATA } from "./HorseData";

function PickHorse() {
  const [active, setActive] = useState("SecondHorse");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Horse Models</h3>
              <h2>Explore our horse fleet</h2>
              <p>
              Choose from a variety of our amazing horses for your next riding adventure or leisure ride.
              </p>
            </div>
            <div className="pick-container__car-content">

              {/* pick horse */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondHorse");
                    btnID("btn1");
                  }}
                >
                  H1-maroomWhite
                </button>

                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstHorse");
                    btnID("btn2");
                  }}
                >
                  H2-maroomBlack
                </button>

                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdHorse");
                    btnID("btn3");
                  }}
                >
                  H3-brown
                </button>

                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthHorse");
                    btnID("btn4");
                  }}
                >
                  H4-White
                </button>

                
              </div>

              {active === "FirstHorse" && <HorseBox data={HORSE_DATA} horseID={0} />}
              {active === "SecondHorse" && <HorseBox data={HORSE_DATA} horseID={1} />}
              {active === "ThirdHorse" && <HorseBox data={HORSE_DATA} horseID={2} />}
              {active === "FourthHorse" && <HorseBox data={HORSE_DATA} horseID={3} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickHorse;
