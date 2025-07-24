import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import NotificationDisplay from '@/components/NotificationDisplay';
import {readNotifications} from '@/api/notifications/readNotifications';

const unreadNotification = () => {
  const { data } = readNotifications();
  
  return (
     <>
     <ScrollView>
     {data && data.length > 0 ? (
            <><View style={styles.Textcontainer}>
            <Text style={styles.boldText}>Upcoming Events</Text>
          </View><View style={styles.Eventcontainer}>
              {data.map((event:any) => (
                <NotificationDisplay
                KeyId = {event.noId}
                title={event.noMessage}
                date={event.noDate} />
              ))}
            </View></>
            ):(<View></View>)}
    </ScrollView>
  </>
  )
}

export default unreadNotification;

const styles = StyleSheet.create({
  Eventcontainer: {
    flex: 1,
    alignItems: "center",
    height: "auto",
  },
  Textcontainer: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 12,
    fontFamily: "MontserratLight",
    fontWeight: "bold",
  },
})