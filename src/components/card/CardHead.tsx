import { Typography, Box } from '@mui/material';
import React from 'react';

interface CardHeadProp {
  title: string;
  text: string;
}

function CardHead({ title, text }: CardHeadProp) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000814",
        px: 2,
        py: 5,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "32px", md: "50px" },
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: 800,
          color: "#EDEDFF",
          transition: "all 0.3s ease",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "16px", md: "21px" },
          fontFamily: "Roboto",
          mt: "10px",
          mb: "30px",
          textAlign: "center",
          width: { xs: "90%", md: "50%" },
          color: "#CCCCCC"
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default CardHead;
