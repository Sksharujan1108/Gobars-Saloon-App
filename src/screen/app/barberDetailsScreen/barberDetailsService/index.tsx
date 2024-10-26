import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import ServiceListShowCard from "@/component/bookComponent/serviceListShowCard";

const BarberDetailsService = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.our_service_text}>Our Service</Text>
      <ServiceListShowCard data={serviceList} />
    </View>
  );
};

export default BarberDetailsService;

const serviceList = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    title: "Basic haircut",
    service: "Basic haircut & vitamint",
    price: 400,
  },
  {
    id: 2,
    image:
      "https://trueessenceskin.ca/wp-content/uploads/2021/07/main-picture-indian-head-massage-1170x694.jpg",
    title: "Massage",
    service: "Extra massage",
    price: 500,
  },
  {
    id: 3,
    image:
      "https://bespokeunit.com/wp-content/uploads/2017/05/A-Man-Getting-Beard-Trim-At-Barber-Shop-July-2017.jpg",
    title: "Basic haircut",
    service: "Haircut",
    price: 450,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    title: "Basic haircut",
    service: "Basic haircut & vitamint",
    price: 400,
  },
  {
    id: 5,
    image:
      "https://trueessenceskin.ca/wp-content/uploads/2021/07/main-picture-indian-head-massage-1170x694.jpg",
    title: "Massage",
    service: "Extra massage",
    price: 500,
  },
];
