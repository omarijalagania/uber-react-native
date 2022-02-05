import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "./components/Header/HeaderTabs";
import Searchbar from "./components/Search/Searchbar";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <Searchbar />
      </View>
    </SafeAreaView>
  );
}
