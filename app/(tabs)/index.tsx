import { View, Text, FlatList } from 'react-native'
import { New } from '../../interfaces/news'
import { NewsCard } from '../../components/NewsCard'
import globalStyles from '../../styles/globalStyles'
import { NewsStore } from '../../store/NewsStore'

const Home = () => {

  const { news } = NewsStore()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Noticias</Text>
      <FlatList
        data={news}
        renderItem={({ item }: { item: New }) => <NewsCard new={item} />}
        keyExtractor={(item, index) => `${item.url || index}-${item.publishedAt || index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home