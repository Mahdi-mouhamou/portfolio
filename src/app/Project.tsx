import CardHead from "@/components/card/CardHead";
import CardItem from "@/components/card/CardItem";
import CardProject from "@/components/card/CardProject";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Project() {
  const style = {
    borderRadius: "8px",
    border: "solid 1px #1976d2",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 7px 2px 7px ",
    color: "white",
    fontSize: "12px",
  };

  return (
    <>
      <CardHead
       title="Projets"
       text="J’ai travaillé sur une grande variété de projets, notamment des applications web. Voici quelques-uns de mes projets."       
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: {xs:"column",md:"row"},
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: "100%",
          mb: "50px",
        }}
      >
        <CardProject
          src="/projet1.png"
          title="Platforme web"
          item={[
            "HTML",
            "css",
            "JavaScript",
            "Bootstrap 5",
            "Laravel",
            "Voyager",
            "UML",
            "My SQL",
          ]}
          date="2021 - 2022"
          subtitle="Le projet consiste en la création d'une plateforme pour la gestion
              des périmètres d'exploration de SONATRACH."
        />
        <CardProject
          src="/istidrak.jpg"
          title="E-Learning "
          item={[
            "HTML",
            "css",
            "JavaScript",
            "Cpanel",
            "Contabo Vps",
            "Tutor LMS",
            "Wordpress",
          ]}
          date="2023 - 2024"
          subtitle="Le projet consiste en le développement d’une plateforme E-Learning moderne et
          fonctionnelle, réalisée avec WordPress en s’appuyant sur le plugin Tutor LMS."
        />
        <CardProject
          src="/productstor.png"
          title="Boutique"
          item={[
            "HTML",
            "css",
            "JavaScript",
            "Next Js",
            "MUI",
            "FakeStore API",
            "My SQL",
          ]}
          date="2023 - 2024"
          subtitle="Le projet consiste en la création d’une boutique en ligne simple, permettant d’afficher les produits et de les gérer via un système CRUD (ajout, modification, suppression)."
        />
      </Container>
    </>
  );
}

export default Project;
