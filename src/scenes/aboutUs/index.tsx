import HText from "@/shared/HText";
import { CardType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Card from "./Card";
import TopBrand from "@/assets/TopBrand.png";
import HealthyFruitSalad from "@/assets/HealthyFruitSalad.png";
import OwnFruitOrchard from "@/assets/OwnFruitOrchard.png";

const cards: Array<CardType> = [
  {
    image: OwnFruitOrchard,
    title: "Own fruit orchard",
    description:
      "Directly from our Own Gardens spread across every province that hosts a Jez Salad store branch.",
  },
  {
    image: HealthyFruitSalad,
    title: "#1 Healthy Fruit Salad",
    description:
      "The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance.",
  },
  {
    image: TopBrand,
    title: "100 Top Brand",
    description:
      "We are one of the best brands in the  Food and Beverage sector in Indonesia.",
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

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="mx-auto min-h-[50%] w-5/6 py-40 md:py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        {/* Header */}
        <motion.div
          className="mb-10 md:my-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex gap-8 xxs:flex-col md:flex-row">
            <HText>
              <div className="text-4xl font-black leading-tight  md:text-5xl md:leading-tight">
                WHY CHOOSE
                <br />
                US FOR{" "}
                <span className="text-primary-500">YOUR HEALTHY FOOD</span>
              </div>
            </HText>
            <p className="text-xl text-gray-100 md:w-2/6 md:leading-tight">
              We continue to consistently choose and maintain the quality of the
              fruit served, so that it remains fresh and nutritious when you eat
              it.
            </p>
          </div>
        </motion.div>

        {/* About us */}
        <motion.div
          className="mt-5 justify-evenly gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {cards.map((card: CardType) => (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
