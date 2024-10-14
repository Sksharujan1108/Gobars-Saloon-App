import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import SelectTick from "@/assets/svg/book/TickSelect.svg";
import { BlurView } from "expo-blur";

interface MobileCustomServiceProps {
  data?: {
    id: number;
    image: any;
    title: string;
    price: number;
  }[];
  selectedId?: number; // Receive selectedId from parent
  onPress?: (id: number) => void; // Made 'onPress' optional, but we will check it before calling
}

const MobileCustomService = ({
  data,
  onPress,
  selectedId,
}: MobileCustomServiceProps) => {
  return (
    <View>
      {/* FlatList Component */}
      <FlatList
        data={data}
        horizontal // Ensures list items are displayed in a row
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} // Use item.id as key
        contentContainerStyle={styles.list_container}
        renderItem={({ item }) => (
          <View style={styles.data_row_container}>
            <TouchableOpacity
              style={styles.list_item}
              onPress={() => {
                if (onPress) {
                  onPress(item.id); // Call 'onPress' only if it's defined
                }
              }}
              activeOpacity={0.5}
            >
              <View style={styles.image_container}>
                <Image source={{ uri: item.image }} style={styles.image} />
                {/* Show tick if the current item is selected */}
                {selectedId == item.id && (
                  <BlurView
                    style={styles.checkmark_blur_container}
                    intensity={Platform.OS == "android" ? 80 : 5}
                    tint="light"
                  >
                    <SelectTick />
                  </BlurView>
                )}
              </View>
              <Text style={styles.title_text}>{item.title}</Text>
              <Text style={styles.price_text}>
                {"Rs."} {Number(item.price).toLocaleString()}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MobileCustomService;
