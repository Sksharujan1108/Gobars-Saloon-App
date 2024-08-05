import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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

  const onPressSend = () => {
    if (form.email === "") {
      ErrorFlash(Constants.EMAIL_REQUIRED);
    } else if (!isEmail(form.email)) {
      ErrorFlash(Constants.VALID_EMAIL);
    } else {
      navigation.navigate("AuthenticationScreen", {
        email: form.email,
      });
    }
  };

  return (
    <View style={styles.root}>
      {/* SafeArea */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Main View Container */}
        <View style={styles.mainViewContainer}>
          {/* Title */}
          <MobileBackLogoHeader
            headerTitle={Constants.TITLE}
            onPress={() => navigation.goBack()}
          />
          {/* SubTitle */}
          <Text style={styles.subTitle}>{Constants.SUB_TITLE} </Text>

          {/* input Main Container  */}
          <View style={styles.inputMainContainer}>
            <KeyboardAwareScrollView
              contentContainerStyle = {styles.scrollView}
              showsVerticalScrollIndicator = {false}
              showsHorizontalScrollIndicator = {false}
            >
              {/* Name Input */}
              <Text style={styles.inputTitle}> {"Name"} </Text>
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

              {/* Email Input */}
              <Text style={styles.inputTitle}> {"Email"} </Text>
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

              {/* Password Input */}
              <Text style={styles.inputTitle}> {"Password"} </Text>
              <TextInputField
                placeholder={Constants.PASSWORD_PLACEHOLDER}
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
                onFocus={() => setForm({ ...form, passwordError: "" })}
                secureTextEntry
                textError={form.passwordError}
                onBlur={() => {
                  if (form.password === "") {
                    setForm({
                      ...form,
                      passwordError: Constants.PASSWORD_REQUIRED,
                    });
                  } else {
                    setForm({ ...form, passwordError: "" });
                  }
                }}
              />

              {/* Confirm Password Input */}
              <Text style={styles.inputTitle}> {"Confirm Password"} </Text>
              <TextInputField
                placeholder={Constants.CONFIRM_PASSWORD}
                value={form.confirmPassword}
                onChangeText={(text) =>
                  setForm({ ...form, confirmPassword: text })
                }
                onFocus={() => setForm({ ...form, confirmPasswordError: "" })}
                secureTextEntry
                textError={form.confirmPasswordError}
                onBlur={() => {
                  if (form.confirmPassword === "") {
                    setForm({
                      ...form,
                      confirmPasswordError: Constants.CONFIRM_PASSWORD_REQUIRED,
                    });
                  } else if (form.password != form.confirmPassword) {
                    setForm({
                      ...form,
                      confirmPasswordError: Constants.VALID_PASS,
                    });
                  } else {
                    setForm({ ...form, confirmPasswordError: "" });
                  }
                }}
              />

              {/* Send Button */}
              <PrimaryButton
                style={styles.buttonContainer}
                title={Constants.REGISTER_BUTTON_TITLE}
                onPress={onPressSend}
              />

              {/* Already Have Acc */}
              <View style={styles.alreadyAccContainer}>
                <Text style={styles.alreadyAccText}>
                  {" "}
                  {Constants.ALREADY_HAVE_TITLE}{" "}
                </Text>
                <TextButton
                  textStyle={styles.textButtonStyle}
                  title={Constants.LOGIN_BUTTON_TITLE}
                />
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;
