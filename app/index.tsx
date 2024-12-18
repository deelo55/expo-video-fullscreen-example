import { Link } from "expo-router";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <Link href="/modal">Open modal</Link>
    </View>
  );
}
