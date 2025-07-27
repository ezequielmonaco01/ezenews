import { View, Text, FlatList } from 'react-native'
import { NewsCard } from '../../components/NewsCard'
import globalStyles from '../../styles/globalStyles'
import { NewsStore } from '../../store/NewsStore'
import { New } from '../../interfaces/news'

const Economy = () => {
  const { economyNews } = NewsStore()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Economía</Text>
      <FlatList
        data={economyNews}
        renderItem={({ item }: { item: New }) => <NewsCard new={item} />}
        keyExtractor={(item, index) => `${item.url || index}-${item.publishedAt || index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Economy