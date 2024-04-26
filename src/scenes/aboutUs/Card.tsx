import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

type Props = {
  image: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Card = ({ image, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 flex transform flex-col items-start rounded-[50px] border border-primary-100 bg-white px-6
        py-16 text-start duration-500 hover:drop-shadow-4xl sm:w-full sm:justify-center "
      variants={childVariant}
    >
      <div className="mb-4 flex  ">
        <img src={image} alt={title} />
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold text-black">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p className="flex w-[154px] items-center gap-2 rounded-full px-4 py-3 text-lg text-black hover:bg-primary-500 hover:text-white ">
            Learn More <ArrowRightIcon className="h-5 w-5" />
          </p>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Card;
