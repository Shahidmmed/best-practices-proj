import { useEffect, useState } from "react";
import "./Drivers.css";
import { IDrivers } from "../../core/interfaces";
import DriverDetails from "../DriverDetails/DriverDetails";

const Drivers = () => {
  const [users, setUsers] = useState<IDrivers[] | null>();
  const [selectedUser, setSelectedUser] = useState<IDrivers>();
  const [isFavoritesOpen, setFavoritesOpen] = useState(true);
  const [isTrucksOpen, setTrucksOpen] = useState(true);
  const [isVansOpen, setVansOpen] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching user data", error));
  }, []);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  return (
    <div className="drivers">
      <div className="drivers-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search..."
          />
        </div>
        <div
          className={`collapsible favorites ${isFavoritesOpen ? "show" : ""}`}
        >
          <div className="section-title">
            <span>FAVORITES</span>
            <button
              className="dropdown-btn"
              onClick={() => setFavoritesOpen(!isFavoritesOpen)}
            >
              &#709;
            </button>
          </div>
          <div className="user-list">
            {isFavoritesOpen &&
              users &&
              users.map((user, index) => (
                <div
                  key={index}
                  className={`user-item ${
                    user === selectedUser ? "selected-driver" : ""
                  }`}
                  onClick={() => handleUserClick(user)}
                >
                  <img
                    src={user.picture.thumbnail}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <div>
                      <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
                      {/* <p className="eta">ON THE WAY</p> */}
                    </div>
                    <p className="user-car">{user.vehicle}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={`collapsible trucks ${isTrucksOpen ? "show" : ""}`}>
          <div className="section-title">
            <span>TRUCKS</span>
            <button
              className="dropdown-btn"
              onClick={() => setTrucksOpen(!isTrucksOpen)}
            >
              &#709;
            </button>
          </div>
          <div className="user-list">
            {isTrucksOpen &&
              users &&
              users.map((user, index) => (
                <div
                  key={index}
                  className="user-item"
                  onClick={() => handleUserClick(user)}
                >
                  <img
                    src={user.picture.thumbnail}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
                    <p className="user-car">{user.vehicle}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={`collapsible vans ${isVansOpen ? "show" : ""}`}>
          <div className="section-title">
            <span>Vans</span>
            <button
              className="dropdown-btn"
              onClick={() => setVansOpen(!isVansOpen)}
            >
              &#709;
            </button>
          </div>
          <div className="user-list">
            {isVansOpen &&
              users &&
              users.map((user, index) => (
                <div
                  key={index}
                  className="user-item"
                  onClick={() => handleUserClick(user)}
                >
                  <img
                    src={user.picture.thumbnail}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="user-avatar"
                  />
                  <div className="user-info">
                    <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
                    <p className="user-car">{user.vehicle}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="add-new-vehicle">
          <button className="add-btn">Add New Vehicle</button>
        </div>
      </div>
      <div className="user-details">
        {selectedUser && <DriverDetails user={selectedUser} />}
      </div>
    </div>
  );
};

export default Drivers;
