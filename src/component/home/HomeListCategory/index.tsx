import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { ImageProps } from "react-native-svg";

interface HomeListCategoryProps {
  dataList: {
    image: ImageProps;
    name: string;
  }[];
  isActive: (name: string) => boolean;
  onPress: (name: string) => void;
}

const HomeListCategory = (props: HomeListCategoryProps) => {
  const { dataList, isActive, onPress } = props;

  const handleOnPress = (name: string) => {
    onPress && onPress(name);
  };

  return (
    <View>
      <FlatList
        data={dataList}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.list_container,
              isActive(item?.name) && styles.active_container,
            ]}
          >
            {/* Image View */}
            <View style={styles.image_container}>
              <Image
                source={item?.image} // Corrected the syntax here
                // style={styles.image} // Make sure to add appropriate styles for the image
              />
            </View>
            <Text
              style={[
                styles.title_text,
                // isActive(item?.name) && styles.active_text,
              ]}
            >
              {" "}
              {item?.name}{" "}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeListCategory;
