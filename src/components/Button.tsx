import React from "react";
import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  boxSizing: "border-box",
  fontSize: 18,
  cursor: "pointer",
  fontWeight: "bold",
  outline: "none",
  border: "none",
  borderRadius: 8,
  backgroundColor: "$orange10",
  padding: "0 $4",
  textDecoration: "none",
  transition: "background-color .2s ease",
  height: 55,
  color: "$orange3",
  variants: {
    variant: {
      secondary: {
        backgroundColor: "$blue11",
      },
    },
  },
});

const Button: React.FC<React.ComponentProps<typeof StyledButton>> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
