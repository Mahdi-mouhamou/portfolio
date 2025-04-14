import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'


interface PropsCard{
    title:string;
    children:ReactNode;
}

function Card({title,children}:PropsCard) {
  return (
    <>
      <Box sx={{ width: "45%", border: "solid 1px #1976d2", borderRadius:'15px' ,backgroundColor:'#050A30',  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0px 8px 20px rgba(0, 0, 255, 0.2)",
              borderColor: "#1976d2",
              cursor: "pointer",
            },}}>
          <Typography
            sx={{
              fontSize: "25px",
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: "600",
              mt: "15px",
              mb:'20px',
              color:'#EDEDFF',
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width:'100%',
              justifyContent:'center',
              
            }}
          >
                {children}
          </Box>
        </Box>     
    </>
  )
}

export default Card
