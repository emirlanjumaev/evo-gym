import React, { useState, useContext } from "react";
import { LinkSelectedProps, LinksEnum } from "@/shared";

const LinkContext = React.createContext<LinkSelectedProps>({
  selectedPage: LinksEnum.Home,
  setSelectedPage: () => {},
});

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedPage, setSelectedPage] = useState<LinksEnum>(
    "home" as LinksEnum.Home
  );

  return (
    <LinkContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = (): LinkSelectedProps => {
  const context = useContext(LinkContext);
  return context;
};
