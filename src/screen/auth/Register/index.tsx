import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Constants } from "./constants";
import { styles } from "./styles";
import TextInputField from "@/component/input/TextInput";
import { AuthStackScreenProps } from "@/navigation/navigation_Models/auth_Models/authModels";
import PrimaryButton from "@/component/button/PrimaryButton";
import TextButton from "@/component/button/Text_Button";
import MobileBackLogoHeader from "@/component/Back_LogoHeader";
import { ErrorFlash } from "@/utilis/flashMessage";
import { isEmail } from "@/utilis/validations";
import NumberInputDropDown from "@/component/input/NumberDropDown";

const Register = ({ navigation }: AuthStackScreenProps<"RegisterScreen">) => {
  const [form, setForm] = useState({
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    phoneNumber: "",
    phoneNumberError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  });
  
  const [code, setCode] = useState({
    label: "Sri Lanka", // Set default value
    value: "+94",
  });

  console.log('code.value', code.value);
  

  const onPressSend = () => {
    if (form.name === "") {
      ErrorFlash(Constants.NAME_REQUIRED);
    } else if (form.email === "") {
      ErrorFlash(Constants.EMAIL_REQUIRED);
    } else if (!isEmail(form.email)) {
      ErrorFlash(Constants.VALID_EMAIL);
    } else if (form.phoneNumber === "") {
      ErrorFlash(Constants.PHONE_REQUIRED);
    } else if (form.phoneNumber.length <= 10) {
      ErrorFlash(Constants.VALID_PHONE);
    } else if (form.password === "") {
      ErrorFlash(Constants.PASSWORD_REQUIRED);
    } else if (form.confirmPassword === "") {
      ErrorFlash(Constants.CONFIRM_PASSWORD_REQUIRED);
    } else if (form.password !== form.confirmPassword) {
      ErrorFlash(Constants.VALID_CONFIRM_PASS);
    } else {
      navigation.popToTop();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.mainViewContainer}>
            <MobileBackLogoHeader
              headerTitle={Constants.TITLE}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Text style={styles.subTitle}>{Constants.SUB_TITLE}</Text>

            <View style={styles.inputMainContainer}>
              <Text style={styles.inputTitle}>Name</Text>
              <TextInputField
                placeholder={Constants.NAME_PLACEHOLDER}
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
                onFocus={() => setForm({ ...form, nameError: "" })}
                textError={form.nameError}
                onBlur={() => {
                  if (form.name === "") {
                    setForm({ ...form, nameError: Constants.NAME_REQUIRED });
                  } else {
                    setForm({ ...form, nameError: "" });
                  }
                }}
              />

              <Text style={styles.inputTitle}>Email</Text>
              <TextInputField
                placeholder={Constants.EMAIL_PLACEHOLDER}
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
                onFocus={() => setForm({ ...form, emailError: "" })}
                textError={form.emailError}
                onBlur={() => {
                  if (form.email === "") {
                    setForm({ ...form, emailError: Constants.EMAIL_REQUIRED });
                  } else {
                    setForm({ ...form, emailError: "" });
                  }
                }}
              />

              <Text style={styles.inputTitle}>Phone Number</Text>
              <NumberInputDropDown
                data={numberData}
                value={code.value}
                onChange={(item: any) => setCode(item)}
                // placeholderNumber = {'+49'}
                valueNumber={form.phoneNumber}
                onChangeNumber={(number) => setForm({ ...form, phoneNumber: number })}
                placeholder={Constants.PHONE_NUMBER}
                onFocus={() => setForm({ ...form, phoneNumberError: "" })}
                textError={form.phoneNumberError}
                onBlur={() => {
                  if (form.phoneNumber === "") {
                    setForm({ ...form, phoneNumberError: Constants.PHONE_REQUIRED });
                  } else if (form.phoneNumber.length < 10) {
                    setForm({ ...form, phoneNumberError: Constants.VALID_PHONE });
                  } else {
                    setForm({ ...form, phoneNumberError: "" });
                  }
                }}
              />

              <Text style={styles.inputTitle}>Password</Text>
              <TextInputField
                placeholder={Constants.PASSWORD_PLACEHOLDER}
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
                onFocus={() => setForm({ ...form, passwordError: "" })}
                secureTextEntry
                textError={form.passwordError}
                onBlur={() => {
                  if (form.password === "") {
                    setForm({ ...form, passwordError: Constants.PASSWORD_REQUIRED });
                  } else {
                    setForm({ ...form, passwordError: "" });
                  }
                }}
              />

              <Text style={styles.inputTitle}>Confirm Password</Text>
              <TextInputField
                placeholder={Constants.CONFIRM_PASSWORD}
                value={form.confirmPassword}
                onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
                onFocus={() => setForm({ ...form, confirmPasswordError: "" })}
                secureTextEntry
                textError={form.confirmPasswordError}
                onBlur={() => {
                  if (form.confirmPassword === "") {
                    setForm({ ...form, confirmPasswordError: Constants.CONFIRM_PASSWORD_REQUIRED });
                  } else if (form.password !== form.confirmPassword) {
                    setForm({ ...form, confirmPasswordError: Constants.VALID_CONFIRM_PASS });
                  } else {
                    setForm({ ...form, confirmPasswordError: "" });
                  }
                }}
              />

              <PrimaryButton
                style={styles.buttonContainer}
                title={Constants.REGISTER_BUTTON_TITLE}
                onPress={onPressSend}
              />

              <View style={styles.alreadyAccContainer}>
                <Text style={styles.alreadyAccText}>{Constants.ALREADY_HAVE_TITLE}</Text>
                <TextButton
                  textStyle={styles.textButtonStyle}
                  title={Constants.LOGIN_BUTTON_TITLE}
                  onPress={() => {
                    navigation.navigate("LogInScreen");
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const numberData = [
  {
    label: "Sri Lanka",
    value: "+94",
    image: "https://cdn.countryflags.com/thumbs/sri-lanka/flag-400.png",
  },
  {
    label: "United Kingdom",
    value: "+44",
    image: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
  },
  {
    label: "India",
    value: "+91",
    image: "https://cdn.countryflags.com/thumbs/india/flag-400.png",
  },
  {
    label: "United States",
    value: "+10",
    image: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
  },
  {
    label: "Canada",
    value: "+1",
    image: "https://cdn.countryflags.com/thumbs/canada/flag-400.png",
  },
  {
    label: "Australia",
    value: "+61",
    image: "https://cdn.countryflags.com/thumbs/australia/flag-400.png",
  },
  {
    label: "Germany",
    value: "+49",
    image: "https://cdn.countryflags.com/thumbs/germany/flag-400.png",
  },
  {
    label: "France",
    value: "+33",
    image: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
  },
  {
    label: "Japan",
    value: "+81",
    image: "https://cdn.countryflags.com/thumbs/japan/flag-400.png",
  },
  {
    label: "United Arab Emirates",
    value: "+971",
    image: "https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-400.png",
  },
];
