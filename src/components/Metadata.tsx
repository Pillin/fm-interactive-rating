import React from "react";
import { Helmet } from "react-helmet";

const Metadata = (props: { title: string; description: string }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};

export default Metadata;
