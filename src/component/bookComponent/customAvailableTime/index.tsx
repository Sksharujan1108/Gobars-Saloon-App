import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";

interface MobileCustomAvailableTimeProps {
  data?: {
    id: number;
    time: string;
    isAvailable?: boolean;
  }[];
  selectTimeId?: number;
  onPress?: (id: number) => void;
}

const MobileCustomAvailableTime = (props: MobileCustomAvailableTimeProps) => {
  const { data, selectTimeId, onPress } = props;
  return (
    <View>
      <FlatList
        data={data}
        // horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={4}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          width: "100%",
          marginTop: 15,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.time_container,
              !item.isAvailable && styles.not_available_time_container,
              selectTimeId === item.id && styles.selected_time_container, // Add selected style if the current item's id is equal to selectTimeId
            ]}
            activeOpacity={0.5} // TouchableOpacity's activeOpacity
            onPress={() => {
              if (item?.isAvailable && onPress) {
                onPress(item.id); // Call 'onPress' only if it's defined
              }
            }}
            disabled={!item.isAvailable}
          >
            <Text
              style={[
                styles.time_text,
                !item.isAvailable && styles.not_available_time_text,
              ]}
            >
              {" "}
              {item.time}{" "}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MobileCustomAvailableTime;
