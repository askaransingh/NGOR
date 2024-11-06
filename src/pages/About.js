
// import React from "react";
// import "../App.css";
// import Card from "../components/Card";
// import AboutCard from "../components/AboutCard";
// import axios from "axios";
// import { useState } from "react";

// const About = () => {
//   const [data, setdata] = useState([]);
//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const images = [
//     { src: 'assets/balkar_singh.jpg', alt: 'Image 1', text: 'Balkar Singh, President' },
//     { src: 'assets/ramansir.jpg', alt: 'Image 2', text: 'Ramandeep Singh, Vice President' },
//   ];

//   const images1 = [
//     { src: 'assets/dalwinder_singh.jpg', alt: 'Image 3', text: 'Dalwinder Singh, Secretary' },
//   ];

//   const images2 = [
//     { src: 'assets/Amritpal_singh.jpg', alt: 'Image 1', text: 'Amritpal Singh' },
//     { src: 'assets/Jasmeen_kaur.jpg', alt: 'Image 2', text: 'Jasmeen Kaur' },
//   ];

//   const images3 = [
//     { src: 'assets/Simrandeep_kaur.jpg', alt: 'Image 1', text: 'Simrandeep Kaur' },
//     { src: 'assets/Harminder_kaur.jpg', alt: 'Image 2', text: 'Harminder Kaur' },
//     { src: 'assets/Kamalpreet_singh.jpg', alt: 'Image 3', text: 'Kamalpreet Singh' },
//   ];

//   const images4 = [
//     { src: 'assets/Gurpreet_singh.jpg', alt: 'Image 1', text: 'Gurpreet Singh' },
//     { src: 'assets/Harshdeep kaur.jpg', alt: 'Image 2', text: 'Harshdeep Kaur' },
//     { src: 'assets/Kirandeep_kaur.jpg', alt: 'Image 3', text: 'Kirandeep Kaur' },
//     { src: 'assets/Jagjot.kaur.jpg', alt: 'Image 4', text: 'Jagjot Kaur' },
//   ];

//   const images5 = [
//     { src: 'assets/Sandeep_kaur.jpg', alt: 'Image 1', text: 'Sandeep Kaur' },
//     { src: 'assets/Laveleen_kaur.jpg', alt: 'Image 2', text: 'Loveleen Kaur' },
//     { src: 'assets/Jagjit_singh.jpg', alt: 'Image 3', text: 'Jagjit Singh' },
//     { src: 'assets/Gurjpal_singh.jpg', alt: 'Image 4', text: 'Gurjpal Singh' },
//     { src: 'assets/Gaganpreet_kaur.jpg', alt: 'Image 5', text: 'Gaganpreet Kaur' },
//   ];

//   const images6 = [
//     { src: 'assets/Jaspreet_singh.jpg', alt: 'Image 1', text: 'Jaspreet Singh' },
//     { src: 'assets/Manpreet_kaur.jpg', alt: 'Image 2', text: 'Manpreet Kaur' },
//     { src: 'assets/Gurmanpreet_kaur.jpg', alt: 'Image 3', text: 'Gurmanpreet Kaur' },
//     { src: 'assets/Mankirat_singh.jpg', alt: 'Image 4', text: 'Mankirat Singh' },
//     { src: 'assets/Sarabjit_singh.jpg', alt: 'Image 5', text: 'Sarabjit Singh' },
//     { src: 'assets/Jashdeep_kaur.jpg', alt: 'Image 6', text: 'Jashdeep Kaur' },
//     { src: 'assets/Ravinder_singh.jpg', alt: 'Image 7', text: 'Ravinder Singh' },
//   ];

//   const imageStyle = {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     objectPosition: 'top',
//   };

//   const textStyle = {
//     fontSize: '14px',
//     marginTop: '10px',
//   };

//   return (
//     <div className="flex flex-col">
//       <div
//         className="flex justify-center items-start w-full h-[320px] bg-cover bg-center bg-no-repeat p-5"
//         id="our-team2"
//         style={{
//           backgroundImage: "url('assets/earth7.jpg')",
//         }}
//       >
//         <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
//           <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
//           <p className="text-gray-200">
//             We are a team of dedicated individuals, volunteers, and supporters who share a common vision: to alleviate suffering, promote equality, and uplift communities.
//           </p>
//         </div>
//       </div>

//       <h1 style={{
//         fontSize: "50px",
//         fontWeight: "bold",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "10rem",
//         color: "rgb(4, 4, 54)",
//       }}>Our team</h1>

//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         backgroundColor: "rgb(241, 126, 38)",
//         padding: "20px",
//         borderRadius: "20px",
//         marginTop: "2rem",
//       }}>
//         {[images].map((imageGroup, groupIndex) => (
//           <div key={groupIndex} style={{
//               // <div  style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginBottom: '20px',
//             gap: '20px', // Adds spacing between elements
//           }}>
//              {/* {imageGroup.map((image, index) => (
//               <div key={index} style={{ textAlign: 'center' }}>
//                 <img src={image.src} alt={image.alt} style={imageStyle} />
//                 <p style={textStyle}>{image.text}</p>
//               </div>
//             ))}  */}

//             <div

//               style={{
//                 display: "flex",
//                 backgroundColor: "rgb(241, 126, 38)",
//                 padding: "20px",
//                 borderRadius: "20px",
//                 marginTop: "0rem",
//                 height: "1200px",
//               }}
//             >
//               <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 marginLeft: '160px'


//               }}>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: '20px', // Add some margin between the two sets of images
//                 }}>
//                   {images.map((image, index) => (
//                     <div key={index}

//                       className="team-member"
//                       style={{
//                         marginRight: '40px',
//                         textAlign: 'center',
//                       }}>
//                       <img src={image.src} alt={image.alt} style={{
//                         width: '100px',
//                         height: '100px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         objectPosition: 'top',
//                         marginLeft: '30px'
//                       }} />
//                       <p style={textStyle}>{image.text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',

//                 }}>
//                   {images1.map((image1, index) => (
//                     <div key={index} style={{
//                       marginRight: '70px',
//                       textAlign: 'center',
//                     }}>
//                       <img src={image1.src} alt={image1.alt} style={{
//                         width: '100px',
//                         height: '100px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         objectPosition: 'top',
//                         marginLeft: '30px'
//                       }} />
//                       <p style={textStyle}>{image1.text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: '20px', // Add some margin between the two sets of images
//                 }}>
//                   {images2.map((image, index) => (
//                     <div key={index} style={{
//                       marginRight: '70px',
//                       textAlign: 'center',
//                     }}>
//                       <img src={image.src} alt={image.alt} style={imageStyle} />
//                       <p style={textStyle}>{image.text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: '20px', // Add some margin between the two sets of images
//                 }}>
//                   {images3.map((image, index) => (
//                     <div key={index} style={{
//                       marginRight: '70px',
//                       textAlign: 'center',
//                     }}>
//                       <img src={image.src} alt={image.alt} style={imageStyle} />
//                       <p style={textStyle}>{image.text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: '20px', // Add some margin between the two sets of images
//                 }}>
//                   {images4.map((image, index) => (
//                     <div key={index} style={{
//                       marginRight: '70px',
//                       textAlign: 'center',
//                     }}>
//                       <img src={image.src} alt={image.alt} style={imageStyle} />
//                       <p style={textStyle}>{image.text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: '20px', // Add some margin between the two sets of images
//                 }}>
//                   {images5.map((image, index) => (
//                     <div key={index} style={{
//                       marginRight: '70px',
//                       textAlign: 'center',
//                     }}>
//                       <img src={image.src} alt={image.alt} style={imageStyle} />
//                       <p style={textStyle}>{image.text}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginBottom: '20px', // Add some margin between the two sets of images
//                 }}>
//                   {images6.map((image, index) => (
//                     <div key={index} style={{
//                       marginRight: '70px',
//                       textAlign: 'center',
//                     }}>
//                       <img src={image.src} alt={image.alt} style={imageStyle} />
//                       <p style={textStyle}>{image.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//          ))} 
//       </div>

//       <style>
//         {`
//           /* General styles */
//           .flex {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           /* Adjust font size on smaller screens */
//           @media (max-width: 768px) {
//             h1 {
//               font-size: 36px;
//             }
//             ${imageStyle.width} = '80px';
//             ${imageStyle.height} = '80px';
//           }

//           /* Stack images in a single column on small screens */
//           @media (max-width: 600px) {
//             .team-member {
//               margin-bottom: 20px;
//               margin-right: 0;
//               width: 100%;
//               justify-content: center;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default About;




import React from "react";
import "../App.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    { src: 'assets/balkar_singh.jpg', text: 'Balkar Singh, President' },
    { src: 'assets/ramansir.jpg', text: 'Ramandeep Singh, Vice President' },
    { src: 'assets/dalwinder_singh.jpg', text: 'Dalwinder Singh, Secretary' },
    { src: 'assets/Amritpal_singh.jpg', text: 'Amritpal Singh' },
    { src: 'assets/Jasmeen_kaur.jpg', text: 'Jasmeen Kaur' },
    { src: 'assets/Simrandeep_kaur.jpg', text: 'Simrandeep Kaur' },
    { src: 'assets/Harminder_kaur.jpg', text: 'Harminder Kaur' },
    { src: 'assets/Kamalpreet_singh.jpg', text: 'Kamalpreet Singh' },
    { src: 'assets/Gurpreet_singh.jpg', text: 'Gurpreet Singh' },
    { src: 'assets/Harshdeep kaur.jpg', text: 'Harshdeep Kaur' },
    { src: 'assets/Kirandeep_kaur.jpg', text: 'Kirandeep Kaur' },
    { src: 'assets/Jagjot.kaur.jpg', text: 'Jagjot Kaur' },
    { src: 'assets/Sandeep_kaur.jpg', text: 'Sandeep Kaur' },
    { src: 'assets/Laveleen_kaur.jpg', text: 'Loveleen Kaur' },
    { src: 'assets/Jagjit_singh.jpg', text: 'Jagjit Singh' },
    { src: 'assets/Gurjpal_singh.jpg', text: 'Gurjpal Singh' },
    { src: 'assets/Gaganpreet_kaur.jpg', text: 'Gaganpreet Kaur' },
    { src: 'assets/Jaspreet_singh.jpg', text: 'Jaspreet Singh' },
    { src: 'assets/Manpreet_kaur.jpg', text: 'Manpreet Kaur' },
    { src: 'assets/Gurmanpreet_kaur.jpg', text: 'Gurmanpreet Kaur' },
    { src: 'assets/Mankirat_singh.jpg', text: 'Mankirat Singh' },
    { src: 'assets/Sarabjit_singh.jpg', text: 'Sarabjit Singh' },
    { src: 'assets/Jashdeep_kaur.jpg', text: 'Jashdeep Kaur' },
    { src: 'assets/Ravinder_singh.jpg', text: 'Ravinder Singh' },
  ];

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-center p-5"
        style={{ backgroundImage: "url('assets/earth7.jpg')" }}
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
          <p className="text-gray-200">
            We are a team of dedicated individuals, volunteers, and supporters who share a common vision: to alleviate suffering, promote equality, and uplift communities.
          </p>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-center mt-10 text-[rgb(4, 4, 54)]">Our Team</h1>
   <div style={{ backgroundColor: 'rgb(241, 126, 38)', borderRadius: '8px' }}>
      <div className="flex flex-wrap justify-center items-center bg-[rgb(241, 126, 38)] p-5 rounded-lg mt-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img
              src={member.src}
              alt={member.text}
              className="w-24 h-24 rounded-full object-cover object-top"
            />
            <p className="text-sm mt-2">{member.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default About;


// import React from "react";
// import "../App.css";
// import { useEffect } from "react";

// const About = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const teamMembers = [
//     { src: 'assets/balkar_singh.jpg', text: 'Balkar Singh, President' },
//     { src: 'assets/ramansir.jpg', text: 'Ramandeep Singh, Vice President' },
//     { src: 'assets/dalwinder_singh.jpg', text: 'Dalwinder Singh, Secretary' },
//     { src: 'assets/Amritpal_singh.jpg', text: 'Amritpal Singh' },
//     { src: 'assets/Jasmeen_kaur.jpg', text: 'Jasmeen Kaur' },
//     { src: 'assets/Simrandeep_kaur.jpg', text: 'Simrandeep Kaur' },
//     { src: 'assets/Harminder_kaur.jpg', text: 'Harminder Kaur' },
//     { src: 'assets/Kamalpreet_singh.jpg', text: 'Kamalpreet Singh' },
//     { src: 'assets/Gurpreet_singh.jpg', text: 'Gurpreet Singh' },
//     { src: 'assets/Harshdeep kaur.jpg', text: 'Harshdeep Kaur' },
//     { src: 'assets/Kirandeep_kaur.jpg', text: 'Kirandeep Kaur' },
//     { src: 'assets/Jagjot.kaur.jpg', text: 'Jagjot Kaur' },
//     { src: 'assets/Sandeep_kaur.jpg', text: 'Sandeep Kaur' },
//     { src: 'assets/Laveleen_kaur.jpg', text: 'Loveleen Kaur' },
//     { src: 'assets/Jagjit_singh.jpg', text: 'Jagjit Singh' },
//     { src: 'assets/Gurjpal_singh.jpg', text: 'Gurjpal Singh' },
//     { src: 'assets/Gaganpreet_kaur.jpg', text: 'Gaganpreet Kaur' },
//     { src: 'assets/Jaspreet_singh.jpg', text: 'Jaspreet Singh' },
//     { src: 'assets/Manpreet_kaur.jpg', text: 'Manpreet Kaur' },
//     { src: 'assets/Gurmanpreet_kaur.jpg', text: 'Gurmanpreet Kaur' },
//     { src: 'assets/Mankirat_singh.jpg', text: 'Mankirat Singh' },
//     { src: 'assets/Sarabjit_singh.jpg', text: 'Sarabjit Singh' },
//     { src: 'assets/Jashdeep_kaur.jpg', text: 'Jashdeep Kaur' },
//     { src: 'assets/Ravinder_singh.jpg', text: 'Ravinder Singh' },
//   ];

//   return (
//     <div className="flex flex-col">
//       <div
//         className="flex justify-center items-start w-full h-[320px] bg-cover bg-center p-5"
//         style={{ backgroundImage: "url('assets/earth7.jpg')" }}
//       >
//         <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
//           <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
//           <p className="text-gray-200">
//             We are a team of dedicated individuals, volunteers, and supporters who share a common vision: to alleviate suffering, promote equality, and uplift communities.
//           </p>
//         </div>
//       </div>

//       <h1 className="text-5xl font-bold text-center mt-10 text-[rgb(4, 4, 54)]">Our Team</h1>

//       <div className="pyramid-container mt-5">
//         {teamMembers.map((member, index) => (
//             <div key={index} className="member">  
//               <img
  
//                 src={member.src}
//                 alt={member.text}
//                 className="w-24 h-24 rounded-full object-cover object-top"
//               />
//               <p className="text-sm mt-2">{member.text}</p>
//             </div>
//           ))}
//         </div>
//    </div>
//     );
//   };
  
//   export default About; 
  

// import React from "react";
// import "../App.css";
// import { useState, useEffect } from "react";

// const About = () => {
//   const [data, setdata] = useState([]);
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const images = [
//     { src: 'assets/balkar_singh.jpg', alt: 'Image 1', text: 'Balkar Singh, President' },
//     { src: 'assets/ramansir.jpg', alt: 'Image 2', text: 'Ramandeep Singh, Vice President' },
//     { src: 'assets/dalwinder_singh.jpg', alt: 'Image 3', text: 'Dalwinder Singh, Secretary' },
//     { src: 'assets/Amritpal_singh.jpg', alt: 'Image 4', text: 'Amritpal Singh' },
//     { src: 'assets/Jasmeen_kaur.jpg', alt: 'Image 5', text: 'Jasmeen Kaur' },
//     { src: 'assets/Simrandeep_kaur.jpg', alt: 'Image 6', text: 'Simrandeep Kaur' },
//     { src: 'assets/Harminder_kaur.jpg', alt: 'Image 7', text: 'Harminder Kaur' },
//     { src: 'assets/Kamalpreet_singh.jpg', alt: 'Image 8', text: 'Kamalpreet Singh' },
//     { src: 'assets/Gurpreet_singh.jpg', alt: 'Image 9', text: 'Gurpreet Singh' },
//   ];

//   const imageStyle = {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     objectPosition: 'top',
//   };

//   const textStyle = {
//     fontSize: '14px',
//     marginTop: '10px',
//   };

//   return (
//     <div className="flex flex-col">
//       <div
//         className="flex justify-center items-start w-full h-[320px] bg-cover bg-center bg-no-repeat p-5"
//         id="our-team2"
//         style={{
//           backgroundImage: "url('assets/earth7.jpg')",
//         }}
//       >
//         <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
//           <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
//           <p className="text-gray-200">
//             We are a team of dedicated individuals, volunteers, and supporters who share a common vision: to alleviate suffering, promote equality, and uplift communities.
//           </p>
//         </div>
//       </div>

//       <h1 style={{
//         fontSize: "50px",
//         fontWeight: "bold",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "10rem",
//         color: "rgb(4, 4, 54)",
//       }}>Our Team</h1>

//       <div className="team-container">
//         {images.map((image, index) => (
//           <div key={index} className="team-member" style={{ textAlign: 'center' }}>
//             <img src={image.src} alt={image.alt} style={imageStyle} />
//             <p style={textStyle}>{image.text}</p>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           .flex {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           .team-container {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//             background-color: rgb(241, 126, 38);
//             padding: 20px;
//             border-radius: 20px;
//             margin-top: 2rem;
//           }

//           /* Pyramid layout on large screens */
//           @media (min-width: 1200px) {
//             .team-container {
//               display: grid;
//               grid-template-columns: repeat(5, 1fr);
//               gap: 20px;
//             }
//             .team-member:nth-child(1) { grid-column: 3; }
//             .team-member:nth-child(2), .team-member:nth-child(3) { grid-column: 2 / span 2; }
//             .team-member:nth-child(4), .team-member:nth-child(5), .team-member:nth-child(6) { grid-column: 1 / span 3; }
//             .team-member:nth-child(7), .team-member:nth-child(8), .team-member:nth-child(9) { grid-column: 1 / span 5; }
//           }

//           /* Responsive styling */
//           @media (max-width: 768px) {
//             h1 {
//               font-size: 36px;
//             }
//             .team-member img {
//               width: 80px;
//               height: 80px;
//             }
//           }

//           /* Stack images in a single column on small screens */
//           @media (max-width: 600px) {
//             .team-container {
//               flex-direction: column;
//               align-items: center;
//             }
//             .team-member {
//               margin-bottom: 20px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default About;




// import React, { useEffect, useState } from "react";
// import "../App.css";

// const About = () => {
//   const [data, setdata] = useState([]);
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const images = [
//     { src: 'assets/balkar_singh.jpg', alt: 'Image 1', text: 'Balkar Singh, President' },
//     { src: 'assets/ramansir.jpg', alt: 'Image 2', text: 'Ramandeep Singh, Vice President' },
//     { src: 'assets/dalwinder_singh.jpg', alt: 'Image 3', text: 'Dalwinder Singh, Secretary' },
//     { src: 'assets/Amritpal_singh.jpg', alt: 'Image 4', text: 'Amritpal Singh' },
//     { src: 'assets/Jasmeen_kaur.jpg', alt: 'Image 5', text: 'Jasmeen Kaur' },
//     { src: 'assets/Simrandeep_kaur.jpg', alt: 'Image 6', text: 'Simrandeep Kaur' },
//     { src: 'assets/Harminder_kaur.jpg', alt: 'Image 7', text: 'Harminder Kaur' },
//     { src: 'assets/Kamalpreet_singh.jpg', alt: 'Image 8', text: 'Kamalpreet Singh' },
//     { src: 'assets/Gurpreet_singh.jpg', alt: 'Image 9', text: 'Gurpreet Singh' },
//   ];

//   const imageStyle = {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     objectPosition: 'top',
//   };

//   const textStyle = {
//     fontSize: '14px',
//     marginTop: '10px',
//   };

//   return (
//     <div className="flex flex-col">
//       <div
//         className="flex justify-center items-start w-full h-[320px] bg-cover bg-center bg-no-repeat p-5"
//         id="our-team2"
//         style={{
//           backgroundImage: "url('assets/earth7.jpg')",
//         }}
//       >
//         <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
//           <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
//           <p className="text-gray-200">
//             We are a team of dedicated individuals, volunteers, and supporters who share a common vision: to alleviate suffering, promote equality, and uplift communities.
//           </p>
//         </div>
//       </div>

//       <h1 style={{
//         fontSize: "50px",
//         fontWeight: "bold",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "10rem",
//         color: "rgb(4, 4, 54)",
//       }}>Our Team</h1>

//       <div className="team-container">
//         <div className="pyramid-row">
//           <div className="team-member">
//             <img src={images[0].src} alt={images[0].alt} style={imageStyle} />
//             <p style={textStyle}>{images[0].text}</p>
//           </div>
//         </div>

//         <div className="pyramid-row">
//           {images.slice(1, 3).map((image, index) => (
//             <div key={index} className="team-member">
//               <img src={image.src} alt={image.alt} style={imageStyle} />
//               <p style={textStyle}>{image.text}</p>
//             </div>
//           ))}
//         </div>

//         <div className="pyramid-row">
//           {images.slice(3, 6).map((image, index) => (
//             <div key={index} className="team-member">
//               <img src={image.src} alt={image.alt} style={imageStyle} />
//               <p style={textStyle}>{image.text}</p>
//             </div>
//           ))}
//         </div>

//         <div className="pyramid-row">
//           {images.slice(6, 9).map((image, index) => (
//             <div key={index} className="team-member">
//               <img src={image.src} alt={image.alt} style={imageStyle} />
//               <p style={textStyle}>{image.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           .flex {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           .team-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             background-color: rgb(241, 126, 38);
//             padding: 20px;
//             border-radius: 20px;
//             margin-top: 2rem;
//           }

//           .pyramid-row {
//             display: flex;
//             justify-content: center;
//             gap: 20px;
//             margin-bottom: 20px;
//           }

//           /* Responsive styling */
//           @media (max-width: 768px) {
//             h1 {
//               font-size: 36px;
//             }
//             .team-member img {
//               width: 80px;
//               height: 80px;
//             }
//           }

//           /* Stack images in a single column on small screens */
//           @media (max-width: 600px) {
//             .team-container {
//               flex-direction: column;
//               align-items: center;
//             }
//             .pyramid-row {
//               flex-direction: column;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default About;
