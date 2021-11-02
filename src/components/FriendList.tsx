import React, { useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Friend } from './Friend'

interface Props {
  data: {
    id: number
    name: string
    likes: number
    online: string
  }[]
  follow: () => void
}

export function FriendList({ data, follow }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes
    }, 0)
  }, [data])

  return (
    <View>
      <Text style={{ marginBottom: 15, fontSize: 16 }}>
        Total de likes: {totalLikes}
      </Text>

      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={data}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  )
}
