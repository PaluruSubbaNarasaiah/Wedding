import { useEffect, useState } from "react";
import { getCars } from "../api/carService.js";
import { FaHeart, FaGasPump, FaUserFriends } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import carImage1 from "../assets/car1.png"; // Default car image
import "../styles/CarList.css";
 
const CarList = () => {
  const [cars, setCars] = useState([]);
  const [likedCars, setLikedCars] = useState({});
  const [showAll, setShowAll] = useState(false);
 
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carData = await getCars();
        setCars(carData.slice(0, 16));
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCars();
  }, []);
  
 
  const toggleLike = (index) => {
    setLikedCars((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
 
  return (
    <div className="car-list-container">
      {/* Heading Section */}
      <div className="car-list-header">
        <div className="left-section">
          <button className="btn-popular">Popular</button>
        </div>
        <div className="right-section">
          <button className="btn-view-all" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
 
      {/* Car Cards */}
      <div className="car-list">
        {(showAll ? cars : cars.slice(0, 8)).map((car, index) => (
          <div key={index} className="car-card">
           
            {/* Like Icon */}
            <span
              className={`like-icon ${likedCars[index] ? "liked" : ""}`}
              onClick={() => toggleLike(index)}
            >
              <FaHeart />
            </span>
 
            {/* Car Image */}
            <img
              src={car.image || carImage1} // Ensuring image visibility
              alt={car.title}
              className="car-image"
            />
 
            {/* Car Title */}
            <h5>{car.title}</h5>
 
            {/* Price & Rent Button */}
            <div className="card-footer">
              <p className="price">Price: ${99 + index} / day</p>
              <button className="btn-rent">Rent Now</button>
            </div>
 
            {/* Car Info Icons */}
            <div className="car-info">
              <span className="info-item">
                <FaGasPump /> {car.fuelCapacity || "90L"}
              </span>
              <span className="info-item">
                <GiCarWheel /> {car.transmission || "Manual"}
              </span>
              <span className="info-item">
                <FaUserFriends /> {car.seatingCapacity || "6 People"}
              </span>
            </div>
 
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default CarList;
 