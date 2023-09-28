import AnchorLink from "react-anchor-link-smooth-scroll";
import { LinksEnum } from "@/shared";
import { convertLink } from "@/services";

interface LinkPropType {
  page: string;
  selectedPage: LinksEnum;
  setSelectedPage: (value: LinksEnum) => void;
}

export default function Link({
  page,
  selectedPage,
  setSelectedPage,
}: LinkPropType) {
  const href = convertLink(page);

  return (
    <AnchorLink
      href={`#${href}`}
      offset="100"
      className={`${
        selectedPage === href ? "text-white" : null
      } hover:text-white transition-all duration-150`}
      onClick={() => setSelectedPage(href)}
    >
      {page}
    </AnchorLink>
  );
}
