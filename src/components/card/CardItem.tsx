import React from 'react'
import styles from "@/app/page.module.css";

interface CardItem{
    src?:string;
    title:string;
    styleCard?: React.CSSProperties;
}

const defaultStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  borderRadius: '15px',
  border: '1px solid #0505FF',
  gap: '8px',
  padding: '12px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px',
  color: '#EDEDFF',
};

function CardItem({src,title,styleCard}:CardItem) {
  return (
    <div style={styleCard ?? defaultStyle}>
      {src && (
        <img
          src={src}
          alt=""
          style={{ width: 24, height: 24, verticalAlign: 'middle' }}
        />
      )}
      {title}
    </div>
  )
}

export default CardItem
