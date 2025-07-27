import React from "react";
import { FlatList, Text, View } from "react-native";
import { New } from "../interfaces/news";
import globalStyles from "../styles/globalStyles";
import { NewsCard } from "./NewsCard";
import NewSkeleton from "./NewsSkeleton";
import { FloatingButton } from "./FloatingButton";

interface NewsLayoutProps {
  news: New[];
  isLoading: boolean;
  title: string;
}

export const NewsLayout = ({ news, isLoading, title }: NewsLayoutProps) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      {news.length > 0 ? (
        <FlatList
          data={news}
          renderItem={({ item }: { item: New }) => {
            return isLoading ? <NewSkeleton /> : <NewsCard new={item} />;
          }}
          keyExtractor={(item, index) =>
            `${item.url || index}-${item.publishedAt || index}`
          }
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={globalStyles.disabledContainer}>
          <Text style={globalStyles.disabledText}>
            No hay noticias en este momento
          </Text>
        </View>
      )}
      <FloatingButton />
    </View>
  );
};
