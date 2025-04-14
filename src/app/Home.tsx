import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Typewriter from "../components/TypeWriter";

function Home() {
  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          height: "100vh",
          background: "#000814",
          gap: 4,
          flexWrap: "wrap",
          py: 6,
        }}
      >
        {/* Texte à gauche */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, ml: { md: "24px" } }}>
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "monospace",
              fontWeight: "800",
              mt: "50px",
              color: "#fff",
            }}
          >
            Bonjour, <br />
            je suis Mouhamou Mahdi
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              fontFamily: "monospace",
              fontWeight: "600",
              my: "10px",
              color: "#3F00FF",
            }}
          >
            <Typewriter
              texts={[
                "Développeur Full Stack",
                "Créateur d’expériences numériques",
              ]}
            />
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "19px",
              fontFamily: "Roboto",
              mt: "5px",
              mb: "27px",
              color: "#CCCCCC",
            }}
          >
            Jeune diplômé de l'Université des Sciences et Technologies Houari
            Boumediene, basé en Algérie, je suis passionné par le développement
            web. Curieux, adaptable et réactif, je conçois des solutions
            innovantes et performantes en utilisant les dernières technologies.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Button
              variant="contained"
              sx={{
                px: "85px",
                py: "13px",
                background: "#15159E",
                borderRadius: "5px",
                textTransform: "none",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  background: "#1f1fff",
                  transform: "scale(1.03)",
                  boxShadow: "0px 6px 14px rgba(21, 21, 158, 0.4)",
                },
              }}
              onClick={handleDownload}
            >
              Voir le CV
            </Button>
          </Box>
        </Box>

        {/* Image dans une Card élégante */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
            mt: { xs: 4, md: "90px" },
          }}
        >
          <Card
            sx={{
              width: 300,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image="/profile.jpg"
              alt="Mouhamou Mahdi"
            />
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
