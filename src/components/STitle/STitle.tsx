import React, { HTMLProps } from "react";

type Props = {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
};

export default function STitle({ children, className }: Props) {
  return (
    <div
      className={
        "font-montserrat font-bold text-2xl text-gray-500 " + className
      }
    >
      {children}
    </div>
  );
}
