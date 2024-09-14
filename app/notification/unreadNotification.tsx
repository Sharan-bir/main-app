import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { allNotifications } from '@/api/notifications/allNotifications';
import NotificationDisplay from '@/components/NotificationDisplay';
import { useReadNotifications } from '@/api/notifications/readNotifications';

const readedNotification = () => {
  const { data } = allNotifications();
  console.log(data);
  
  // Filter the data to show only UnreadUnread notifications
  const unreadNotifications = data ? data.filter(notification => notification.noStatus === "Unread") : [];
  
  const { mutate: readNotification } = useReadNotifications();

  const ReadNotification = (id: any) => {
    readNotification([id]);
    
  }

  return (
    <>
      <ScrollView>
        {unreadNotifications.length > 0 ? (
          <>
            <View style={styles.Textcontainer}>
              <Text style={styles.boldText}>Unread Notifications</Text>
            </View>
            <View style={styles.Eventcontainer}>
              {unreadNotifications.map((notification) => (
                <TouchableOpacity onPress={() => ReadNotification(notification.noId)}>
                <NotificationDisplay
                  KeyId={notification.noId}
                  title={notification.noMessage}
                  status={notification.noStatus}
                />
              </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <View style={styles.Textcontainer}>
            <Text>No unread notifications</Text>
          </View>
        )}
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
});