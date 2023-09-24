import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "25px", xs: "20px" } }}
        textAlign="center"
        pb="5px"
      >
        <b>
          <i>"FitQuest</i>
        </b>{" "}
        <sub>quest for good health"</sub>
      </Typography>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "15px", xs: "12px" } }}
      textAlign="center"
      pb="5px"
    >
      Made with ❤️ by{" "}
      <a
        href="https://www.instagram.com/___harshalmodhave/"
        className="owner_footer"
        target="__blank"
      >
        __@HarshalModhave
      </a>
    </Typography>
  </Box>
);

export default Footer;
