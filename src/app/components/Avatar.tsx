import React from "react";
import { Box } from "@grupoboticario/flora-react";

export const Avatar = ({ text }: { text: string }) => {
  return (
    <Box
      css={{
        justifySelf: "flex-end",
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
      {text}
    </Box>
  );
};
