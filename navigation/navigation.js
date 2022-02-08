import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import RestaurantDetails from "../screens/RestaurantDetails";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import OrderCopmleted from "../screens/OrderCopmleted";

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
          <Stack.Screen
            name="OrderCompleted"
            component={OrderCopmleted}
            options={({ route, navigation }) => ({
              navigation: navigation,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
