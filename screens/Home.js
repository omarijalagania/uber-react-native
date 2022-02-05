import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories/Categories";
import HeaderTabs from "../components/Header/HeaderTabs";
import RestaurantItem from "../components/Restaurant/RestaurantItem";
import Searchbar from "../components/Search/Searchbar";
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
