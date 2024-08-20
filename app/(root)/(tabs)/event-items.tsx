import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventItemsContent from '~/components/EventItemsContent'

const EventItems = () => {
  return (
    <View>
     <EventItemsContent />
    </View>
  )
}

export default EventItems