import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  onClick?: () => void;
};

const Link = ({ page, selectedPage, setSelectedPage, onClick }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        drop-shadow-2xl transition duration-500 hover:text-primary-300 md:text-2xl
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        onClick?.();
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
