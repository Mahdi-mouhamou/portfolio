"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useRouter } from "next/navigation";

const pages = [
  "Accueil",
  "Compétences",
  "Parcours",
  "Expériences",
  "Projets",
  "Contact",
];


interface Props {
  onHome: () => void;
  onSkils: () => void;
  onEducation: () => void;
  onExperience: () => void;
  onProject:()=>void;
  onContact:()=>void;
}

function ResponsiveAppBar({ onHome, onSkils, onEducation ,onExperience,onProject,onContact}: Props) {
  const route= useRouter();
  const pageHandlers: { [key: string]: () => void } = {
    Accueil: onHome,
    Compétences: onSkils,
    Parcours: onEducation,
    Expériences:onExperience,
    Projets:onProject,
    Contact:onContact,
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0, // active dès qu'on scrolle
  });

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 1100,
        backgroundColor: "black",
        boxShadow: trigger ? "0 1px 1px rgba(255, 255, 255, 0.58)" : "none",
        borderBottom: trigger ? "1px solid rgba(131, 126, 126, 0.98)" : "none",
      }}
    >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            ml: 15,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Portfolio
        </Typography>

        <Box
          sx={{
            //
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "end",
            gap: 2,
          }}
        >
          {pages.map((page) => (
            <Button
              // variant="outlined"
              key={page}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                position: "relative",
                cursor: "pointer",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "2px",
                  width: "0%",
                  backgroundColor: "#EDEDFF",
                  transition: "width 0.3s ease-in-out",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              onClick={() => pageHandlers[page]?.()}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            // border:'solid 3px blue',
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              my: 2,
              mr: 15,
              color: "white",
              display: "block",
              borderRadius: "15px",
  /*             "&:hover": {
                  
                  backgroundColor: "#1565c0",
              } */
            }}
            onClick={()=>{
              route.replace("https://github.com/Mahdi-mouhamou")
            }}
          >
           Profil Github 
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
