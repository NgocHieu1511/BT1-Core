import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [phone, setPhone] = useState("");

  const onPressFunction = () => {
    console.log("Số điện thoại:", phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.content}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
          Pro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          inputMode="numeric"
        />
        <Pressable
          onPress={onPressFunction}
          style={[
            styles.button,
            { backgroundColor: phone ? "#007bff" : "#ccc", marginTop: 30 },
          ]}
        >
          <Text>Tiếp tục</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 24,
    marginLeft: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    textAlign: "left",
  },
  desc: {
    fontSize: 13,
    color: "black",
    marginBottom: 20,
    textAlign: "left",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
