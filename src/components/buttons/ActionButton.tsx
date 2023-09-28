import { LinksEnum } from "@/shared";
import React, { HTMLProps } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: LinksEnum) => void;
  href: LinksEnum;
  className?: HTMLProps<HTMLElement>["className"];
};

export default function ActionButton({
  children,
  setSelectedPage,
  className,
  href,
}: Props) {
  const href1 = href.replace(/\s/gi, "-").toLowerCase() as LinksEnum;

  return (
    <AnchorLink
      className={
        "rounded-md py-1 px-4 text-white hover:bg-primary-500 transition-all duration-75 " +
        className
      }
      href={`#${href1}`}
      offset="100"
      onClick={() => setSelectedPage(href1)}
    >
      {children}
    </AnchorLink>
  );
}
