"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

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
  onProject: () => void;
  onContact: () => void;
}

function ResponsiveAppBar({
  onHome,
  onSkils,
  onEducation,
  onExperience,
  onProject,
  onContact,
}: Props) {
  const route = useRouter();

  const pageHandlers: { [key: string]: () => void } = {
    Accueil: onHome,
    Compétences: onSkils,
    Parcours: onEducation,
    Expériences: onExperience,
    Projets: onProject,
    Contact: onContact,
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (page: string) => {
    handleCloseMenu();
    pageHandlers[page]?.();
  };

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
        {/* Logo desktop */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            ml: { md: 15, xs: 2 },
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

        {/* Logo mobile */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            ml: 2,
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Portfolio
        </Typography>

        {/* Menu burger pour mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
          <IconButton
            size="large"
            aria-label="menu mobile"
            onClick={handleOpenMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={() => route.replace("https://github.com/Mahdi-mouhamou")}>
              <Typography textAlign="center">Profil Github</Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* Navigation desktop */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {pages.map((page) => (
            <Button
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

        {/* Bouton GitHub desktop */}
        <Box
          sx={{
            flexGrow: 0,
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "end",
            mr: 15,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              my: 2,
              color: "white",
              borderRadius: "15px",
            }}
            onClick={() => {
              route.replace("https://github.com/Mahdi-mouhamou");
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
