import Events1 from "./assets/Event1.png";
import Event2 from "./assets/Event2.jpg";
import Event3 from "./assets/Event3.jpg";
import Event4 from "./assets/Event4.jpg";
import Event5 from "./assets/Event5.jpg";
import Event6 from "./assets/Event6.jpg";
import Event7 from "./assets/Event7.jpg";
import Event8 from "./assets/Event8.jpg";

function Events() {
  return (
    <div id="events-section">
<div className="bg-gradient-to-b from-[#0a0f0c] via-[#0b2a15] to-[#0a0f0c] pt-8 pb-20">
<div className="flex justify-center">
          <span className="text-3xl md:text-4xl font-extrabold">
            <span className="text-green-500">Past</span>
            <span className="text-white">Events</span>
          </span>
        </div>
        <div className="flex justify-center mt-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-0">
            {[
              { img: Events1, title: "Degree in a Day" },
              { img: Event2, title: "OSSome Hacks" },
              { img: Event3, title: "Figma Fiesta" },
              { img: Event4, title: "Jingle Mania" },
              { img: Event5, title: "GraphQ" },
              { img: Event6, title: "Unhashed" },
              { img: Event7, title: "Women In Tech" },
              { img: Event8, title: "Skilltober" },
            ].map((event, index) => (
              <div key={index} className="text-white flex flex-col items-center group mb-10 md:mb-0">
                <div className="relative mb-14">
                  <img
                    src={event.img}
                   
                    className="h-auto w-full md:h-[450px] md:w-[450px] border-4 border-green-500 transition-all duration-300 group-hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.7)]"
                  />
                  <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-xl font-bold">
                    {event.title}
                  </span>
                  <div className="absolute -bottom-14 right-0 bg-green-500 h-[38px] w-[170px] rounded-md cursor-pointer transition-all duration-300 group-hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.7)] mt-4">
                    <span className="flex justify-center items-center h-full text-black font-semibold text-lg">
                      Get Certificate
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;