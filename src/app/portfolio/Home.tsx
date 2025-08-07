import { Box, Card, CardMedia, Container, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Typewriter from "../../components/TypeWriter";

function Home() {
  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "start",
          height: "100vh",
          background: "#000814",
          gap: 4,
          flexWrap: "wrap",
          pt:{xs:'5px', md:'35px'},
          px: { xs: 2, md: 4 },

        }}
      >
        {/* Texte à gauche */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, ml: { md: "24px" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "50px" },
              fontFamily: "monospace",
              fontWeight: "800",
              mt: { xs: 2, md: "50px" },
              color: "#fff",
            }}
          >
            Bonjour, <br />
            je suis Mouhamou Mahdi
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontFamily: "monospace",
              fontWeight: "600",
              my: "10px",
              color: "#3F00FF",
            }}
          >
            <Typewriter
              texts={[
                "Développeur Full Stack",
                "Formateur",
              ]}
            />
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "16px", md: "19px" },
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
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
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
            width: { xs: "0%", md: "35%" },
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
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
