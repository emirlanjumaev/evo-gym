import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  initial: object;
  visible: object;
}

export default function MyMotion({ children, initial, visible }: Props) {
  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        initial: initial,
        visible: visible,
      }}
    >
      {children}
    </motion.div>
  );
}
