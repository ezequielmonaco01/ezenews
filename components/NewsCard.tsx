import React from 'react'
import { New } from '../interfaces/news'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Link } from 'expo-router'

interface NewsCardProps {
    new: New
}

const goToNew = (url: string) => {
    Linking.openURL(url)
}

export const NewsCard = (props: NewsCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => goToNew(props.new.url)}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {props.new.title}
        </Text>
        <Image source={{ uri: props.new.urlToImage }} style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
                {props.new.description}
            </Text>
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                {props.new.content}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 5,
        flexDirection: 'column',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 130,
        resizeMode: 'cover',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        zIndex: 1,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        fontSize: 14,
        color: 'gray',
        lineHeight: 18,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
    },
    content: {
        padding: 10,
        flexDirection: 'column',
        gap: 10,
    }
})

