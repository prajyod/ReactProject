import Search from "./Search";
import  REST_DATA  from "../utils/data";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestauranCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restaurantData?.data;
  return (
    <div className="restaurant-card">
      <img alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} for Two</h4>
    </div>
  );
};


const Body = () => {
  const [restData, setRestData] = useState(REST_DATA);

  return (
    <div className="body">
      <Search />

      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restData.filter((res) => res.data.avgRating > 4);
            setRestData(filteredData);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restaurant-container">
      {restData.map((item) => (
        <RestauranCard key={item.data.id} restaurantData={item} />
      ))}
    </div>
    </div>
  );
};
export default Body;
