import bannerImg1 from "../../public/assets/images/banner/5.jpg";
import bannerImg2 from "../../public/assets/images/banner/1.jpg";
import bannerImg3 from "../../public/assets/images/banner/2.jpg";
import bannerImg4 from "../../public/assets/images/banner/3.jpg";
import bannerImg5 from "../../public/assets/images/banner/4.jpg";
import bannerImg6 from "../../public/assets/images/banner/6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCube, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";


// const SliderWraper = () => {
//   return (
//     <SwiperSlide
//         data-aos="zoom-in"
//         data-aos-duration="2000"
//         data-aos-delay="1000"
//       > 
//     <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] '> 
//         <div className=" ">
//         <img src={bgURL} alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
//         </div>
//         <div>
//         <Fade direction="down">
//           <h1
//             data-aos="fade-right"
//             data-aos-duration="2000"
//             data-aos-delay="2000"
//             className="text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-24 w-1/3">
          
//           Affordable Price For Car Servicing
//           </h1></Fade>
//           <Fade>
//           <p
//             data-aos="fade-left"
//             data-aos-duration="2000"
//             data-aos-delay="2400"
//             className="absolute text-xl font-semibold text-white text-left pt-8 top-64 left-24 w-3/5">
          
//           There are many variations of passages of  available, but the majority have suffered alteration in some form
//           </p></Fade>
//           <Fade direction="up">
//             <button className="btn absolute top-96 left-24 bg-orange-600 text-white">Discover More</button>
//             <button className="btn btn-outline text-white absolute top-96 left-64">Latest Project</button>
//           </Fade>
//         </div>
//         </div>
//       </SwiperSlide>
//  );
// };



const Banner = () => {
  return (
    <Swiper
      effect={EffectCube}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="container mx-auto "
    >
      {/* <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src={bannerImg1} alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-24 w-1/3">
          
          Affordable Price For Car Servicing
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-xl font-semibold text-white text-left pt-8 top-64 left-24 w-3/5">
          
          There are many variations of passages of  available, but the majority have suffered alteration in some form
          </p></Fade>
          <Fade direction="up">
            <button className="btn absolute top-96 left-24 bg-orange-600 text-white">Discover More</button>
            <button className="btn btn-outline text-white absolute top-96 left-64">Latest Project</button>
          </Fade>
        </div>
      </SwiperSlide> */}
      {[bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6 ].map(bgImage => 
      <SwiperSlide
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="1000"
      key={bgImage}
    > 
  {/* <div className='lg:relative  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl   w-full h-[450px] lg:h-[550px] '>  */}
  <div className='lg:relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] '> 
      <div className=" rounded-xl">
      <img src={bgImage} alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
      </div>
      <div className="">
      <Fade direction="down">
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="2000"
          
          className="text-2xl lg:text-6xl absolute font-extrabold text-white text-left pt-12 lg:pt-20 top-1 left-16 lg:left-24 w-1/3">
        
        Affordable Price For Car Servicing
        </h1></Fade>
        <Fade>
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="2400"
          className="absolute text-xl font-semibold text-white text-left pt-14 lg:pt-8 top-28 lg:top-64 left-16 lg:left-24 w-3/5">
        
        There are many variations of passages of  available, but the majority have suffered alteration in some form
        </p></Fade>
        <Fade direction="up">
          <button className="btn absolute top-80 lg:top-96 left-16 lg:left-24 bg-orange-600 text-white">Discover More</button>
          <button className="btn btn-outline text-white absolute top-80 lg:top-96 left-52 lg:left-64">Latest Project</button>
        </Fade>
      </div>
      </div>
    </SwiperSlide>
      )}
      {/* <SliderWraper bgURL={bannerImg1}/>
      <SliderWraper bgURL={bannerImg2}/>
      <SliderWraper bgURL={bannerImg3}/>
      <SliderWraper bgURL={bannerImg4}/> */}
      {/* <SwiperSlide>
       <img src={bannerImg2} alt="" className="bg-opacity-25 w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg3} alt="" className="bg-opacity-25 w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg4} alt="" className="bg-opacity-25 w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg5} alt="" className="bg-opacity-25 w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg6} alt="" className="bg-opacity-25 w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
      </SwiperSlide> */}
      
    </Swiper>
  );
};

export default Banner;