import React from "react";
import { globalCss, foundationTheme } from "@grupoboticario/flora";
import { Box, FloraProvider } from "@grupoboticario/flora-react";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "header/Header";

import Routes from "./routes";
import { Link } from "./components/Link";
import { Avatar } from "./components/Avatar";

const styles = globalCss({
  "html, body, #root": {
    margin: 0,
    padding: 0,
  },
});

const App: React.FC = () => {
  styles();
  return (
    <FloraProvider theme={foundationTheme}>
      <Router>
        <Header>
          <Box
            as="nav"
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "$6",
              flex: 1,
            }}
          >
            <Link to="/">Go to Home</Link>
            <Link to="/account?name=Eduardo Almeida">
              <Avatar text="EA" />
            </Link>
          </Box>
        </Header>
        <Routes />
      </Router>
    </FloraProvider>
  );
};

export default App;
