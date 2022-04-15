import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Theme } from "../theme";

export const H1 = styled(motion.h1)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
`;
export const P = styled(motion.p)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.mediumGrey};
  font-weight: 400;
  line-height: 24px;
`;

export const Span = styled(motion.span)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  line-height: 24px;
`;
