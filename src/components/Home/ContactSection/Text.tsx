import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Button from "../../common/Button";
import WhatsApp from "../../../../public/vectors/whatsapp.svg";
import { ScrollAppearMotion } from "../../common/motion/ScrollAppearMotion";
import Link from "next/link";
import { ContactContext } from "../../../contexts/Contact/ContactContext";

interface IProps {
  text: string;
}

export const Text = ({ text }: IProps) => {
  const { whatsapp } = useContext(ContactContext);

  return (
    <ScrollAppearMotion>
      <Typography
        fontSize={50}
        lineHeight={1.3}
        sx={{
          maxWidth: "14ch",
          color: "primary.main",
          mb: 2,
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Link href={`https://wa.me/${whatsapp}`} passHref>
        <a target="_blank">
          <Button startIcon={<WhatsApp />}>WhatsApp</Button>
        </a>
      </Link>
    </ScrollAppearMotion>
  );
};
