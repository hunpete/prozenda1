import React from "react";
import CardCompoment from "../card/CardComponent";
import { styled } from "@mui/system";
import { People } from "../../api/types";

const ListComponentStyle = styled("div")({
  display: "flex",
  gridGap: "20px",
  flexWrap: "wrap",
  maxWidth: "100vw",
  padding: 15,
  justifyContent: "center",
});

export type ListComponentProps = {
  peopleData: People[];
};

const ListComponent = ({ peopleData }: ListComponentProps) => {
  return (
    <ListComponentStyle>
      <>
        {peopleData.map((data: People, index: number) => {
          return (
            <CardCompoment
              cardData={data}
              index={index}
              key={`card-${index}`}
            />
          );
        })}
      </>
    </ListComponentStyle>
  );
};

export default ListComponent;
