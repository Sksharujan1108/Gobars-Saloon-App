import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import BackTitleHeader from "@/component/backTitleHeader";
import MobileCustomCalender from "@/component/bookComponent/customeCalender";
import MobileCustomService from "@/component/bookComponent/customeService";
import MobileCustomAvailableTime from "@/component/bookComponent/customAvailableTime";
import { ErrorFlash } from "@/utilis/flashMessage";
import MobileCustomPayment from "@/component/bookComponent/customePayment";
import PrimaryButton from "@/component/button/PrimaryButton";
import DealBookSvg from '@/assets/svg/book/DealBook.svg'

const BookAppointment = () => {
  const [services, setServices] = useState<any>(data); // Initialize state with the data array
  const [selectedId, setSelectedId] = useState<number>(1); // Set initial selected service to first one

  const [serviceTime, setServiceTime] = useState<any>(serviceTimeData); // Initialize state with the data array
  const [selectedTimeId, setSelectedTimeId] = useState<number>(1); // Set initial selected time to first one
  const [serviceTimeError, setServiceTimeError] = useState<string>(""); // New state for error messages

  // Service Selection
  const handleServicePress = (id: number) => {
    // Update the selected service state
    setSelectedId(id); // Set the new selected ID
    setServices((prevServices: any) => {
      return prevServices.map((service: any) => ({
        ...service,
        isSelected: service.id === id, // Update the selected status for the current service
      }));
    });
  };

  // Select Time
  const handleTimePress = (id: number) => {
    const selectedTime = serviceTime.find((time: any) => time.id === id);

    if (selectedTime && !selectedTime.isAvailable) {
      ErrorFlash("This time is not available. Please select another time");
    } else {
      // Update the selected time state
      setSelectedTimeId(id); // Set the new selected ID
      setServiceTime((prevServiceTime: any) => {
        return prevServiceTime.map((serviceTime: any) => ({
          ...serviceTime,
          isSelected: serviceTime.id === id, // Update the selected status for the current service time
        }));
      });
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"translucent"}
        translucent={true}
      />

      {/* Back Title */}
      <BackTitleHeader title={"Book Appointment"} onPress={() => {}} />

      {/* Scroll View */}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Container */}
        <View style={styles.main_container}>
          {/* Calendar */}
          <MobileCustomCalender />
          {/* Service */}
          <Text style={styles.common_heading_text}>{"Choose Service"}</Text>
          <MobileCustomService
            data={services} // Pass the updated state here
            selectedId={selectedId}
            onPress={handleServicePress}
          />
          {/* Available time */}
          <Text style={styles.common_heading_text}>{"Available time"}</Text>
          <MobileCustomAvailableTime
            data={serviceTime}
            selectTimeId={selectedTimeId}
            onPress={handleTimePress}
          />

          {/* Payment */}
          <MobileCustomPayment
            data={totalPayment}
          />

          {/* Button */}
          <PrimaryButton
            title = {'Deal booking'}
            onPress={() => {}}
            child={
              <DealBookSvg/>
            }
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookAppointment;

const data = [
  {
    id: 1,
    image:
      "https://www.saltgrooming.com/cdn/shop/articles/haircut-clippers_54d401f5-2c6f-4064-a5f7-e3546f7860ea_1200x.png?v=1719220336",
    title: "Basic Hair Cut",
    price: 400,
  },
  {
    id: 2,
    image:
      "https://www.greensboroughplaza.com.au/wp-content/uploads/2021/10/Retailer_Clips-and-cuts-640x427.jpg",
    title: "Kids haircut",
    price: 300,
  },
  {
    id: 3,
    image:
      "https://orane.com/wp-content/uploads/2024/07/hair-design-course-scaled.jpg",
    title: "Hair coloring",
    price: 500,
  },
  {
    id: 4,
    image:
      "https://www.jvprousa.com/cdn/shop/files/airbrushmodel_9596ffcf-1ad3-4a40-b585-c6d4130b9184.png?v=1710847561&width=1445",
    title: "Hair Treatment",
    price: 600,
  },
  {
    id: 5,
    image:
      "https://lifeandpursuits.in/cdn/shop/articles/How_Head_Massages_with_Oil_Can_Help_You_Sleep_Better_At_Night.jpg?v=1558348395",
    title: "Massage",
    price: 800,
  },
];

const serviceTimeData = [
  {
    id: 1,
    time: "08 : 00",
    isAvailable: true,
  },
  {
    id: 2,
    time: "08 : 30",
    isAvailable: true,
  },
  {
    id: 3,
    time: "09 : 00",
    isAvailable: false,
  },
  {
    id: 4,
    time: "09 : 30",
    isAvailable: true,
  },
  {
    id: 5,
    time: "10 : 00",
    isAvailable: true,
  },
  {
    id: 6,
    time: "10 : 30",
    isAvailable: false,
  },
  {
    id: 7,
    time: "11 : 00",
    isAvailable: true,
  },
  {
    id: 8,
    time: "11 : 30",
    isAvailable: true,
  },
  {
    id: 9,
    time: "12 : 00",
    isAvailable: true,
  },
  {
    id: 10,
    time: "12 : 30",
    isAvailable: true,
  },
  {
    id: 11,
    time: "13 : 00",
    isAvailable: false,
  },
  {
    id: 12,
    time: "13 : 30",
    isAvailable: true,
  },
  {
    id: 13,
    time: "14 : 00",
    isAvailable: true,
  },
  {
    id: 14,
    time: "14 : 30",
    isAvailable: true,
  },
];

const totalPayment = {
  serviceList: [
    {
      id: 1,
      service: 'Basic Hair Cut',
      price: 400,
    },
    {
      id: 2,
      service: 'Hair Coloring',
      price: 200,
    },
  ],
  totalServicePrice: 600,
}
