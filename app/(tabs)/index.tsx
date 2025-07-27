import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getTopHeadlinesNews } from '../../api/services'
import { New } from '../../interfaces/news'
import { NewsCard } from '../../components/NewsCard'
import globalStyles from '../../styles/globalStyles'

const Home = () => {

  const [news, setNews] = useState<New[]>([])

  useEffect(() => {
    getTopHeadlinesNews().then(res => setNews(res.articles))
  }, [])
  
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