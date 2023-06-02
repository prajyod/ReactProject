import Search from "./Search";
import { CDN_URL, SWIGGY_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestauranCard = (props) => {
  const { restaurantData } = props;
  const { id,name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
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
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchDataAsync = async() => {
    const fetchData = await fetch(SWIGGY_URL);
    return await fetchData.json();
  }
  const fetchData = async () => {
    const fetchRestData = await fetchDataAsync();
    setRestData(fetchRestData.data.cards[2].data.data.cards);
    setFilteredData(fetchRestData.data.cards[2].data.data.cards);
  };

  const [searchText, setSearchText] = useState("");

  return restData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterSearch">
        <div className="searchText">
          <input
            type="text"
            value={searchText}
            onChange={(val) => {
              setSearchText(val.target.value);
            }}
          />
        </div>
        <div className="searchButton">
          <button
            onClick={async () => {
              const data = restData.filter((r) => r.data.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredData(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {/* <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restData.filter((res) => res.data.avgRating > 4);
            setRestData(filteredData);
          }}
        >
          Filter
        </button>
      </div> */}
      <div className="restaurant-container"> 
        {filteredData.map((item) => (
          <Link to={"/restaurant/"+item.data.id} key={item.data.id} ><RestauranCard restaurantData={item} /> </Link>//we are mapping to the link component so key should be on link.
        ))}
      </div>
    </div>
  );
};
export default Body;
