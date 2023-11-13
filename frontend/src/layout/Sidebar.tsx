import "./Layout.css";
import SquaresIcon from "../assets/squares.svg";
import MapIcon from "../assets/map.svg";
import RouteIcon from "../assets/route.svg";
import TruckIcon from "../assets/truck.svg";
import HomeIcon from "../assets/home.svg";
import ChatIcon from "../assets/chat.svg";
import GraphIcon from "../assets/graph.svg";
import Notification from "../assets/notification.svg";

const iconPaths = [
  {
    name: "Squares",
    svg: SquaresIcon,
  },
  {
    name: "Map",
    svg: MapIcon,
  },
  {
    name: "Route",
    svg: RouteIcon,
  },
  {
    name: "Truck",
    svg: TruckIcon,
  },
  {
    name: "Home",
    svg: HomeIcon,
  },
  {
    name: "Chat",
    svg: ChatIcon,
  },
  {
    name: "Graph",
    svg: GraphIcon,
  },
  {
    name: "Notification",
    svg: Notification,
  },
];

const SideBar = () => {
  return (
    <div className="side-nav-bar">
      <div className="top-icons">
        {iconPaths.slice(0, 5).map((icon, index) => (
          <div className="icon" key={index}>
            <img
              src={icon.svg}
              alt={icon.name}
              style={{ width: "25px", height: "25px", fill: "#fff" }}
            />
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="bottom-icons">
        {iconPaths.slice(5, 8).map((icon, index) => (
          <div className="icon" key={index}>
            <img
              src={icon.svg}
              alt={icon.name}
              style={{ width: "25px", height: "25px", fill: "#fff" }}
            />
          </div>
        ))}
      </div>
      <div className="profile-picture">{/* Add profile picture */}</div>
    </div>
  );
};

export default SideBar;
