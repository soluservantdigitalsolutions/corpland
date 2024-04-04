import { View, Text, ImageBackground } from "react-native";
import React from 'react'

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/bg1.jpg")}
      style={{ width: "100%", height: "100%" }} >
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;