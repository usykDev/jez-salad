import HText from "@/shared/HText";
import { CardType, SelectedPage } from "@/shared/types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import CompletedSalad from "@/assets/saladsPhoto/CompletedSalad.png";
import MiniSaladYummy from "@/assets/saladsPhoto/MiniSaladYummy.png";
import SaladYummyRed from "@/assets/saladsPhoto/SaladYummyRed.png";
import BurrataSalad from "@/assets/saladsPhoto/BurrataSalad.png";
import CheesyStrawberry from "@/assets/saladsPhoto/CheesyStrawberry.png";
import GrapesSalad from "@/assets/saladsPhoto/GrapesSalad.png";
import GreenVibes from "@/assets/saladsPhoto/GreenVibes.png";
import VeganSalad from "@/assets/saladsPhoto/VeganSalad.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const menuCards: Array<CardType> = [
  {
    image: MiniSaladYummy,
    title: "Mini Salad Yummy ",
    description: "3.99",
  },
  {
    image: CompletedSalad,
    title: "Completed Salad",
    description: "7.99",
  },
  {
    image: SaladYummyRed,
    title: "Salad Yummy Red",
    description: "5.99",
  },
  {
    image: BurrataSalad,
    title: "Burrata Salad",
    description: "6.49",
  },
  {
    image: CheesyStrawberry,
    title: "Cheesy Strawberry",
    description: "8.99",
  },
  {
    image: GrapesSalad,
    title: "Grapes Salad",
    description: "7.49",
  },
  {
    image: GreenVibes,
    title: "Green Vibes",
    description: "3.49",
  },
  {
    image: VeganSalad,
    title: "Vegan Salad",
    description: "5.49",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // transition between children
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Offers = ({ setSelectedPage }: Props) => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 900) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="offers" className="mx-auto min-h-full w-5/6 py-40 md:py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Offers)}>
        {/* Header */}
        <motion.div
          className="mb-10 md:my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-4 text-center ">
            <p className="text-primary-500">MENU YANG MEMBUATMU JATUH CINTA</p>
            <HText>
              <div className="text-4xl font-black leading-tight md:text-5xl md:leading-tight">
                ENJOY THE BEST MENU AND GET
                <br />
                <span className="text-primary-500">DISCOUNTS</span> AVAILABLE
              </div>
            </HText>
          </div>
        </motion.div>

        {/* menuCards */}
        <div className="relative m-auto">
          <motion.div
            className="mt-5 justify-evenly gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <Swiper
              className="swiper_container_offers w-full"
              slidesPerView={slidesPerView}
              grabCursor={true}
              pagination={{ el: ".swiper-pagination-offers", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next-offers",
                prevEl: ".swiper-button-prev-offers",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {menuCards.map((card) => (
                <SwiperSlide key={card.title}>
                  <MenuCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <div className="slider-controler-offers">
            <div className="swiper-pagination-offers"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Offers;
