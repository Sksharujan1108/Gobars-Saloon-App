import { StyleSheet, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { styles } from "./styles";

const FindLocation = () => {
  return (
    <View style={styles.container}>
     <MapView
    //    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
    //    region={{
    //      latitude: 37.78825,
    //      longitude: -122.4324,
    //      latitudeDelta: 0.015,
    //      longitudeDelta: 0.0121,
    //    }}
     >
     </MapView>
   </View>
  );
};

export default FindLocation;
