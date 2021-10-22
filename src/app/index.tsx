import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import { styled, globalCss } from "../../stitches.config";
import { Box } from "../components/Box";

const LLink = styled(Link, Box, {
  color: "white",
  fontWeight: "bold",
  fontSize: "$6",
  textDecoration: "none",
  "&:hover": {
    color: "$orange6",
  },
});

const styles = globalCss({
  "html, body, #root": {
    margin: 0,
    padding: 0,
  },
});

const App: React.FC = () => {
  styles();
  return (
    <Router>
      <Box
        as="header"
        css={{
          backgroundColor: "$background",
          height: 80,
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 10rem",
        }}
      >
        <Box
          as="nav"
          css={{ display: "flex", alignItems: "center", gap: "$6" }}
        >
          <LLink to="/home">Home</LLink>
          <LLink to="/some-route">Some Route</LLink>
        </Box>
      </Box>
      <Box css={{ padding: "5rem 10rem" }}>
        <Routes />
      </Box>
    </Router>
  );
};

export default App;
