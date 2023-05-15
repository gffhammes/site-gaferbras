import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Phone from "../../../../public/vectors/phone.svg";
import MapPin from "../../../../public/vectors/map-pin.svg";
import Mail from "../../../../public/vectors/mail.svg";
import { mapsLink } from "../../../constants/links";
import { ScrollAppearMotion } from "../../common/motion/ScrollAppearMotion";
import { ContactContext } from "../../../contexts/Contact/ContactContext";

export const Contact = () => {
  const { phone, address, defaultMail } = useContext(ContactContext);

  return (
    <Stack spacing={3} sx={{ color: "primary.main" }}>
      <ScrollAppearMotion delay={0.8}>
        <a
          href={`tel: ${phone}`}
          rel="noreferrer"
          style={{ width: "fit-content" }}
        >
          <Stack spacing={2} direction="row" alignItems="flex-end">
            <Phone />
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                fontSize={20}
                fontWeight={500}
                lineHeight={1.3}
                sx={{ mr: 1 }}
              >
                {phone.slice(0, 2)}
              </Typography>
              <Typography fontSize={30} fontWeight={500} lineHeight={1}>
                {phone.slice(2, 6)} {phone.slice(6, 11)}
              </Typography>
            </Box>
          </Stack>
        </a>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.2}>
        <a
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
          style={{ width: "fit-content" }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <MapPin />
            <Typography fontSize={21} sx={{ maxWidth: "25ch" }}>
              {address}
            </Typography>
          </Stack>
        </a>
      </ScrollAppearMotion>
      <ScrollAppearMotion delay={1.6}>
        <a
          href={`mailto:${defaultMail}`}
          target="_blank"
          rel="noreferrer"
          style={{ width: "fit-content" }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Mail />
            <Typography fontSize={21}>{defaultMail}</Typography>
          </Stack>
        </a>
      </ScrollAppearMotion>
    </Stack>
  );
};
