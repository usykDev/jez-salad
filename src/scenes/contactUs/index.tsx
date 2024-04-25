import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Lines from "@/assets/Lines.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 py-20 ">
      <motion.div
        style={{ backgroundImage: `url(${Lines})` }}
        className="z-0 mt-24 flex  flex-col gap-20 rounded-[50px] bg-primary-100 bg-cover bg-center p-16 "
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
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
          <div className="flex flex-col gap-6 text-center">
            <p className="text-lg text-primary-500">Our Subscribe</p>

            <div className="font-montserrat text-2xl font-black leading-tight md:text-5xl md:leading-tight ">
              Subscribe To Get The Latest
              <br />
              Promo from Jez Salad
            </div>

            <p className="text-lg text-gray-100">
              We recommended you to subscribe to our promo program,
              <br />
              drop your email below to get daily update about us
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <div className="gap-8">
          <motion.div
            className="mb-8 mt-0 flex basis-3/5 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/672e475144505870534938c2c9f040df"
            >
              {/* Email */}
              <div className="xs:text-md flex items-center justify-end xxs:text-sm sm:text-lg ">
                <input
                  className="relative flex rounded-full bg-white px-7 py-5 placeholder-gray-500 drop-shadow-sm focus:outline-none focus:drop-shadow-3xl xxs:w-[280px] xs:w-[380px] sm:w-[550px] md:w-[750px]"
                  type="text"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                <button
                  type="submit"
                  className="absolute m-2 rounded-full bg-primary-500 py-3 text-white hover:bg-secondary-500 xxs:px-2  xs:px-6"
                >
                  Subcribe
                </button>
              </div>
              {errors.email && (
                <p className="ml-7 mt-2 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
