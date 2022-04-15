import React from "react";

import { AnimatePresence } from "framer-motion";
import ResultRating from "./ResultRatingBox";

import SelectorRatingBox from "./SelectorRatingBox";

const Box = (props: {}) => {
  const [rating, sendRating] = React.useState(0);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (rating) setShow(true);
  }, [rating]);
  return (
    <AnimatePresence>
      {!show && <SelectorRatingBox sendRating={sendRating} />}
      {show && <ResultRating rating={rating} />}
    </AnimatePresence>
  );
};

export default Box;
