import { useCallback, useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'
import { getEveryNewsFromAQ } from '../../api/services'
import { New } from '../../interfaces/news'
import globalStyles from '../../styles/globalStyles'
import { NewsCard } from '../../components/NewsCard'

const Health = () => {

  const [news, setNews] = useState<New[]>([])

  useEffect(() => {
    getEveryNewsFromAQ('health').then(res => setNews(res.articles))
  }, [])
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Salud</Text>
      <FlatList
        data={news}
        renderItem={({ item }: { item: New }) => <NewsCard new={item} />}
        keyExtractor={(item, index) => `${item.url || index}-${item.publishedAt || index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Health