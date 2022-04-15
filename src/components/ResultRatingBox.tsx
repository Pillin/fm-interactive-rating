import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Theme } from "../theme";
import { P, H1, Span } from "./Typography";
import ThankYou from "../images/illustration-thank-you.svg";

const Container = styled(motion.section)<{ theme?: Theme }>`
  max-width: 412px;
  min-height: 200px;
  border-radius: 30px;
  display: flex;
  align-items: center;
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

const Img = styled(ThankYou)`
  align-self: center;
`;
const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 8px 24px 4px 24px;
  width: fit-content;
  background: #262e38;
  border-radius: 22.5px;
`;

const Box = (props: { rating: number }) => {
  return (
    <Container
      variants={ContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Img />
      <Div>
        <Span>{`You selected ${props.rating} out of 5`}</Span>
      </Div>

      <H1
        whileHover={{
          color: "white",
          opacity: 0.5,
          transition: { duration: 1 }
        }}
      >
        Thank you!
      </H1>
      <P
        animate={false}
        initial={{
          textAlign: "center"
        }}
        whileHover={{
          color: "white",
          transition: { duration: 1 }
        }}
      >
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </P>
    </Container>
  );
};

export default Box;
