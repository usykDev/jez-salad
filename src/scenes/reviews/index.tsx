import { SelectedPage, ClassType } from "@/shared/types";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import { motion } from "framer-motion";
import Class from "./Class";
import SelenaGomz from "@/assets/selenaGomz.png";
import DavidKen from "@/assets/davidKen.png";
import JenniferSina from "@/assets/jenniferSina.png";
import KayRenz from "@/assets/kayRenz.png";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";

const classes: Array<ClassType> = [
  {
    name: "Selena Gomz",
    img: SelenaGomz,
    age: "22 y.o",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    name: "David Ken",
    img: DavidKen,
    age: "24 y.o",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    name: "Jennifer Sina",
    img: JenniferSina,
    age: "21 y.o",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
  {
    name: "Kay Renz",
    img: KayRenz,
    age: "30 y.o",
    review:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Reviews = ({ setSelectedPage }: Props) => {
  // @ts-ignore: TS6133
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const isAboveMediumScreens = useMediaQuery("(min-width: 980px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 683px)");

  return (
    <section id="reviews" className="min-h-screen w-full pt-8 md:py-40">
      <motion.div
        className="min-h-[800px] bg-primary-100 py-24 md:py-20"
        onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}
      >
        <motion.div
          className="max-w-screen-xl mx-auto w-5/6 px-6 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="mt-12 md:w-1/3">
              <h1 className="text-4xl font-black leading-tight text-black md:text-5xl">
                What Are People Saying{" "}
                <span className="text-primary-500">About Us</span>
              </h1>
              <p className="mt-4">
                We are very happy if you are satisfied with our service and
                products, let's read pure reviews from customers who bought our
                products.
              </p>
            </div>

            <div className=" md:w-2/3">
              <Swiper
                className="my-8 md:my-0"
                onSwiper={setSwiperRef}
                slidesPerView={
                  isAboveMediumScreens ? 3 : isAboveSmallScreens ? 2 : 1
                }
                spaceBetween={1}
                pagination={{
                  clickable: true,
                  type: "fraction",
                  el: ".swiper-pagination-reviews",
                }}
                navigation={{
                  nextEl: ".swiper-button-next-reviews",
                  prevEl: ".swiper-button-prev-reviews",
                }}
                modules={[Pagination, Navigation]}
              >
                {classes.map((item: ClassType, index) => (
                  <SwiperSlide key={item.name}>
                    <Class
                      key={`${item.name}-${index}`}
                      img={item.img}
                      name={item.name}
                      review={item.review}
                      age={item.age}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="slider-controler-reviews relative">
            <div className="flex items-center gap-5 ">
              <div className="swiper-button-prev-reviews slider-arrow absolute -left-10 -top-80 z-20 hover:bg-secondary-500 md:-top-44 md:left-0">
                <ChevronLeftIcon className="h-10 w-10" />
              </div>
              <div className="swiper-button-next-reviews slider-arrow absolute -right-10 -top-80  z-20 hover:bg-secondary-500 md:-top-44  md:left-16 md:right-auto">
                <ChevronRightIcon className="h-10 w-10" />
              </div>
            </div>

            <div className="swiper-pagination-reviews absolute hidden font-bold md:-top-28 md:block"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Reviews;
