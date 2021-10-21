import React from "react";
import { globalCss } from "@grupoboticario/flora";
import { FloraProvider } from "@grupoboticario/flora-react-flora-provider";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
    <FloraProvider>
      <Router>
        <Header>
          <Link to="/account">Account</Link>
        </Header>
        <Routes />
      </Router>
    </FloraProvider>
  );
};

export default App;
