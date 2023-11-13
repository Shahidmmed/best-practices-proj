import VehicleCard from "../../components/cards/VehicleCard";
import { IDrivers } from "../../core/interfaces";
import "./DriverDetails.css";
import dots from "../../assets/dots.svg";
import phone from "../../assets/phone.svg";
import message from "../../assets/message.svg";
import map from "../../assets/map.png";

type Props = {
  user: IDrivers;
};

const DriverDetails: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <div className="details-nav">
        <div className="user-nav">
          <div>
            <img
              src={user.picture.thumbnail}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-avatar"
            />
          </div>
          <div className="user-info">
            <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
            <p className="user-id">ID: {user.id.value}</p>
          </div>
        </div>
        <div className="nav-icons">
          <div className="icon">
            <img
              src={message}
              alt="message"
              style={{ width: "30px", height: "30px", fill: "#fff" }}
            />
          </div>
          <div className="icon">
            <img
              src={phone}
              alt="phone"
              style={{ width: "30px", height: "30px", fill: "#fff" }}
            />
          </div>
          <div className="icon">
            <img
              src={dots}
              alt="dots"
              style={{ width: "30px", height: "30px", fill: "#fff" }}
            />
          </div>
        </div>
      </div>
      <div className="vehicle-card">
        <VehicleCard />
      </div>
      <div className="stats-section">
        <div className="routes">
          <h4>Routes</h4>
          <div className="map">
            <p>NOW ON THE WAY</p>
            <p className="package">ID: {user.id.value} . 139 packages</p>
            <small className="location">
              {user.location.state} {user.location.city}{" "}
              {user.location.street.name}
            </small>
          </div>
          <div className="routes">
            <div>
              <img src={map} alt="map" className="map" />
            </div>
            <div className="info-container">
              <div className="info-row">
                <p className="parameter">Distance</p>
                <p className="value">0.62 mi</p>
              </div>
              <div className="info-row">
                <p className="parameter">Time Left</p>
                <p className="value">10 min</p>
              </div>
              <div className="info-row">
                <p className="parameter">Weight</p>
                <p className="value">2,160 lbs</p>
              </div>
              <div className="info-row">
                <p className="parameter">Volume</p>
                <p className="value">3,357 in</p>
              </div>
            </div>
            <div className="deliveries">12/10/23</div>
            <div>
              <p>ID: {user.id.value} . 139 packages </p>
              <small>
                {user.location.state} {user.location.city}{" "}
                {user.location.street.name}
              </small>
            </div>
          </div>
        </div>
        <div className="driver-stats">
          <h4>Driver Statistics</h4>
          <div>
            <p>AVERAGE TIME PERDAY BY CATEGORY</p>
            <div>
              <div>On the Way</div>
              <div>Unloading</div>
              <div>Loading</div>
              <div>Waiting</div>
            </div>
          </div>
          <div className="graph">
            <p>WORKING TIME PER DAY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
