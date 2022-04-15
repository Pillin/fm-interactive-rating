import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Theme } from "../theme";
import Star from "../images/icon-star.svg";

const Circle = styled(motion.section)<{ theme?: Theme }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.darkBlue};
`;

const CircleStar = () => {
  return (
    <Circle
      whileHover={{
        opacity: 0.5,
        transition: { duration: 1 }
      }}
    >
      <Star />
    </Circle>
  );
};

export default CircleStar;
