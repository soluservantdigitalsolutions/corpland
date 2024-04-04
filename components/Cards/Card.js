import React, { useState } from "react";
import { View, Text } from "react-native";
import { BlurView } from "expo-blur";


const Card = () => {

  return (
    <BlurView
      intensity={50}
      className="text-white p-5 rounded-lg overflow-hidden"
      style={{}}>

    </BlurView>
  );
};

export default Card;
