import Search from "./Search";
import { CDN_URL, SWIGGY_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const RestauranCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restaurantData?.data;
  return (
    <div className="w-52 h-80 p-10 justify-between bg-cyan-50">
      <img alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} for Two</h4>
    </div>
  );
};

const Body = () => {

  const {user,setUser} = useContext(UserContext);
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchDataAsync = async () => {
    const fetchData = await fetch(SWIGGY_URL);
    return await fetchData.json();
  };
  const fetchData = async () => {
    const fetchRestData = await fetchDataAsync();
    setRestData(fetchRestData.data.cards[2].data.data.cards);
    setFilteredData(fetchRestData.data.cards[2].data.data.cards);
  };

  const [searchText, setSearchText] = useState("");

  const online = useOnline();

  if (!online) {
    return (
      <div>
        <h1>Please check your internet connection;</h1>
      </div>
    );
  }

  return restData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="pr-5 py-5">
          <input className="focus:border-sky-500"
            type="text"
            value={searchText}
            onChange={(val) => {
              setSearchText(val.target.value);
            }}
          />
        </div>
        <div className="pr-5 py-5 bg-purple-200 rounded-lg hover:bg-sky-700">
          <button
            onClick={async () => {
              const data = restData.filter((r) =>
                r.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredData(data);
            }}
          >
            Search
          </button>
        </div>
        <input value={user.username} onChange={ e => {setUser({
          ...user,
        username:e.target.value
      })}}/>
      <input value={user.email} onChange={ e => {setUser({
        ...user,
        email:e.target.value
      })}}/>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((item) => (
          <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
            <RestauranCard restaurantData={item} />{" "}
          </Link> //we are mapping to the link component so key should be on link.
        ))}
      </div>
    </div>
  );
};
export default Body;
