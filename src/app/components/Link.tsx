import React from "react";
import { styled } from "@grupoboticario/flora-react";

import { Link as RLink, LinkProps } from "react-router-dom";

import type { ReactComponent } from "types.d";

const StyledLink = styled(RLink, {
  color: "white",
  fontWeight: "bold",
  fontSize: "$xl",
});

export const Link = (props: ReactComponent & LinkProps) => {
  return <StyledLink {...props} />;
};
