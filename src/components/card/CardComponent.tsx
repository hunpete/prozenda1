import React from "react";
import { styled } from "@mui/system";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { People } from "../../api/types";

const StyledCard = styled(Card)({
  width: 150,
  "&:hover": {
    boxShadow: "0px 0px 25px 3px rgba(18,192,255,1)",
  },
});

type CardComponentProps = {
  cardData: People;
  index: number;
};
const CardCompoment = ({ cardData, index }: CardComponentProps) => {
  return (
    <StyledCard>
      <CardMedia
        sx={{ height: 140 }}
        image={`/mock-image-${index % 2 === 0 ? "0" : "1"}.png`}
        title="asset1"
      />
      <CardContent>
        <Typography variant="body2">{cardData.name}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CardCompoment;
