import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";
import { Container, Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface EducProps {
  title?: string;
  annee?: string;
  text?: string;
  children?: ReactNode;
}

function CardPage({ title, annee, text, children }: EducProps) {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pr: 2,
          }}
        >
          <Timeline
            position="right"
            sx={{
              m: 0,
              p: 0,
              "& .MuiTimelineItem-root": {
                minHeight: "100%",
              },
            }}
          >
            <TimelineItem sx={{ minHeight: "90%" }}>
              <TimelineSeparator sx={{ height: "90%" }}>
                <TimelineDot color="primary" variant="outlined" />
                <TimelineConnector sx={{ flex: 1 }} />
              </TimelineSeparator>
            </TimelineItem>
          </Timeline>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            width: "70%",
            border: "solid 1px #1976d2",
          backgroundColor:'#050A30',
            borderRadius: "15px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0px 8px 20px rgba(0, 0, 255, 0.2)",
              borderColor: "#1976d2",
              cursor: "pointer",
            },
          }}
        >
          <Box sx={{ m: "25px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: "700",
                color: "#1976d2", // Bleu primaire
                mb: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "monospace",
                color: "#757575", // gris
                mb: 1,
              }}
            >
              {annee}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize:'17px',
                fontFamily: "Roboto",
                color: "#E0E0E0", // blanc cassé
                lineHeight: 1.6,
              }}
            >
              {text}
            </Typography>
            {children}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default CardPage;
