import { View, Text, FlatList } from 'react-native'
import { New } from '../../interfaces/news'
import { NewsCard } from '../../components/NewsCard'
import { NewsStore } from '../../store/NewsStore'
import globalStyles from '../../styles/globalStyles'

const Health = () => {
  const { healthNews } = NewsStore()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Salud</Text>
      <FlatList
        data={healthNews}
        renderItem={({ item }: { item: New }) => <NewsCard new={item} />}
        keyExtractor={(item, index) => `${item.url || index}-${item.publishedAt || index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Health