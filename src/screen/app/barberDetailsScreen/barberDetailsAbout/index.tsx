import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Constants } from "./constants";
import { styles } from "./styles";
import BarberDetailsShowCard from "@/component/barberDetails/barberDetailsShowCard";
import PrimaryButton from "@/component/button/PrimaryButton";

const BarberDetailsAbout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.root}>
      <View style={styles.title_container}>
        <Text style={styles.sub_title_text}>
          At Masterpiece Barbershop, our dedicated team of skilled barbers are
          true artists in their craft, transforming your hair,
          {isExpanded
            ? " and giving you a fresh, confident look with every visit."
            : " "}
          <TouchableOpacity onPress={toggleExpanded} activeOpacity={0.5}>
            <View style={styles.read_More_Container}>
              <Text style={styles.read_More_button_text}>
                {isExpanded ? " Show less" : " Read more..."}
              </Text>
            </View>
          </TouchableOpacity>
        </Text>
      </View>
      {/* Opening Hours  */}
      <View style={styles.opening_hours_card}>
        {/*  */}
        <Text style={styles.header_text}>{"Opening Horus"}</Text>
        <View style={styles.main_row_container}>
          {/* Week day */}
          <View style={styles.row_container}>
            <Text style={styles.common_text}>{"Monday"} - </Text>
            <Text style={styles.common_text}>{"Friday"}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.common_time_text}>{"08.00 am"} - </Text>
            <Text style={styles.common_time_text}>{"05.00 pm"}</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.main_row_container}>
          {/* Week End */}
          <View style={styles.row_container}>
            <Text style={styles.common_text}>{"Saturday"} - </Text>
            <Text style={styles.common_text}>{"Sunday"}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.common_time_text}>{"08.00 am"} - </Text>
            <Text style={styles.common_time_text}>{"05.00 pm"}</Text>
          </View>
        </View>
      </View>
      {/* Our Tim  */}
      <View style={styles.our_tim_card}>
        <Text style={styles.header_text}>{"Our Tim"}</Text>
        <BarberDetailsShowCard data={barberList} />
      </View>

      {/* Button */}
      <PrimaryButton
        title='Booking Now'
        onPress={() => {}}
      />
    </View>
  );
};

export default BarberDetailsAbout;

const barberList = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    name: "Luther Hammes",
    service: "Specialist Haircut",
    review: "5.0",
  },
  {
    id: 2,
    image:
      "https://trueessenceskin.ca/wp-content/uploads/2021/07/main-picture-indian-head-massage-1170x694.jpg",
    name: "Emanuel Bernier",
    service: "Specialist Coloring",
    review: "5.0",
  },
  {
    id: 3,
    image:
      "https://bespokeunit.com/wp-content/uploads/2017/05/A-Man-Getting-Beard-Trim-At-Barber-Shop-July-2017.jpg",
    name: "Karl Vandervort",
    service: "Specialist Treatment",
    review: "5.0",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/39/82/1d/39821dfd3fece681b537dcee8fae986f.jpg",
    name: "Emanuel Bernier",
    service: "Specialist Treatment",
    review: "5.0",
  },
];
