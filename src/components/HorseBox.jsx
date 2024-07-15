import { useState } from "react";

function HorseBox({ data, horseID }) {
  const [horseLoad, setHorseLoad] = useState(true);
  return (
    <>
      {data[horseID].map((horse, id) => (
        <div key={id} className="box-cars">

          {/* horse */}
          <div className="pick-car">
            {horseLoad && <span className="loader"></span>}
            <img
              style={{ display: horseLoad ? "none" : "block" }}
              src={horse.img}
              alt="horse_img"
              onLoad={() => setHorseLoad(false)}
            />
          </div>

          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${horse.price}</span>/ rent per hour
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{horse.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Temperament</span>
                <span>{horse.temprament}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Age</span>
                <span>{horse.age}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Riding Style</span>
                <span>{horse.Rstyle}</span>
              </div>
            </div>
            
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Book Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default HorseBox;
