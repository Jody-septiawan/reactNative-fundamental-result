import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Component
import Content from "./src/components/content";
import Header from "./src/components/header";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Header />
      <Content />
    </View>
  );
}
