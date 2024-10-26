import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BarberDetailsReviewShowCard from "@/component/barberDetails/barberDetailsReviewShowCard";
import { styles } from "./styles";
import PrimaryButton from "@/component/button/PrimaryButton";

const BarberDetailsReview = () => {
  return (
    <View style={styles.root}>
      <BarberDetailsReviewShowCard data={barberList} />

      <View style={styles.button_container}>
        {/* Button */}
        <PrimaryButton title="Booking Now" onPress={() => {}} />
      </View>
    </View>
  );
};

export default BarberDetailsReview;

const barberList = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    name: "Luther Hammes",
    review: "5.0",
    description: "Good service, recommendation for barber shop seekers",
  },
  {
    id: 2,
    image:
      "https://trueessenceskin.ca/wp-content/uploads/2021/07/main-picture-indian-head-massage-1170x694.jpg",
    name: "Emanuel Bernier",
    review: "4.0",
    description:
      "Price is quite affordable and the service is good, I am very satisfied",
  },
  {
    id: 3,
    image:
      "https://bespokeunit.com/wp-content/uploads/2017/05/A-Man-Getting-Beard-Trim-At-Barber-Shop-July-2017.jpg",
    name: "Karl Vandervort",
    review: "5.0",
    description: "Place is not too far and the shaving results are good",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    name: "Emanuel Bernier",
    review: "5.0",
    description:
      "Style of barbering here really follows the times, I like the service",
  },
];
