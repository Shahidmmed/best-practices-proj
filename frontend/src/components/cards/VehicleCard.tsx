import Truck from "../../assets/truck.jpg";
import "./cards.css";

const VehicleCard = () => {
  return (
    <div className="vehicle-card">
      <div className="vehicle">
        <div className="vehicle-details">
          <div className="vehicle-name">Volkswagen Transporter</div>
          <div className="flex-section">
            <div>
              <p>Payload</p>
            </div>
            <div>
              <p>Load Volume</p>
            </div>
          </div>
          <div className="flex-section">
            <div>
              <p>Load Length</p>
            </div>
            <div>
              <p>Load Width</p>
            </div>
          </div>
          <div className="flex-section">
            <div></div>
            <div>
              <p>Documents</p>
            </div>
          </div>
        </div>
        <div className="vehicle-img">
          <img src={Truck} alt="truck" className="vehicle-img" />
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
