import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Theme } from "../theme";

const Container = styled(motion.section)`
  display: flex;
  gap: 0px 25px;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.section)<{ theme?: Theme }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral.mediumGrey};
  background-color: ${({ theme }) => theme.colors.neutral.darkBlue};
`;

const circleVariant = {
  hidden: { opacity: 0 },
  show: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.15
    }
  }),
  hover: {
    color: "white",
    backgroundColor: "#7C8798",
    transition: { duration: 0.002 }
  },
  selected: {
    opacity: 1,
    color: "white",
    backgroundColor: "hsl(25, 97%, 53%)",
    transition: { duration: 0.002 }
  },
  tap: {
    scale: 1.1,
    color: "white",
    backgroundColor: "hsl(25, 97%, 53%)"
  }
};

const RatingBar = (props: { number: number; onClick: Function }) => (
  <Container>
    {[1, 2, 3, 4, 5].map((elem, index) => (
      <Circle
        onClick={() => props.onClick(elem)}
        whileHover="hover"
        whileTap="tap"
        key={`circle-${index}`}
        variants={circleVariant}
        initial="hidden"
        animate={props.number === elem ? "selected" : "show"}
        custom={index}
      >
        {elem}
      </Circle>
    ))}
  </Container>
);

export default RatingBar;
