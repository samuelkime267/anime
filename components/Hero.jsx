import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroCard } from ".";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = ({ data }) => {
  return (
    <>
      <section className="p-0 mb-8 mt-16">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            pagination={{ dynamicBullets: true, dynamicMainBullets: 5 }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
          >
            {data.data.map((anime) => {
              if (anime.region_locked) return;
              return (
                <SwiperSlide key={anime.entry.mal_id}>
                  <div className="relative min-h-screen h-fit md:min-h-fit bg-white/10">
                    <Image
                      src={anime.entry.images.jpg.large_image_url}
                      alt={anime.entry.title}
                      fill
                      className="object-cover"
                    />
                    <div className="relative flex items-center justify-center z-10 p-4 lg:p-8 bg-darkBlue/60 backdrop-blur-sm min-h-screen md:min-h-fit">
                      <HeroCard data={anime} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
