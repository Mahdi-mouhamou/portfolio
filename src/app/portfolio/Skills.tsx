import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import Card from "../../components/card/Card";
import CardItem from "../../components/card/CardItem";
import CardHead from "../../components/card/CardHead";
import { SkillSection } from "@/types/Skils";


function Skills() {
  const [skills, setSkills] = useState<SkillSection | null>(null);

  // Récupérer les compétences depuis l'API
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("./api/skills");
        const data: SkillSection[] = await response.json();
        if (data.length > 0) {
          setSkills(data[0]); // En supposant que tu n'as qu'une seule section
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des compétences:", error);
      }
    };

    fetchSkills();
  }, []);

  if (!skills) {
    return ;
  }

  return (
    <>
      <CardHead title={skills.title} text={skills.description} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          height: { md: "70vh", xs: "100%" },
          mb: { md: 0, xs: 2 },
          gap: 4,
        }}
      >
        {skills.categories.map((category) => (
          <Card key={category.title} title={category.title}>
            {category.items.map((item) => (
              <CardItem key={item.title} src={item.image} title={item.title} />
            ))}
          </Card>
        ))}
      </Container>
    </>
  );
}

export default Skills;
