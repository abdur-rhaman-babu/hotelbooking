import { IoIosBed } from "react-icons/io";
import DateRangePicker from "../DateRange/DateRangePicker";
import "./Home.css";
import { useState } from "react";
const Home = () => {
  const [isdemand, setIsDemand] = useState(false);
  const [increment, setIncrement] = useState({
    adult: 0,
    children: 0,
    rooms: 0,
  });

  const incrementHandler = (field) => {
    // console.log(field);
    setIncrement((prev) => ({
      ...prev,
      [field]: prev[field] + 1,
    }));
  };

  const decrementHandler = (field) => {
    if (increment[field] > 0) {
      setIncrement((prev) => ({
        ...prev,
        [field]: prev[field] - 1,
      }));
    }
  };

  return (
    <>
      <div className="search-bar">
        
        <div className="global-input">
          <i>
            <IoIosBed />
          </i>
          <input type="text" placeholder="Where are you going?" />
        </div>

        <div className="global-input-calender">
          <i className="calender-input">
            <DateRangePicker />
          </i>
        </div>

        <div className="global-input booking-rooms">
          <div onClick={() => setIsDemand(!isdemand)}>
            audult {increment.adult} children {increment.children} rooms
            {increment.rooms}
          </div>
        </div>
        <div className="search-btn">
          <button>Search</button>
        </div>
      </div>

      <div className="demand-content">
        {isdemand && (
          <div>
            <div className="demand-rooms">
              <p>Rooms</p>
              <button onClick={() => incrementHandler("rooms")}>+</button>
              <p>{increment.rooms}</p>
              <button
                onClick={() => decrementHandler("rooms")}
                disabled={increment.rooms === 0}
              >
                -
              </button>
            </div>

            <div className="demand-rooms">
              <p>Adult</p>
              <button onClick={() => incrementHandler("adult")}>+</button>
              <p>{increment.adult}</p>
              <button
                onClick={() => decrementHandler("adult")}
                disabled={increment.adult === 0}
              >
                -
              </button>
            </div>

            <div className="demand-rooms">
              <p>Children</p>
              <button onClick={() => incrementHandler("children")}>+</button>
              <p>{increment.children}</p>
              <button
                onClick={() => decrementHandler("children")}
                disabled={increment.children === 0}
              >
                -
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
