"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Link,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#050A30", color: "#fff", py: 4, mt: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Mahdi Mouhamou
        </Typography>

        <Stack
          spacing={1}
          sx={{ mb: 3 }}
          alignItems="center"
        >
          <Typography variant="body1">
            📞 Téléphone : <strong>0668222480</strong>
          </Typography>

        </Stack>

        <Divider sx={{ bgcolor: "#1976d2", mb: 2 }} />

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=100089001864144"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/mahdi_mouhamou/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Mahdi-mouhamou"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/mahdi-mouhamou-b696581bb/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://wa.me/0668222480"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>

        <Typography variant="body2" sx={{ fontSize: "0.8rem", color: "#ccc" }}>
          © {new Date().getFullYear()} Mahdi Mouhamou. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
