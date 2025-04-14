import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Typewriter from "../components/TypeWriter";

function Home() {
  const handleDownload = () => {
    // Ouvre le fichier PDF dans un nouvel onglet
    window.open('/cv.pdf', '_blank');
  }
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          // border: "solid 3px red ",
          // mt: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          height: "100vh",
          background: "#000814",
        }}
      >
        <Box sx={{ width: "45%", ml: "24px" }}>
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "monospace",
              fontWeight: "800",
              mt: "90px",
            }}
            variant="h4"
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
            Boumediene, passionné par le développement web, je combine esprit
            d’équipe, autonomie et réactivité. Curieux et adaptable, j’assimile
            rapidement les nouvelles technologies pour concevoir des solutions
            performantes et innovantes.
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
        <Box
          sx={{
            width: "35%",
            // border: "solid 3px blue ",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "90px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            src="/"
            alt=""
            width={500}
            height={600}
          />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
