import { Stack } from "expo-router";
import StatusBar from "../components/StatusBar";
import { useEffect } from "react";
import { Alert } from "react-native";
import { NewsStore } from "../store/NewsStore";

export default function Layout() {
  const { getTopHeadlines } = NewsStore();

  const getAllNews = async () => {
    try {
      const promise = [
        getTopHeadlines({ country: "us" }),
        // getEveryNewsFromAQ({ q: "health" }),
        // getEveryNewsFromAQ({ q: "politics" }),
        // getEveryNewsFromAQ({ q: "technology" }),
        // getEveryNewsFromAQ({ q: "economy" }),
      ];
      await Promise.all(promise);
    } catch (error) {
      // Alert.alert("Oops!", "Hubo un error al obtener las noticias.");
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
