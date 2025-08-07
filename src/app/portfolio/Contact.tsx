"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import CardHead from "@/components/card/CardHead";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccess(true);
          setError(null);
          formRef.current?.reset();
        },
        (err) => {
          setError("Une erreur s'est produite. Veuillez réessayer.");
          console.error("Error:", err?.message || err);
        }
      );
  };

  return (
    <Box sx={{ py: 6 }}>
      <CardHead
        title="Contact"
        text="Je suis toujours ouvert à de nouvelles opportunités et collaborations. N’hésitez pas à me contacter pour discuter d’un projet ou simplement échanger."
      />
      <Container
        sx={{
          py: 6,
          backgroundColor: "#050A30",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderRadius: "8px",
          border: "solid 1px #1976d2",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        maxWidth="sm"
      >
        <Typography
          variant="h5"
          align="center"
          color="#fff"
          sx={{ fontFamily: "Roboto" }}
          gutterBottom
        >
          Contactez-moi par email
        </Typography>

        <form ref={formRef} onSubmit={sendEmail}>
          <TextField
            placeholder="Nom"
            name="user_name"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#fffff",
      

                 // Couleur du label
              },
              "& .MuiInputBase-root": {
                backgroundColor: "#fff",
              },
              mb: 2,
            }}
          />
          <TextField
            placeholder="Email"
            name="user_email"
            type="email"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#fffff", // Couleur du label
           

              },
              "& .MuiInputBase-root": {
                backgroundColor: "#fff",
              },
              mb: 2,
            }}
          />
          <TextField
            placeholder="Message"
            name="message"
            multiline
            rows={5}
            fullWidth
            required
            variant="outlined"
            margin="normal"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#fffff", // Couleur du label
             

              },
              "& .MuiInputBase-root": {
                backgroundColor: "#fff",
              },
              mb: 2,
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "#1976d2",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#115293",
              },
              mb: 2,
            }}
          >
            Envoyer
          </Button>

          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Votre message a bien été envoyé !
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
