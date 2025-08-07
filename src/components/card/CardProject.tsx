import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import style from 'styled-jsx/style'
import CardItem from './CardItem'

interface CardProjectProp{
    src:string;
    item:string[];
    title:string;
    date:string;
    description:string;
}

function CardProject({src,item,title,date,description}:CardProjectProp) {
    const style = {
        borderRadius: "8px",
        border: "solid 1px #1976d2",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 7px 2px 7px ",
        color: "white",
        fontSize: "12px",
      };
  return (
   
        <Box
          sx={{
            border: "solid 1px #1976d2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: {xs:"100%",md:"30%"},
            borderRadius:'8px',
            backgroundColor:'#050A30',
            height:{ xs:'500px',md:'500px'},
            transition: "all 0.3s ease-in-out",
            mb:{md:0,xs:2},
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0px 8px 20px rgba(0, 0, 255, 0.2)",
              borderColor: "#1976d2",
              cursor: "pointer",
            },
            

          }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: "80%",
              height: "160px",
              margin: "20px 35px 15px 35px",
              borderRadius: "10px",
              

            }}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 2,
              width: "90%",
              margin: "10px",
            }}
          >
        {item.map((title, index) => (
        <CardItem
          key={index}
          title={title}
          styleCard={style}
        />
      ))}
          </Box>
          <Box
            sx={{
              // border: "solid 1px green",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "flex-start",
              gap: 1,
              width: "90%",
              margin: "15px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: "600",
                color: "#1976d2", // Bleu primaire
              }}
            >
             {title}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "monospace",
                color: "#757575", // gris
              }}
            >
             {date}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                // fontFamily: "monospace",
                color: "#E0E0E0", // blanc cassé
                lineHeight: 1.6,
                fontSize: "13px",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

  )
}

export default CardProject
