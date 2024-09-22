import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AbstractLines from "@/assets/AbstractLines.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1500px)");

  return (
    <section
      id="home"
      className="relative gap-16 overflow-x-hidden bg-gradient-yellowred py-20"
    >
      <img src={AbstractLines} className="absolute -right-40 -top-40" />
      {/* Img and Main Header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center  md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className="z-10 mt-20 md:basis-3/5 ">
          {/* Headings */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p
              className="mb-8 w-64  rounded-full px-2 py-3 text-center 
            font-semibold text-primary-500 drop-shadow-3xl 
            xxs:bg-white sm:bg-primary-100"
            >
              #1 Best Healthy Salad
            </p>

            <div>
              <HText>
                <div className="w-full text-4xl font-black leading-tight drop-shadow-3xl md:w-3/5 md:text-6xl md:leading-tight">
                  <span className="text-primary-500">Skip </span>
                  The Diet,
                  <br />
                  Just Eat Healthy With Jez Salad
                </div>
              </HText>
            </div>

            <p className="mt-8 w-full text-xl drop-shadow-3xl md:w-3/5 md:text-2xl">
              Imagine you don't need a diet because we provide healthy and
              delicious food for you!
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Order food
            </ActionButton>
          </motion.div>

          {isAboveMediumScreens && (
            <div className="mt-20 flex w-full flex-row gap-20 drop-shadow-3xl">
              <div>
                <div className="text-2xl font-bold">5.000+</div>
                <div className="text-xl">Customer</div>
              </div>
              <div>
                <div className="text-2xl font-bold">8.000+</div>
                <div className="text-xl">Delivery</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1.000+</div>
                <div className="text-xl">Ratings</div>
              </div>
            </div>
          )}
        </div>

        {/* Image */}

        <div className="flex basis-3/5 justify-center">
          <LazyLoadImage
            alt="home-pageGraphic"
            src={HomePageGraphic}
            effect="blur"
          />
          {/* <img
            className="drop-shadow-3xl"
            alt="home-pageGraphic"
            src={HomePageGraphic}
          /> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
