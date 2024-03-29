import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useBreakPoint } from "../../../hooks/useBreakPoint";
import { Frames } from "./Frames/Frames";
import { LeftImage } from "./LeftImage";
import { Text } from "./Text";

interface IProps {
  data: {
    h1: string;
    cards: {
      imageSrc: string;
      text: string;
    }[];
    leftImageSrc: string;
  };
}

export const TopSection = ({ data: { h1, cards, leftImageSrc } }: IProps) => {
  const { mdSize } = useBreakPoint();

  return (
    <Box bgcolor="#e7e6f8" sx={{ position: "relative" }}>
      <Container>
        <Text h1={h1} />
        <Frames cards={cards} />
      </Container>
      {mdSize && <LeftImage imageSrc={leftImageSrc} />}
    </Box>
  );
};
