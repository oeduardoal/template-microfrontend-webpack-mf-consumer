import React from "react";
import { globalCss, boticarioTheme } from "@grupoboticario/flora";
import { FloraProvider } from "@grupoboticario/flora-react-flora-provider";
import { Box } from "@grupoboticario/flora-react-box";
import { styled } from "@grupoboticario/flora";

import { BrowserRouter as Router, Link } from "react-router-dom";
const LLink = styled(Link, Box, {
  color: "white",
  fontWeight: "bold",
  fontSize: "$xl",
});

// @ts-ignore
import Header from "header/Header";
import Routes from "./routes";

const styles = globalCss({
  "html, body, #root": {
    margin: 0,
    padding: 0,
  },
});

const App: React.FC = () => {
  styles();
  return (
    <div className={boticarioTheme}>
      <FloraProvider>
        <Router>
          <Header>
            <Box
              as="nav"
              css={{ display: "flex", alignItems: "center", gap: "$6" }}
            >
              <LLink to="/account?name=Eduardo Almeida">
                <Box
                  css={{
                    display: "flex",
                    cursor: "pointer",
                    width: 50,
                    height: 50,
                    borderRadius: "$pill",
                    backgroundColor: "$brand-2",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "$strong",
                    fontSize: "$xlg",
                    "&:hover": {
                      border: "solid 2px white",
                    },
                  }}
                >
                  EA
                </Box>
              </LLink>
            </Box>
          </Header>
          <Routes />
        </Router>
      </FloraProvider>
    </div>
  );
};

export default App;
