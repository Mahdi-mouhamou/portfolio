import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CardHead from "../../components/card/CardHead";
import CardPage from "../../components/card/CardPage";

function Education() {
  return (
    <Box>
      <CardHead
        title="Parcours"
        text="Mon parcours éducatif a été une aventure de découverte de soi et de croissance. Voici les détails de ma formation."
      />

      <CardPage
        title="Master II en Ingenerie logiciel"
        annee="2020 — 2022"
        text="Université des sciences et technologies Houari Boumediene USTHB ,Babezouar."
      />
      <CardPage
        title="Licence Informatique Académique"
        annee="2017 — 2020"
        text="Université des sciences et technologies Houari Boumediene USTHB ,Babezouar."
      />
      <CardPage
        title="Diplome de Baccalaurea"
        annee="2020 — 2022"
        text="Branche Mathématiques."
      />
    </Box>
  );
}

export default Education;
