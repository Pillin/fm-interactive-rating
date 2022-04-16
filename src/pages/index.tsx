import * as React from "react";

import styled from "@emotion/styled";
import { Theme } from "../theme";
import Box from "../components/Box";
import Metadata from "../components/Metadata";
import "../style.css";

const Main = styled.main<{ theme?: Theme }>`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage = () => {
  return (
    <Main>
      <Metadata
        title="Interactive Rating"
        description="Interactive Rating Component"
      />
      <Box />
    </Main>
  );
};

export default IndexPage;
