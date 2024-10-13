import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Calendar } from "react-native-calendars";
import { ColorSheet } from "@/utilis/ColorSheet";
const MobileCustomCalender = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // State to store selected date, initializing with today
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <View style={styles.container}>
      <Text style={styles.header_Text}>{"Choose Date"}</Text>
      <Calendar
        current={today}
        onDayPress={(day: any) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            // marked: true,
            selectedColor: "black", // This sets the background color of the selected date
          },
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#000",
          todayTextColor: "#000",
          dayTextColor: "#000", // date color
          selectedDayBackgroundColor: "#000",
          selectedDayTextColor: "#ffffff",
          arrowColor: "#000",
          monthTextColor: "#000",
          indicatorColor: "black",
          textMonthFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
          // New styles for header background
          "stylesheet.calendar.header": {
            header: {
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: ColorSheet.IconColor, // Set your desired background color here
              borderRadius: 10, // Optional: Add border-radius
              padding: 5, // Optional: Add padding for spacing
            },
            monthText: {
              fontSize: 18,
              fontWeight: "bold",
              color: "#000",
              margin: 10,
            },
          },
        }}
      />
    </View>
  );
};

export default MobileCustomCalender;
