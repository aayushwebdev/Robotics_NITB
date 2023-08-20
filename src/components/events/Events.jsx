// import React from 'react';
// import styles from './Events.module.css';
// import { Swiper, SwiperSlide } from "swiper";

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow,Pagination,Navigation } from 'swiper';

// import image1 from "../../images/image1.jpg";

// const Events = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Events</h1>
//       <Swiper
//       effect={ 'coverflow' }
//       grabCursor={ true }
//       centeredSlides={ true }
//       loop={ true }
//       slidesPerView={ 'auto' }
//       coverflowEffect={
//         {
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         } }

//         className={styles.swiper_container}
//       >
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image1} alt='slide_image' />
//         </SwiperSlide>

//         <div className={styles.slider_controller}>
//           <div className={styles.swiper_btn_prev.slider_arrow}>
//             <ion-icon className={styles.arrow_back_outline}></ion-icon>
//           </div>
//           <div className={styles.swiper_btn_next.slider_arrow}>
//             <ion-icon className={styles.arrow_forward_outline}></ion-icon>
//           </div>
//           <div className={styles.swiper-pagination}></div>
//         </div>

//       </Swiper>
//     </div>
//   )
// }

// export default Events;