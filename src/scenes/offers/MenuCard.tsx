import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  image: string;
  title: string;
  description: string;
};

const MenuCard = ({ image, title, description }: Props) => {
  return (
    <motion.div variants={childVariant} className="mr-10">
      <div className="group relative ml-10 cursor-pointer items-center justify-center overflow-hidden rounded-[50px] transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div>
          <img
            className="object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125"
            src={image}
            alt={`${image}`}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:to-black/90"></div>
        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-start justify-center px-9 text-start transition-all duration-500 group-hover:translate-y-[35%]">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="my-3 text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {"$ "}
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
