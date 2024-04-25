import Logo from "@/assets/Logo.png";
import email from "@/assets/icons/email.svg";
import location from "@/assets/icons/location.svg";
import phone from "@/assets/icons/phone.svg";
import twitter from "@/assets/icons/twitter.svg";
import linkenin from "@/assets/icons/linkenin.svg";
import instagram from "@/assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Jez Salad is the pioneer of healthy fruit salad with high nutrition.
          </p>
          <p>© Copyright Jez Salad</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-500">Get in Touch</h4>
          <p className="my-5 flex gap-3">
            <img alt="location" src={location} />
            8819 Ohio St. South Gate, CA 90280
          </p>
          <p className="my-5 flex gap-3">
            <img alt="email" src={email} />
            <a href="mailto:Jezsalad@mail.com" className="hover:underline">
              Jezsalad@mail.com
            </a>
          </p>
          <p className="my-5 flex gap-3">
            <img alt="phone" src={phone} />
            +1 233-455-6789
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
          <div className="flex gap-7">
            <a href="https://twitter.com/i/flow/login">
              <img alt="twitter" src={twitter} />
            </a>
            <a href="https://www.linkedin.com">
              <img alt="linkenin" src={linkenin} />
            </a>
            <a href="https://www.instagram.com">
              <img alt="instagram" src={instagram} />
            </a>
          </div>

          <p className="my-4">Follow our social media.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
