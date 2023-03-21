import Head from "next/head";
import axios from "axios";
import { useFetch } from "@/hooks";
import { InView } from "react-intersection-observer";
import { ThreeDots } from "react-loader-spinner";
import { MovieCard, Hero } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Home({ animeData, mangaData, episodeData }) {
  const [isLoading, upcomingSeasonData, setIsInView, setUrl] = useFetch();
  const fetchSectionData = function (inView, url) {
    setIsInView(inView);
    setUrl(url);
  };
  return (
    <>
      <Head>
        <title>Anime Website</title>
        <meta name="description" content="Anime website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={episodeData} />
      <section className="mb-4 lg:mb-8">
        <h1 className="section-title mb-2 lg:mb-4">top airing anime</h1>
        <div>
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={2}
            slidesPerView={2}
            spaceBetween={16}
            navigation
            breakpoints={{
              500: {
                slidesPerGroup: 3,
                slidesPerView: 3,
              },
              640: {
                slidesPerGroup: 4,
                slidesPerView: 4,
              },
              1024: {
                slidesPerGroup: 5,
                slidesPerView: 5,
              },
              1280: {
                slidesPerGroup: 6,
                slidesPerView: 6,
              },
            }}
          >
            {animeData.data.map((movie) => (
              <SwiperSlide key={movie.mal_id}>
                <MovieCard data={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="mb-4 lg:mb-8">
        <h1 className="section-title mb-2 lg:mb-4">popular manga</h1>
        <div>
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={2}
            slidesPerView={2}
            spaceBetween={16}
            navigation
            breakpoints={{
              500: {
                slidesPerGroup: 3,
                slidesPerView: 3,
              },
              640: {
                slidesPerGroup: 4,
                slidesPerView: 4,
              },
              1024: {
                slidesPerGroup: 5,
                slidesPerView: 5,
              },
              1280: {
                slidesPerGroup: 6,
                slidesPerView: 6,
              },
            }}
          >
            {mangaData.data.map((movie) => (
              <SwiperSlide key={movie.mal_id}>
                <MovieCard data={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <InView
        as="main"
        onChange={(inView) =>
          fetchSectionData(inView, [
            {
              title: "popular anime",
              link: `${process.env.NEXT_PUBLIC_API_URL}/top/anime?page=1&limit=20&filter=bypopularity`,
            },
            {
              title: "top upcoming anime",
              link: `${process.env.NEXT_PUBLIC_API_URL}/seasons/upcoming`,
            },
            {
              title: "top upcoming manga",
              link: `${process.env.NEXT_PUBLIC_API_URL}/top/manga?filter=upcoming`,
            },
          ])
        }
      >
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <ThreeDots
              height="100"
              width="100"
              color="#00ffc8"
              visible={true}
              ariaLabel="three-dots-loading"
            />
          </div>
        )}

        {upcomingSeasonData.length > 0 && !isLoading ? (
          <>
            {upcomingSeasonData.map((data, i) => (
              <section key={i} className="mb-4 lg:mb-8">
                <h1 className="section-title mb-2 lg:mb-4">{data.title}</h1>
                <div>
                  <Swiper
                    modules={[Navigation]}
                    slidesPerGroup={2}
                    slidesPerView={2}
                    spaceBetween={16}
                    navigation
                    breakpoints={{
                      500: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                      },
                      640: {
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerGroup: 5,
                        slidesPerView: 5,
                      },
                      1280: {
                        slidesPerGroup: 6,
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {data.data.data.map((movie) => (
                      <SwiperSlide key={movie.mal_id}>
                        <MovieCard data={movie} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>
            ))}
          </>
        ) : (
          <></>
        )}
      </InView>
    </>
  );
}

export const getServerSideProps = async function () {
  const { status: animeStatus, data: animeData } = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/top/anime?page=1&limit=20&filter=airing`
  );
  const { status: mangaStatus, data: mangaData } = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/top/manga?page=1&limit=20&filter=bypopularity`
  );
  const { status: episodeStatus, data: episodeData } = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/watch/episodes?page=1&limit=10`
  );
  return {
    props: {
      animeData,
      mangaData,
      episodeData,
    },
  };
};
