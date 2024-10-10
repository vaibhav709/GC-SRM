import React from "react";
import background from "./assets/heroimg_events.87fea314.png";
import image from "./assets/image.gif";

function Home() {
  return (
    <div id="home-section" className="relative overflow-x-hidden">
      <div
        className="h-[400px] md:h-[670px] w-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="absolute top-[100px] left-[5%] right-[5%] md:left-[150px] md:right-auto h-auto md:h-[400px] w-auto md:w-[1200px] bg-customGray p-4 md:p-0">
        <img
          src={image}
          className="h-[150px] md:h-[250px] mx-auto md:ml-[500px] mt-4 md:mt-10"
        />
        <span className="text-white text-center md:text-left block md:ml-[450px] mt-4 text-xl md:text-2xl">
          New Fun Events Coming Soon....
        </span>
      </div>
    </div>
  );
}

export default Home;