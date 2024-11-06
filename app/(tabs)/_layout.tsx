import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  ChartBarIcon,
  ChartPieIcon,
  HomeIcon,
  PlusIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import {
  ChartBarIcon as ChartBarIconSolid,
  ChartPieIcon as ChartPieIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from "react-native-heroicons/solid";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].brand500,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].slate400,
        headerShown: false,
        tabBarStyle: {
          height: 56,
          // paddingVertical: 16,
          borderTopColor: "#e2e8f0",
          borderTopWidth: 1,
          alignContent: "center",
          backgroundColor: Colors[colorScheme ?? "light"].background,
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeIconSolid size={24} color={color} />
            ) : (
              <HomeIcon size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="channel"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <ChartBarIconSolid size={24} color={color} />
            ) : (
              <ChartBarIcon size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="create-signal"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                top: -25,
                elevation: 10,
                backgroundColor: Colors[colorScheme ?? "light"].brand500, // Set your desired background color here
                shadowColor: Colors[colorScheme ?? "light"].brand500, // iOS shadow color
                shadowOffset: { width: 10, height: 10 }, // Custom shadow offset (horizontal, vertical)
                shadowOpacity: 0.25, // Adjust shadow transparency
                shadowRadius: 10, // Blur radius for iOS shadow
                padding: 8, // Adjust padding as needed
                borderRadius: 999, // Makes it circular/pill-shaped
                justifyContent: "center", // Ensure icon is centered inside the circle
                alignItems: "center", // Ensure icon is centered inside the circle
              }}>
              <PlusIcon size={32} color="white" strokeWidth={2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <ChartPieIconSolid size={24} color={color} />
            ) : (
              <ChartPieIcon size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <UserIconSolid size={24} color={color} />
            ) : (
              <UserIcon size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
