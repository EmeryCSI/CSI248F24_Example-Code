import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function LocationScreen() {
  //three things tracked from state
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  //Location is API which requires permission
  useEffect(() => {
    //This is an anonymous function created inline and called at the same time
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission Denied");
        return;
      }
    })();
  }, []);
  return (
    <View>
      <Text>LocationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
