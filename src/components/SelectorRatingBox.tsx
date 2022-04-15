import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import CircleStar from "./CircleStar";
import { Theme } from "../theme";
import { P, H1 } from "./Typography";
import RatingBar from "./RatingBar";
import { SubmitButton } from "./Buttons";

const Container = styled(motion.section)<{ theme?: Theme }>`
  max-width: 412px;
  min-height: 200px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px 0px;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
`;

const ContainerVariant = {
  initial: { y: -500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 500, opacity: 0 }
};

const SelectorRatingBox = (props: { sendRating: Function }) => {
  const [number, setNumber] = React.useState(0);

  return (
    <Container
      variants={ContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CircleStar />
      <H1
        whileHover={{
          color: "white",
          opacity: 0.5,
          transition: { duration: 1 }
        }}
      >
        How did we do?
      </H1>
      <P
        whileHover={{
          color: "white",
          transition: { duration: 1 }
        }}
      >
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </P>
      <RatingBar number={number} onClick={setNumber} />
      <SubmitButton onClick={() => props.sendRating(number)} />
    </Container>
  );
};

export default SelectorRatingBox;
