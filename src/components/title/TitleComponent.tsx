import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const TitleComponentStyle = styled("div")({
  color: "black",
  width: "100%",
  textAlign: "center",
  padding: "30px 0",
});

const TitleComponent = () => {
  return (
    <TitleComponentStyle>
      <Typography variant="h3">star wars character search</Typography>
    </TitleComponentStyle>
  );
};

export default TitleComponent;
