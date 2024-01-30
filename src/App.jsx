import React, { useState } from "react";
import axios from "axios";
import bg from "./assets/vibrant-sky-dusk-orange-blue-multi-colored-generative-ai.jpg";
import "./App.scss";

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
  return (
    <div className="main">
      <img src={bg} alt="bg" className="bg" />
      <div className="main_left">
        <div className="left_top">
          <div className="left_top_info">
            <h3>Sunday</h3>
            <span>10/15/2001</span>
            <h2>Mostly cloudy</h2>
          </div>
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            onKeyPress={searchLocaion}
            placeholder="Location Name"
          />
        </div>
        <div className="left_bottom">
          <h1 className="left_bottom_temp">
            9<sup>o</sup>C
          </h1>
          <span>Kabul, AF</span>
        </div>
      </div>
      <div className="main_right">
        <ul className="main_right_days">
          <li>
            <div>
              <span>sunny</span>
              <h2>
                12<sup>o</sup>C
              </h2>
            </div>
            Monday
          </li>
          <li>
            <div>
              <span>sunny</span>
              <h2>
                9<sup>o</sup>C
              </h2>
            </div>
            Monday
          </li>
          <li>
            <div>
              <span>sunny</span>
              <h2>
                9<sup>o</sup>C
              </h2>
            </div>
            Monday
          </li>
          <li>
            <div>
              <span>sunny</span>
              <h2>
                9<sup>o</sup>C
              </h2>
            </div>
            Monday
          </li>
          <li>
            <div>
              <span>sunny</span>
              <h2>
                9<sup>o</sup>C
              </h2>
            </div>
            Monday
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
