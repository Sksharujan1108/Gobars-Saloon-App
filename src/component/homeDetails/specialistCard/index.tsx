import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";

interface SpecialistCardProps {
  data: {
    id: number;
    image: string;
    name: string;
    service: string;
  }[];
}

const SpecialistCard = (props: SpecialistCardProps) => {
  const { data } = props;
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator = {false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.container} activeOpacity={0.5}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.name_text}>{item.name}</Text>
            <Text style={styles.service_text}>{item.service}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SpecialistCard;
