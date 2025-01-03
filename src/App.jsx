import React, { useState } from "react";
import backgroundImage from "./Components/bga.webp";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  const [input, setinput] = useState("");

  const Weather = () => {
    if (input.length > 0) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=44a5a3ddc626f313579c2353eb48e40a&units=metric`;

      axios.get(API).then((response) => {
        setdata(response.data);
      });

      setinput("");
    } else {
      alert("Please enter a city name");
    }
  };

  const currentDate = () => new Date().toUTCString().slice(0, 16);

  return (
    <>
      <div className="w-full h-screen bg-[#343D4C] flex items-center justify-end text-white">
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="w-[30%] h-[80%] absolute top-[5rem] left-[20rem] bg-red-300 rounded-2xl py-8 px-8 flex justify-between flex-col bg-contain"
        >
          <div>
            <h2 className="text-[2rem] font-semibold">{currentDate()}</h2>
            {/* <h2 className="text-[1.5rem] font-medium">
              {data.timezone ? data.timezone : "--"}
            </h2> */}
            <h2 className=" mt-5 text-[2.2rem] font-semibold">
              <i className="fa-solid fa-location-dot mr-2 text-white"></i>
              {data.name ? data.name : "--"},{data.sys? data.sys.country: "--"}
            </h2>
          </div>
          <div>
          <img
          src={`https:openweathermap.org/img/wn/${data.weather ? data.weather[0].icon : ""  }@2x.png`}
        />
            <h1 className="text-[5rem] font-semibold">
              {data.main ? data.main.temp : "---"}°C
            </h1>
            <h3 className="text-[1.5rem] font-semibold">
              {data.weather ? data.weather[0].description : "--"}
            </h3>
          </div>
        </div>
        <div className="w-[33%] h-[60%] bg-[#202731] rounded-2xl py-8 px-8 mr-[18rem] flex flex-col justify-between">
          <div>
            <h2 className="text-[1.3rem] font-semibold mb-4 mx-10">
              PRESSURE : {data.main ? data.main.pressure : "--"} in
            </h2>
            <h2 className="text-[1.3rem] font-semibold mb-4 mx-10">
              HUMIDITY : {data.main ? data.main.humidity : "--"} %
            </h2>
            <h2 className="text-[1.3rem] font-semibold mx-10">
              WIND : {data.wind ? data.wind.speed : "--"} Km/h
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <input
              className="pr-[10rem] px-4 py-2 rounded-lg text-[1.2rem] font-semibold text-black outline-none"
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />

            <button
              onClick={Weather}
              className="px-[5rem] py-2 mt-4 rounded-full font-semibold bg-[#3539B8] hover:bg-blue-600"
            >
              Add Location
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
