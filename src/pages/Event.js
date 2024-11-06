// import Card from "../components/Card";
// import EventsCards from "../components/EventsCards";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Events = () => {
//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//     // console.log("fdfddf");
//   }, []);

//   const [data, setdata] = useState([]);
//   const [Ldata, setLdata] = useState([
//     { title: "", photo_url: "", date: "", address: "", city: "" },
//   ]);
//   return (
//     <div className="w-full mb-[120px]">
//       <div className="w-full h-20 bg-orange-600 flex items-center justify-center">
//         <h1 className="text-white font-sans text-5xl">Events</h1>
//       </div>
//       <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center relative">
//         <iframe
//           width="100%"
//           height="100%"
//           frameborder="0"
//           marginheight="0"
//           marginwidth="0"
//           title="map"
//           scrolling="no"
//           src="https://maps.google.com/maps?q=Manne+Majra,+Chamkaur+Sahib,+Ropar,+Punjab,+India&hl=en&ie=UTF8&t=&z=14&iwloc=B&output=embed"
//         ></iframe>
//         <div className="absolute m-auto left-5 md:top-10 md:left-10">
//           <div className="w-[250px] bg-white border-2 border-black  flex flex-col">
//             <img src={Ldata[0].photo_url} className="w-full" />
//             <h3 className="text-center text-orange-600 font-bold mt-2">
//               Upcoming Event
//             </h3>

//             <p className="text-center p-1">
//               {Ldata[0].title}
//               <br /> {Ldata[0].date.slice(0, 10)} {Ldata[0].date.slice(11, 16)}{" "}
//               <br /> {Ldata[0].address}
//               <br />
//               {Ldata[0].city}
//             </p>
//           </div>
//         </div>
//       </div>
//       <h1 className="text-center text-5xl mt-5">
//         Upcoming{" "}
//         <span className="text-orange-600 text-center text-5xl mt-5">Events</span>
//       </h1>
//       <EventsCards data={data} />
//     </div>
//   );
// };

// export default Events;







import Card from "../components/Card";
import EventsCards from "../components/EventsCards";

import React, { useEffect, useState } from "react";
import { db } from '../config/firebase'; // Adjust the path as necessary
import { collection, getDocs, doc } from 'firebase/firestore';

const Events = ({ eventTitle, setEventTitle }) => {


  const [data, setData] = useState([]);
  const [Ldata, setLdata] = useState([
    { title: "", photo_url: "", date: "", address: "", city: "" },
  ]);

  useEffect(() => {
    const fetchEventTitle = async () => {
      try {
        const eventDoc = await getDocs(collection(db, 'events'));
        const eventData = eventDoc.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (eventData.length > 0) {
          const { title } = eventData[0]; // Assuming you only want the first event
          setEventTitle(title); // Update the event title state
        }
      } catch (err) {
        console.error('Error fetching event title:', err);
      }
    };
    fetchEventTitle(); // Fetch event title on component mount
  }, []);




  return (
    <div className="w-full mb-[120px]">
      <div className="w-full h-20 bg-orange-600 flex items-center justify-center">
        <h1 className="text-white font-sans text-5xl">Events</h1>
      </div>
      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center relative">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?q=Manne+Majra,+Chamkaur+Sahib,+Ropar,+Punjab,+India&hl=en&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
        <div className="absolute m-auto left-5 md:top-10 md:left-10">
          <div className="w-[250px] bg-white border-2 border-black flex flex-col">
            <img src={Ldata[0].photo_url} className="w-full" />
            <h3 className="text-center text-orange-600 font-bold mt-2">
              Upcoming Event
            </h3>

            <p className="text-center p-1">
              {eventTitle || Ldata[0].title} {/* Show the new event title if available */}


              {/* {eventTitle || Ldata[0].title} */}
            </p>
          </div>
        </div>
      </div>

      {/* Input field to enter a new event title */}
      <div className="text-center mt-4">

      </div>

      <h1 className="text-center text-5xl mt-5">
        Upcoming{" "}
        <span className="text-orange-600 text-center text-5xl mt-5">Events</span>
      </h1>
      {/* <p style={{ margin: "20px" }}> */}
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", margin:"10px"}}>
      <div className="w-[1000px] h-[300px] bg-white border-2 border-black flex flex-col text-center p-1" >
      <p className="text-center p-1">
        {eventTitle || Ldata[0].title} {/* Show the new event title if available */}


        {/* {eventTitle || Ldata[0].title} */}
      </p>
      </div>
      </div>
      <EventsCards data={data} />
    </div>
  );
};

export default Events;