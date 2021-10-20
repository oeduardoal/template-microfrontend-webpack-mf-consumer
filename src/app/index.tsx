import React from "react";
import { globalCss } from "@grupoboticario/flora";
import { FloraProvider } from "@grupoboticario/flora-react-flora-provider";
import { Card } from "@grupoboticario/flora-react-card";
import { Heading } from "@grupoboticario/flora-react-heading";
import { Button } from "@grupoboticario/flora-react-button";

// @ts-ignore
import Account from "account/Account";
// @ts-ignore
import Header from "header/Header";

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
      <Header>
        <Account name="Eduardo Almeida" />
      </Header>
      <Card
        css={{
          margin: "$4",
          gap: "$4",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading level={4}>Consumer</Heading>
        <Button>Consumer Button</Button>
      </Card>
      <Card
        css={{
          margin: "$4",
          gap: "$4",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Heading level={4}>Consumer</Heading>
        <Button>Consumer Button</Button>
      </Card>
    </FloraProvider>
  );
};

export default App;
