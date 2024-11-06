// import React from "react";

// const IntroHeading = () => {
//   return (
//     <div>
//       <h1
//         style={{
//           fontSize: "50px",
//           fontWeight: "bold",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "10rem",
//           color: "rgb(4, 4, 54)",
//         }}
//       >
//         Introduction
//       </h1>
//       <div
//         style={{
//           display: "flex",
//           backgroundColor: "rgb(241, 126, 38)",
//           padding: "20px",
//           borderRadius: "10px",
//           marginTop: "10rem",
//           height: "600px",
//           marginTop: "-0rem",
//         }}
//       >
//         <div style={{ flex: 1, marginRight: "20px" }}>
//           <img
//             src="assets/our-team2.jpeg" // Replace with your image path
//             alt="Nanak Raj Chalaya Foundation"
//             style={{
//               width: "100%",
//               borderRadius: "15px",
//               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//               height: "35rem",
//             }}
//           />
//         </div>
//         <div
//           style={{
//             flex: 1,
//             color: "rgb(4, 4, 54)",
//             marginTop: "10rem",
//             lineHeight: "1.2",
//           }}
//         >
//           <h2 style={{ fontSize: "40px", fontWeight: "semibold" }}>
//             Welcome to Nanak Raj Chalaya Foundation
//           </h2>
//           <p
//             style={{
//               fontSize: "25px",
//               fontWeight: "semibold",
//               marginTop: "1rem",
//             }}
//           >
//             Guided by the spirit of selfless service, Nanak Raj Chalaya
//             Foundation is dedicated to making a positive impact through
//             plantation drives, Langer sewa, disaster relief, educational
//             scholarships, and medical support. We strive to uplift communities
//             and create a better tomorrow for all.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroHeading;


// import React from "react";

// const IntroHeading = () => {
//   const styles = {
//     container: {
//       textAlign: "center", // Center text
//       marginTop: "10rem",
//     },
//     heading: {
//       fontSize: "50px",
//       fontWeight: "bold",
//       color: "rgb(4, 4, 54)",
//     },
//     contentContainer: {
//       display: "flex",
//       // backgroundColor: "rgb(241, 126, 38)",
//       padding: "20px",
//       borderRadius: "10px",
//       marginTop: "10rem",
//       height: "600px",
//       flexDirection: "row", // Default to row layout
//       justifyContent: "space-between", // Space between items
//       alignItems: "center", // Center vertically
//       flexWrap: "wrap", // Allow wrapping on smaller screens
//     },
//     imageContainer: {
//       flex: 1,
//       marginRight: "20px",
//       minWidth: "250px", // Minimum width for the image container
//     },
//     serviceImage: {
//       width: "100%",
//       borderRadius: "15px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//       height: "auto", // Maintain aspect ratio
//     },
//     textContainer: {
//       flex: 1,
//       color: "rgb(4, 4, 54)",
//       lineHeight: "1.2",
//       marginTop: "0", // Reset margin top for better spacing
//     },
//     subheading: {
//       fontSize: "40px",
//       fontWeight: "semibold",
//     },
//     paragraph: {
//       fontSize: "25px",
//       fontWeight: "semibold",
//       marginTop: "1rem",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Introduction</h1>
//       <div style={styles.contentContainer}>
//         <div style={styles.imageContainer}>
//           <img
//             src="assets/our-team2.jpeg" // Replace with your image path
//             alt="Nanak Raj Chalaya Foundation"
//             style={styles.serviceImage}
//           />
//         </div>
//         <div style={styles.textContainer}>
//           <h2 style={styles.subheading}>Welcome to Nanak Raj Chalaya Foundation</h2>
//           <p style={styles.paragraph}>
//             Guided by the spirit of selfless service, Nanak Raj Chalaya
//             Foundation is dedicated to making a positive impact through
//             plantation drives, Langer sewa, disaster relief, educational
//             scholarships, and medical support. We strive to uplift communities
//             and create a better tomorrow for all.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroHeading;

import React from "react";
// import "./IntroHeading.css"; // Import the CSS file

const IntroHeading = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-heading">Introduction</h1>
      <div className="intro-content-container">
        <div className="intro-image-container">
          <img
            src="assets/our-team2.jpeg" // Replace with your image path
            alt="Nanak Raj Chalaya Foundation"
            className="intro-service-image"
          />
        </div>
        <div className="intro-text-container">
          <h2 className="intro-subheading">Welcome to Nanak Raj Chalaya Foundation</h2>
          <p className="intro-paragraph">
            Guided by the spirit of selfless service, Nanak Raj Chalaya
            Foundation is dedicated to making a positive impact through
            plantation drives, Langer sewa, disaster relief, educational
            scholarships, and medical support. We strive to uplift communities
            and create a better tomorrow for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroHeading;
