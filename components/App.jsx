import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Octicons from "react-native-vector-icons/Octicons";

import Home from "./Home/Home.jsx";
import Activity from "./Activity/Activity.jsx";
import EventCreate from "./EventCreate/EventCreate";

import SessionDataContext from "./context/SessionDataContext"

const Tab = createBottomTabNavigator();

export default function App() {

  const [sessionData, setSessionData] = useState({
    group: { id: 1, name: "House" },
    user: { id: 1, name: "Kay" },
    supplies: [],
    supply: { id: null, name: "", color: "" },
    items: [],
    item: { id: null },
  });
  const sessionDataValue = { sessionData, setSessionData };

  return (
    <SessionDataContext.Provider value={sessionDataValue}>
      <NavigationContainer>
        <Tab.Navigator

          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {

              size = 40;

              let iconName;

              switch (route.name) {
                case "Supplies":
                  iconName = "versions"
                  break;
                case "Activity":
                  iconName = "list-unordered";
                  break;
                case "New Event":
                  iconName = "diff-added";
                  break;
                default:
                  break;
              }

              return <Octicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            showLabel: false,
            style: { height: 70 },
          }}
        >
          <Tab.Screen name="Supplies" component={Home} options={{ size: 10 }} />
          <Tab.Screen name="Activity" component={Activity} />
          <Tab.Screen name="New Event" component={EventCreate} />
        </Tab.Navigator>
      </NavigationContainer>
    </SessionDataContext.Provider>
  )
}