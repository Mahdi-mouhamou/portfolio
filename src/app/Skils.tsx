import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "@/app/page.module.css";
import Card from "../components/card/Card";
import CardItem from "../components/card/CardItem";
import CardHead from "../components/card/CardHead";

function Skils() {
  return (
    <>
      <CardHead
        title="Compétences"
        text="Voici quelques-unes de mes compétences sur lesquelles je travaille depuis maintenant 2 ans."
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          height: {md:"70vh",xs:'100%'},
          mb:{md:0,xs:2},
          gap: 4,
        }}
      >
        <Card title="Frontend">
          <CardItem
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            title="React Js"
          />
          <CardItem src="/NextJs.svg" title="Next Js" />
          <CardItem src="/mui.png" title="MUI" />
        </Card>

        <Card title="Backend">
          <CardItem src="/Node.svg" title="Node Js" />
          <CardItem src="/Laravel.svg" title="Laravel" />
          <CardItem src="/MuSQL.svg" title="My SQL" />
          <CardItem src="/python.svg" title="Python" />
          <CardItem src="/mongoDb.png" title="MongoDB" />
        </Card>

        <Card title="Others">
          <CardItem src="/Icon.png" title="GitHub" />
          <CardItem src="/vercel.svg" title="Vercel" />
          <CardItem src="/postman.svg" title="Postman" />
        </Card>

        <Card title="Mobile">
          <CardItem src="/native.png" title="React Native" />
          <CardItem src="/expo.jpeg" title="Expo" />
        </Card>
      </Container>
    </>
  );
}

export default Skils;
