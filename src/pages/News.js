import React, { useEffect, useLayoutEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { db } from '../config/firebase'; // Adjust the path as necessary
import { collection, getDocs, doc } from 'firebase/firestore';


const News = ({ newsTitle, setnewsTitle }) => {

  const [ndata, setndata] = useState([
    { title: "", photo_url: "", date: "", address: "", city: "" },
  ]);

  useEffect(() => {
    const fetchnewsTitle = async () => {
      try {
        const eventDocs = await getDocs(collection(db, 'news'));
        const eventDatas = eventDocs.docs.map(doc => ({ id: doc.id, ...doc }));
        console.log("Fetched news data:", eventDatas);
        setndata(eventDatas);
        if (eventDatas.length > 0) {
          const { title } = eventDatas[0]; // Assuming you only want the first event
          setnewsTitle(title); // Update the event title state
        }
      } catch (err) {
        console.error("Error fetching news title:", err);
      }
    };
    fetchnewsTitle(); // Fetch event title on component mount
  }, [setnewsTitle]);
  return (
    <div className="flex flex-col mb-[120px]">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="about-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter  font-sans">News</h1>
          <p className="text-gray-200">
            We are a team of dedicated individuals, volunteers, and supporters
            who share a common vision: to alleviate suffering, promote equality,
            and uplift communities. With unwavering determination and a
            heartfelt passion for change, we have undertaken numerous projects
            and initiatives, all aimed at addressing the pressing challenges
            faced by marginalized individuals and communities.
          </p>
        </div>
      </div>
     
      <NewsCard />
    </div>
  );
};

export default News;
