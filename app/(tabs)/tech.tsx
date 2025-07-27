import { View, Text, FlatList } from 'react-native'
import { NewsStore } from '../../store/NewsStore'
import { New } from '../../interfaces/news'
import globalStyles from '../../styles/globalStyles'
import { NewsCard } from '../../components/NewsCard'

const Tech = () => {

  const { techNews } = NewsStore()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tecnología</Text>
      <FlatList
        data={techNews}
        renderItem={({ item }: { item: New }) => <NewsCard new={item} />}
        keyExtractor={(item, index) => `${item.url || index}-${item.publishedAt || index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Tech