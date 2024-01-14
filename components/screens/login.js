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

const Login = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.illusContainer}>
        <Image
          style={styles.illustration}
          source={require("../../assets/images/illu-login.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Sign In</Text>
        <Text style={styles.subTitle}>Please Sign In to continue.</Text>
        <CustomInput style={styles.username} placeholder="Username" />
        <CustomInput style={styles.username} placeholder="Password" />
        <TouchableOpacity
          style={{ marginHorizontal: 14, marginBottom: 8 }}
          onPress={() => Alert.alert("Forgot Password")}
        >
          <Text style={{ fontSize: 13, color: "#00a2ff" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <CustomButton
            title="Sign In"
            onPress={() => navigation.navigate("Portofolio")}
          />
          <Text style={{ color: "#c8cbcc" }}>
            ---------------------------------- OR
            -------------------------------------
          </Text>
          <CustomButton
            title="Sign In with Google"
            size="enabled"
            backgroundColor="#c8cbcc"
          />
        </View>
        <View style={styles.signupContainer}>
          <Text>Don't have an account?</Text>
          <View style={{ width: 6 }} />
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signup}>Sign Up</Text>
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

export default Login;
