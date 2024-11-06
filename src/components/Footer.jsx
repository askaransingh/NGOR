// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Footer = () => {
// //   const [Links, setLinks] = useState(false);
// //   const [Gallery, setGallery] = useState(false);
// //   const [Contact, setContact] = useState(false);
// //   return (
// //     <footer >
// //       <div style={{marginTop:'80px'}}></div>
// //       <section class="contact">
// //         <div class="contact-1">
// //           <i class="fa fa-phone" id="call" aria-hidden="true"></i>
// //           <p class="question">DO YOU HAVE A QUESTION?</p>
// //           <p class="number">  +1(403) 604-9233,  +91 896 85 811 97
// //             {/* , +91 896 85 811 97 */}
                 
// //                  </p>
// //         </div>
// //         <div class="contact-2">
// //           <div>
// //             <i class="fa fa-envelope-o" id="mail" aria-hidden="true"></i>
// //             <input
// //               type="search"
// //               placeholder="Enter email"
// //               className="text-black"
// //             />
// //           </div>
// //           <button
// //             onClick={() => {
// //               alert("subscribed!!!");
// //             }}
// //           >
// //             Subscribe
// //           </button>
// //         </div>
// //       </section>

// //       <section class="footer">
// //         <div class="footer-content">
// //           <div class="footer-about">
// //             <h1>OUR MISSION</h1>
// //             <p>
// //               Bringing clean water to an Asian village is a vital and impactful
// //               endeavor that can significantly improve the lives of the
// //               community's residents. Access to clean and safe drinking water is
// //               a fundamental human right
// //             </p>
// //             <br />
// //             <p>
// //               Initiatives focused on delivering clean water to Asian villages
// //               serve as a testament to our collective responsibility in ensuring
// //               a sustainable and equitable world.
// //             </p>
// //           </div>

// //           <div class="footer-links">
// //             <h2
// //               class="links"
// //               onClick={() => {
// //                 setLinks(!Links);
// //               }}
// //             >
// //               QUICK LINKS
// //             </h2>
// //             <br />
// //             <ul class={"footer-links-ul " + (Links && "active-links")}>
// //               <li>
// //                 <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
// //                 <Link to="/">Home</Link>
// //               </li>
// //               <li>
// //                 <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
// //                 <Link to="about">About</Link>
// //               </li>
// //               <li>
// //                 <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
// //                 <Link to="causes">Causes</Link>
// //               </li>
// //               <li>
// //                 <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
// //                 <Link to="event">Events</Link>
// //               </li>
// //               <li>
// //                 <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
// //                 <Link to="news">News</Link>
// //               </li>
// //               <li>
// //                 <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
// //                 <Link to="contact">Contact</Link>
// //               </li>
// //             </ul>
// //           </div>
  
// //           <Link to="GALLERY" >
// //           <div class="gallery">

// //             <h2
// //               class="gal-btn"
// //               onClick={() => {
// //                 setGallery(!Gallery);
// //               }}
// //             >
// //               GALLERY
// //             </h2>
// //             <div class={"gal-container " + (Gallery && "gal-container-active")}>
// //               <div>
// //                 <img src="/assets/1.jpg" />
// //                 <img src="assets/2.jpg" />
// //               </div>
// //               <div>
// //                 <img src="assets/3.jpg" />
// //                 <img src="assets/4.jpg" />
// //               </div>
// //               <div>
// //                 <img src="assets/5.jpg" />
// //                 <img src="assets/6.jpg" />
// //               </div>
// //             </div>
// //           </div>
// //           </Link>

// //           <div class="contact-footer">
// //             <h2
// //               class="contact-btn"
// //               onClick={() => {
// //                 setContact(!Contact);
// //               }}
// //             >
// //               CONTACT US
// //             </h2>

// //             <div
// //               class={
// //                 "contact-container " + (Contact && "contact-container-active")
// //               }
// //             >
// //               <div class="contact-card">
// //                 <div class="contact-heading">
// //                   <div class="location">
// //                     <i class="fa fa-map-marker one" aria-hidden="true"></i>
// //                   </div>
// //                   <h3>Head Office</h3>
// //                 </div>
// //                 <div class="contact-ad">
// //                   <p>vill Manne-majra Chamkaur Sahib Dist. Ropar(140-112), Your City</p>
// //                   <p></p>
// //                 </div>
// //               </div>
// //               <div class="contact-card">
// //                 <div class="contact-heading">
// //                   <div class="location">
// //                     <i class="fa fa-phone two" aria-hidden="true"></i>
// //                   </div>
// //                   <h3>Phone Number</h3>
// //                 </div>
// //                 <div class="contact-ad">
// //                   <p>+1(403) 604-9233
// //                    </p>
// //                   <p>+91 896 85 811 97</p>
// //                 </div>
// //               </div>
// //               <div class="contact-card">
// //                 <div class="contact-heading">
// //                   <div class="location">
// //                     <i class="fa fa-envelope three" aria-hidden="true"></i>
// //                   </div>
// //                   <h3>Email</h3>
// //                 </div>
// //                 <div class="contact-ad">
// //                   <p>nrc.fgs@gmail.com, </p>
// //                   <p></p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <p class="copyright">
// //             {/* Copyright @ 2023. Developed by Harshit Chadha. All Rights Reserved. */}
// //             @Jaskaran singh
// //           </p>
// //         </div>
// //       </section>
// //     </footer>
// //   );
// // };

// // export default Footer;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);

  const styles = {
    footer: {
      marginTop: "80px",
      padding: "20px",
      // backgroundColor: "#f8f8f8",
      color:'white'
    },
    contactSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    contactInfo: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "800px",
      marginBottom: "20px",
      flexWrap: "wrap",
    },
    contact1: {
      flex: 1,
      textAlign: "center",
      margin: "10px",
    },
    contact2: {
      flex: 1,
      textAlign: "center",
      margin: "10px",
    },
    footerContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },
    footerAbout: {
      textAlign: "center",
      marginBottom: "20px",
    },
    footerLinks: {
      textAlign: "center",
      marginBottom: "20px",
    },
    footerLinkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: Links ? "block" : "none",
    },
    gallery: {
      textAlign: "center",
      marginBottom: "20px",
    },
    contactFooter: {
      textAlign: "center",
      marginBottom: "20px",
    },
    contactCard: {
      margin: "10px 0",
      textAlign: "center",
    },
    copyright: {
      textAlign: "center",
      marginTop: "20px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "rgb(4, 4, 54)",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.contactSection}>
        <div style={styles.contactInfo}>
          <div style={styles.contact1}>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>DO YOU HAVE A QUESTION?</p>
            <p className="number">
              +1(403) 604-9233, +91 896 85 811 97
            </p>
          </div>
          <div style={styles.contact2}>
            <div>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <input
                type="search"
                placeholder="Enter email"
                style={{ padding: "10px", width: "80%" }}
              />
            </div>
            <button
              style={styles.button}
              onClick={() => {
                alert("subscribed!!!");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <section style={styles.footerContent}>
        <div style={styles.footerAbout}>
          <h1>OUR MISSION</h1>
          <p>
            Bringing clean water to an Asian village is a vital and impactful
            endeavor that can significantly improve the lives of the
            community's residents. Access to clean and safe drinking water is
            a fundamental human right.
          </p>
          <p>
            Initiatives focused on delivering clean water to Asian villages
            serve as a testament to our collective responsibility in ensuring
            a sustainable and equitable world.
          </p>
        </div>

        <div style={styles.footerLinks}>
          <h2
            onClick={() => {
              setLinks(!Links);
            }}
            style={{ cursor: "pointer" }}
          >
            QUICK LINKS
          </h2>
          <ul style={styles.footerLinkList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="ca uses">Causes</Link>
            </li>
            <li>
              <Link to="event">Events</Link>
            </li>
            <li>
              <Link to="news">News</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>

        <Link to="GALLERY">
          <div style={styles.gallery}>
            <h2
              onClick={() => {
                setGallery(!Gallery);
              }}
              style={{ cursor: "pointer" }}
            >
              GALLERY
            </h2>
            <div
              style={{
                display: Gallery ? "block" : "none",
                textAlign: "center",
              }}
            >
              <div>
                <img src="/assets/1.jpg" />
                <img src="assets/2.jpg" />
              </div>
              <div>
                <img src="assets/3.jpg" />
                <img src="assets/4.jpg" />
              </div>
              <div>
                <img src="assets/5.jpg" />
                <img src="assets/6.jpg" />
              </div>
            </div>
          </div>
        </Link>

        <div style={styles.contactFooter}>
          <h2
            onClick={() => {
              setContact(!Contact);
            }}
            style={{ cursor: "pointer" }}
          >
            CONTACT US
          </h2>

          <div
            style={{
              display: Contact ? "block" : "none",
              textAlign: "center",
            }}
          >
            <div style={styles.contactCard}>
              <div style={{ textAlign: "center" }}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <h3>Head Office</h3>
              <p>vill Manne-majra Chamkaur Sahib Dist. Ropar(140-112), Your City</p>
            </div>
            <div style={styles.contactCard}>
              <div style={{ textAlign: "center" }}>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <h3>Phone Number</h3>
              <p>+1(403) 604-9233</p>
              <p>+91 896 85 811 97</p>
            </div>
            <div style={styles.contactCard}>

              <div style={{ textAlign: "center" }}>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <h3>Email</h3>
              <p>nrc.fgs@gmail.com</p>
            </div>
          </div>
        </div>

        <p style={styles.copyright}>
          @Jaskaran singh
        </p>
      </section>
    </footer>
  );
};

export default Footer;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [Links, setLinks] = useState(false);
//   const [Gallery, setGallery] = useState(false);
//   const [Contact, setContact] = useState(false);
//   return (
//     <footer style={{ marginTop: "80px", color: "#333", fontFamily: "Arial, sans-serif" }}>
//       <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
//         <div style={{ textAlign: "center" }}>
//           <i className="fa fa-phone" style={{ fontSize: "24px", color: "#333" }} aria-hidden="true"></i>
//           <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>DO YOU HAVE A QUESTION?</p>
//           <p style={{ margin: "0.5rem 0" }}>+1(403) 604-9233, +91 896 85 811 97</p>
//         </div>
//         <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//           <i className="fa fa-envelope-o" style={{ fontSize: "24px", color: "#333" }} aria-hidden="true"></i>
//           <input
//             type="search"
//             placeholder="Enter email"
//             style={{ padding: "0.5rem", flex: "1", maxWidth: "200px" }}
//           />
//           <button
//             onClick={() => alert("subscribed!!!")}
//             style={{ padding: "0.5rem 1rem", backgroundColor: "#333", color: "#fff", border: "none" }}
//           >
//             Subscribe
//           </button>
//         </div>
//       </section>

//       <section style={{ padding: "2rem", textAlign: "center" }}>
//         <div style={{ maxWidth: "800px", margin: "auto" }}>
//           <div>
//             <h1 style={{ fontSize: "1.5rem" }}>OUR MISSION</h1>
//             <p>Bringing clean water to an Asian village is a vital and impactful endeavor...</p>
//             <p>Initiatives focused on delivering clean water to Asian villages...</p>
//           </div>

//           <div>
//             <h2
//               style={{ fontSize: "1.25rem", cursor: "pointer", marginBottom: "0.5rem" }}
//               onClick={() => setLinks(!Links)}
//             >
//               QUICK LINKS
//             </h2>
//             <ul style={{ display: Links ? "block" : "none", listStyle: "none", padding: "0" }}>
//               {["Home", "About", "Causes", "Events", "News", "Contact"].map((text) => (
//                 <li style={{ margin: "0.5rem 0" }} key={text}>
//                   <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
//                   <Link to={`/${text.toLowerCase()}`} style={{ marginLeft: "0.5rem", textDecoration: "none", color: "#333" }}>{text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <Link to="GALLERY">
//             <div>
//               <h2 style={{ fontSize: "1.25rem", cursor: "pointer", marginBottom: "0.5rem" }} onClick={() => setGallery(!Gallery)}>
//                 GALLERY
//               </h2>
//               <div style={{ display: Gallery ? "grid" : "none", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
//                 {[1, 2, 3, 4, 5, 6].map((num) => (
//                   <img key={num} src={`/assets/${num}.jpg`} alt={`Gallery ${num}`} style={{ width: "100%", borderRadius: "8px" }} />
//                 ))}
//               </div>
//             </div>
//           </Link>

//           <div>
//             <h2 style={{ fontSize: "1.25rem", cursor: "pointer", marginBottom: "0.5rem" }} onClick={() => setContact(!Contact)}>
//               CONTACT US
//             </h2>
//             <div style={{ display: Contact ? "flex" : "none", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
//               <div style={{ maxWidth: "300px", textAlign: "left" }}>
//                 <h3 style={{ fontSize: "1.1rem" }}>Head Office</h3>
//                 <p>Vill Manne-majra, Chamkaur Sahib Dist. Ropar(140-112), Your City</p>
//               </div>
//               <div style={{ maxWidth: "300px", textAlign: "left" }}>
//                 <h3 style={{ fontSize: "1.1rem" }}>Phone Number</h3>
//                 <p>+1(403) 604-9233, +91 896 85 811 97</p>
//               </div>
//               <div style={{ maxWidth: "300px", textAlign: "left" }}>
//                 <h3 style={{ fontSize: "1.1rem" }}>Email</h3>
//                 <p>nrc.fgs@gmail.com</p>
//               </div>
//             </div>
//           </div>
//           <p style={{ fontSize: "0.875rem", color: "#777" }}>@Jaskaran Singh</p>
//         </div>
//       </section>
      
//       <style>
//         {`
//           @media (max-width: 768px) {
//             footer section { padding: 1rem; }
//             footer h1, footer h2 { font-size: 1.25rem; }
//             footer p { font-size: 0.875rem; }
//             footer input[type="search"] { width: 100%; max-width: none; }
//           }
//           @media (max-width: 480px) {
//             footer h1, footer h2 { font-size: 1rem; }
//             footer p { font-size: 0.75rem; }
//           }
//         `}
//       </style>
//     </footer>
//   );
// };

// export default Footer;
