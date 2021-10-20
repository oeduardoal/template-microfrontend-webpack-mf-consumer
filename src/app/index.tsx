import React from "react";
import { Container } from "@grupoboticario/flora-react-container";
import { Heading } from "@grupoboticario/flora-react-heading";
import { Button } from "@grupoboticario/flora-react-button";

// @ts-ignore
import Account from "account/main";
// @ts-ignore
import Header from "header/main";

const App: React.FC = () => {
  return (
    <Container>
      <Heading level={4}>Header Consumer</Heading>
      <Button>Consumer Button</Button>
      {/* MF Account */}
      <Header>
        <Account name="Eduardo Almeida" />
      </Header>
    </Container>
  );
};

export default App;
