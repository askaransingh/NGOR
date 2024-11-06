// // import React from 'react'

// // const GALLERY = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default GALLERY

// import React from 'react';

// const ParallelogramImageComponent = () => {
//   const images = [
//     '/assets/image1.jpg',
//     '/assets/image2.jpg',
//     '/assets/image3.jpg',
//   ];

//   const styles = {
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       margin: '0 auto',
//       maxWidth: '100%',
//     },
//     parallelogram: {
//       position: 'relative',
//       display: 'inline-block',
//       width: '30%', // Responsive width
//       height: '150px',
//       margin: '10px',
//       transform: 'skewY(-10deg)',
//       overflow: 'hidden',
//       transition: 'transform 0.3s, box-shadow 0.3s',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     },
//     image: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       transform: 'skewY(10deg)',
//       transition: 'transform 0.3s',
//     },
//     hoverEffect: {
//       '&:hover': {
//         transform: 'scale(1.05)',
//         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
//       },
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {images.map((image, index) => (
//         <div
//           key={index}
//           style={styles.parallelogram}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'skewY(-10deg) scale(1.05)';
//             e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'skewY(-10deg)';
//             e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
//           }}
//         >
//           <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ParallelogramImageComponent;

import React from 'react';

const ParallelogramImageComponent = () => {
  const images = [
    './assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
    '/assets/6.jpg',
    '/assets/7.jpg',
    '/assets/8.jpg',
    '/assets/9.jpg',
    '/assets/10.jpg',
    '/assets/11.jpg',
    '/assets/12.jpg',
    '/assets/13.jpg',
    '/assets/14.jpg',
    '/assets/15.jpg',
    '/assets/16.jpg',
    '/assets/17.jpg',
    '/assets/18.jpg',
    '/assets/19.jpg',
    '/assets/20.jpg',
    '/assets/21.jpg',
    '/assets/22.jpg',
    '/assets/23.jpg',
    '/assets/24.jpg',
    '/assets/25.jpg',
    '/assets/26.jpg',
    '/assets/27.jpg',
    '/assets/28.jpg',
    '/assets/29.jpg',
    '/assets/30.jpg',
    '/assets/31.jpg',
    '/assets/32.jpg',
    '/assets/33.jpg',
    '/assets/34.jpg',
    '/assets/35.jpg',
    '/assets/35.jpg',
    '/assets/36.jpg',
    '/assets/37.jpg',
    '/assets/38.jpg',
    '/assets/39.jpg',
    '/assets/40.jpg',
    '/assets/41.jpg',
    '/assets/42.jpg',
    '/assets/43.jpg',
    '/assets/44.jpg',
    '/assets/45.jpg',
    '/assets/46.jpg',
    '/assets/47.jpg',
    '/assets/48.jpg',
    '/assets/49.jpg',
    '/assets/50.jpg',
    '/assets/51.jpg',
    '/assets/52.jpg',
    '/assets/53.jpg',
   

  ];

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0 auto',
      maxWidth: '100%',
    },
    parallelogram: {
      position: 'relative',
      display: 'inline-block',
      width: '30%', // Responsive width
      height: '250px',
      margin: '10px',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transform: 'skew(20deg)', // Adjusted for parallel lines
      backgroundColor:'grey'
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'skew(-20deg)', // Counteract the skew for the image
      transition: 'transform 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      {images.map((image, index) => (
        <div
          key={index}
          style={styles.parallelogram}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'skew(20deg) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'skew(20deg)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
          }}
        >
          <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
        </div>
      ))}
      
    </div>
  );
};

export default ParallelogramImageComponent;