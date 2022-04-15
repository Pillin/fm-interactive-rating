import React from "react";
import { motion } from "framer-motion";

const SubmitVariants = {
  initial: {
    background: "#FC7614",
    borderRadius: "22.5px",
    height: "45px",
    color: "#FFFFFF",
    border: "0px",
    textTransform: "uppercase"
  },
  hover: {
    background: "#FFFFFF",
    color: "#FC7614"
  },
  tap: {
    scale: 1.1
  }
};

const Button = (propsFunction: {
  label: string;
  variants: typeof SubmitVariants;
}) => (props: { onClick: Function }) => (
  <motion.button
    initial="initial"
    variants={propsFunction.variants}
    whileHover="hover"
    whileTap="tap"
    onClick={(e) => props.onClick(e)}
  >
    {propsFunction.label}
  </motion.button>
);

export const SubmitButton = Button({
  label: "submit",
  variants: SubmitVariants
});
