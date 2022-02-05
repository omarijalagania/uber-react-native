import { View, Text, SafeAreaView } from "react-native";
import Categories from "../components/Categories/Categories";
import HeaderTabs from "../components/Header/HeaderTabs";
import Searchbar from "../components/Search/Searchbar";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <Searchbar />
      </View>
      <Categories />
    </SafeAreaView>
  );
};

export default Home;
