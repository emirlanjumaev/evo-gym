export enum LinksEnum {
    Home = "Home",
    Benefits = "Benefits",
    OurClasses = "Our Classes",
    OurContact = "Our Contact",
  }

  export interface LinkSelectedProps {
    selectedPage: LinksEnum;
    setSelectedPage: (value: LinksEnum) => void;
  }