// // import React from 'react'
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';


// // const Slider = () => {
// //   return (
// //     <Swiper
// //     spaceBetween={50}
// //     slidesPerView={3}
// //     onSlideChange={() => console.log('slide change')}
// //     onSwiper={(swiper) => console.log(swiper)}
// //   >
// //     <SwiperSlide>Slide 1</SwiperSlide>
// //     <SwiperSlide>Slide 2</SwiperSlide>
// //     <SwiperSlide>Slide 3</SwiperSlide>
// //     <SwiperSlide>Slide 4</SwiperSlide>
// //     ...
// //   </Swiper>
// //   )
// // }

// // export default Slider

// import { Virtual } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/virtual';

// export default () => {
//   // Create array with 1000 slides
//   const slides = Array.from({ length: 1000 }).map(
//     (el, index) => `Slide ${index + 1}`
//   );

//   return (
//     <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
//       {slides.map((slideContent, index) => (
//         <SwiperSlide key={slideContent} virtualIndex={index}>
//           {slideContent}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

import React from 'react'

const Slider = () => {
  return (
    <div>Slider</div>
  )
}

export default Slider