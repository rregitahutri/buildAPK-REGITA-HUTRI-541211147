import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import CustomButton from "../atomics/customButton";
import CustomInput from "../atomics/customInput";

const Register = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.illusContainer}>
        <Image
          style={styles.illustration}
          source={require("../../assets/images/illu-login.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Sign Up</Text>
        <Text style={styles.subTitle}>Please Sign Up to continue.</Text>
        <CustomInput style={styles.username} placeholder="Full Name" />
        <CustomInput style={styles.username} placeholder="Email" />
        <CustomInput style={styles.username} placeholder="Password" />
        <View style={{ alignItems: "center" }}>
          <CustomButton
            title="Sign Up"
            onPress={() => navigation.navigate("Portofolio")}
          />
          <Text style={{ color: "#c8cbcc" }}>
            ---------------------------------- OR
            -------------------------------------
          </Text>
          <CustomButton
            title="Sign Up with Google"
            size="enabled"
            backgroundColor="#c8cbcc"
          />
        </View>
        <View style={styles.signupContainer}>
          <Text>Already have an account?</Text>
          <View style={{ width: 6 }} />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signup}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  illusContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 100,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 25,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 15,
  },
  username: {
    height: 50,
    width: "100%",
    marginVertical: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#e4eff5",
    borderRadius: 14,
    fontSize: 14,
  },
  signupContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  signup: {
    fontWeight: "bold",
    color: "#00a2ff",
  },
});

export default Register;
