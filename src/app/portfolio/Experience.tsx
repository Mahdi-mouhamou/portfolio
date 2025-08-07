import React from "react";
import CardHead from "../../components/card/CardHead";
import CardPage from "../../components/card/CardPage";
import { Typography } from "@mui/material";

function Experience() {
  return (
    <>
      <CardHead
        title="Expérience"
        text="Mon parcours professionnel a été une véritable aventure de découverte et de croissance. Voici les détails de mes expériences professionnelles."
      />
      <CardPage
        title="Ingénieur logiciel"
        annee="Stagiaire SONATRACH 2021-2022"
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize:'17px',
            fontFamily: "Roboto",
            color: "#E0E0E0",
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            - Développement d'une plateforme web :
          </Typography>{" "}
          Le projet consiste en la création d'une plateforme pour la gestion des
          périmètres d'exploration de SONATRACH.
          <br />
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            - Objectifs:
          </Typography>{" "}
          Automatisation du suivi de la phase d'exploration et amélioration de
          l'accès à l'information pour les décideurs.
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "monospace",
            color: "#757575", // gris
            mb: 1,
            mt: 2,
          }}
        >
          Compétences : PHP, LARAVEL, VOYAGER, Bootstrap, MySQL, UML, Merise
        </Typography>
      </CardPage>
      <CardPage title="Ingénieur logiciel" annee="service nationale 2023-2024">
        <Typography
          variant="subtitle1"
          sx={{
            fontSize:'17px',
            fontFamily: "Roboto",
            color: "#E0E0E0",
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          Ajout de nouvelles fonctionnalités à un logiciel de gestion de stock
          existant.
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "monospace",
            color: "#757575", // gris
            mb: 1,
            mt: 2,
          }}
        >
          compétence : oracle forms.
        </Typography>
      </CardPage>
      <CardPage annee="Plateforme E-Learning" title="Develppeur web">
        <Typography
          variant="subtitle1"
          sx={{
            fontSize:'17px',
            fontFamily: "Roboto",
            color: "#E0E0E0",
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          En tant que membre clé de l’équipe, j'ai participé à la conception et
          au développement de la plateforme, où j'ai acquis une expérience
          précieuse avec Tutor LMS de WordPress. J'ai également géré le
          déploiement de la plateforme sur un serveur VPS et configuré le
          serveur SMTP pour la gestion des inscriptions des utilisateurs.
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "monospace",
            color: "#757575", // gris
            mb: 1,
            mt: 2,
          }}
        >
          Tutor LMS , WordPress
        </Typography>
      </CardPage>
    </>
  );
}

export default Experience;
