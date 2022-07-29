import React, { useEffect, useState } from "react";
import Box from "../pure/Box";

const Container = () => {
  const randomColor = () => {
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    const colors = [];

    for (let i = 0; i < 1; i += 1) {
      for (let j = 0; j < 6; j += 1) {
        color = color + symbols[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
      color = "#";
    }

    return colors;
  };

  
  const [color, setColors] = useState('black');

console.log(color);

  const aleatorio = () => {
    
        setColors(randomColor(color));
        console.log(color);
   
    
  }

  const stopAleatorio = () => {
    setColors('black');
  }

  const resetColor = () => {
    setColors('black')
  }

  return (
    <div
      style={{
        backgroundColor: "#010fff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginTop: "10px" }}>
        Sesion 10 - 11 - 12{" "}
        <span style={{ color: "steelblue" }}>OpenBootcamp</span>{" "}
      </h1>
      <Box color={color} setColors={setColors} aleatorio={aleatorio} stopAleatorio={stopAleatorio} resetColor={resetColor} />
    </div>
  );
};

export default Container;
