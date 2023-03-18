import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroCard } from ".";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Hero = ({ data }) => {
  console.log(data);
  return (
    <>
      <section className="mb-8 h-[30rem] mt-8 ">
        <div className="bg-white/20 border p-4 lg:p-8 rounded-md">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            // breakpoints={{
            //   500: {
            //     slidesPerGroup: 3,
            //     slidesPerView: 3,
            //   },
            //   640: {
            //     slidesPerGroup: 4,
            //     slidesPerView: 4,
            //   },
            //   1024: {
            //     slidesPerGroup: 5,
            //     slidesPerView: 5,
            //   },
            //   1280: {
            //     slidesPerGroup: 6,
            //     slidesPerView: 6,
            //   },
            // }}
          >
            {data.data.map((anime) => (
              <SwiperSlide key={anime.entry.mal_id}>
                <HeroCard data={anime} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
