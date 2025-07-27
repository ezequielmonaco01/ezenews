import { View, Text, FlatList } from 'react-native'
import { New } from '../../interfaces/news'
import globalStyles from '../../styles/globalStyles'
import { NewsCard } from '../../components/NewsCard'
import { NewsStore } from '../../store/NewsStore'

const Polity = () => {

  const { polityNews } = NewsStore()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Política</Text>
      <FlatList
        data={polityNews}
        renderItem={({ item }: { item: New }) => <NewsCard new={item} />}
        keyExtractor={(item, index) => `${item.url || index}-${item.publishedAt || index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Polity