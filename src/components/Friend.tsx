import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import lodash from 'lodash'

interface Props {
  data: {
    id: number
    name: string
    likes: number
    online: string
  }
  follow: () => void
}

function FriendComponent({ data, follow }: Props) {
  return (
    <View
      style={{
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <View>
        <Text>
          {data.name} - Likes: {data.likes}
        </Text>
        <Text>Online em: {data.online}</Text>
      </View>

      <TouchableOpacity onPress={follow}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  )
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data)
})
