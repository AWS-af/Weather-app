import React, { useState } from "react";
import axios from "axios";
import bg from "./assets/vibrant-sky-dusk-orange-blue-multi-colored-generative-ai.jpg";
import "./App.scss";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=0f4154c67b4e7e3b911275e69698dcae&units=metric`;
  const searchLocaion = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return (
    <div className="main">
      <img src={bg} alt="bg" className="bg" />
      <div className="main_left">
        <div className="left_top">
          <div className="left_top_info">
            <h3>{dayOfWeek}</h3>
            <span>{`${day}/${month}/${year}`}</span>
            <h2>{data.list ? data.list[0].weather[0].description : "Sunny"}</h2>
          </div>
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            onKeyPress={searchLocaion}
            placeholder="Search location"
          />
        </div>
        <div className="left_bottom">
          <div className="bottom_temp_container">
            <h1 className="left_bottom_temp">
              {data.list ? data.list[0].main.temp.toFixed() : 12}&#8451;
            </h1>
            <span>
              {data.city
                ? data.city.name + ", " + data.city.country
                : "Kabul, AF"}
            </span>
          </div>
          <div className="bottom_more_info">
            <span>Feels like: {data.list ? data.list[0].main.feels_like : 1}&#8451;</span>
            <span>
              <LuWind />{'  '}
              {data.list ? data.list[0].wind.speed : 1} k/h
            </span>
            <span>
              <WiHumidity /> {data.list ? data.list[0].main.humidity : 1} %
            </span>
          </div>
        </div>
      </div>
      <div className="main_right">
        <ul className="main_right_days">
          <li>
            <div>
              <span>
                {data.list ? data.list[3].weather[0].description : "Sunny"}
              </span>
              <h2>
                {data.list ? data.list[3].main.temp.toFixed() : 12}&#8451;
              </h2>
            </div>
            <span>{`${day + 1}/${month}/${year}`}</span>
          </li>
          <li>
            <div>
              <span>
                {data.list ? data.list[11].weather[0].description : "Cloudy"}
              </span>
              <h2>
                {data.list ? data.list[11].main.temp.toFixed() : 12}&#8451;
              </h2>
            </div>
            {`${day + 2}/${month}/${year}`}
          </li>
          <li>
            <div>
              <span>
                {data.list ? data.list[19].weather[0].description : "Rainy"}
              </span>
              <h2>
                {data.list ? data.list[19].main.temp.toFixed() : 12}&#8451;
              </h2>
            </div>
            {`${day + 3}/${month}/${year}`}
          </li>
          <li>
            <div>
              <span>
                {data.list ? data.list[27].weather[0].description : "Sunny"}
              </span>
              <h2>
                {data.list ? data.list[27].main.temp.toFixed() : 12}&#8451;
              </h2>
            </div>
            {`${day + 4}/${month}/${year}`}
          </li>
          <li>
            <div>
              <span>
                {data.list ? data.list[35].weather[0].description : "Sunny"}
              </span>
              <h2>
                {data.list ? data.list[35].main.temp.toFixed() : 12}&#8451;
              </h2>
            </div>
            {`${day + 5}/${month}/${year}`}
          </li>
        </ul>
        <div className="aurthor_name">
          <a href="https://www.freepik.com/free-photo/vibrant-sky-dusk-orange-blue-multi-colored-generative-ai_40964909.htm#query=anime%20sky&position=1&from_view=keyword&track=ais&uuid=e7e87e52-f284-430a-80d8-125f661fc0dc">
            Image by vecstock
          </a>{" "}
          on Freepik
        </div>
      </div>
    </div>
  );
}

export default App;
