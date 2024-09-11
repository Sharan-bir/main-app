import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import { allNotifications } from '@/api/notifications/allNotifications';
import NotificationDisplay from '@/components/NotificationDisplay';

const readedNotification = () => {
  const { data } = allNotifications();
  console.log(data)
  return (
     <>
     <ScrollView>
     {data && data.length > 0 ? (
            <><View style={styles.Textcontainer}>
            <Text style={styles.boldText}>Upcoming Events</Text>
          </View><View style={styles.Eventcontainer}>
              {data.map((event) => (
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

export default readedNotification;

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