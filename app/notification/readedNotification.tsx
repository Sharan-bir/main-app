
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import { allNotifications } from '@/api/notifications/allNotifications';
import NotificationDisplay from '@/components/NotificationDisplay';

const readedNotification = () => {
  const { data } = allNotifications();
  
  return (
     <>
     <ScrollView>
     {data && data.length > 0 ? (
            <><View style={styles.Textcontainer}>
            <Text style={styles.boldText}></Text>
          </View><View style={styles.Eventcontainer}>
              {data.map((event) => (
                <NotificationDisplay
                KeyId = {event.noId}
                title={event.noMessage}
                status={event.noStatus} />
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
