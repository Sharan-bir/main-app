import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants';
import AddButton from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';

const eventdetail = () => {
  const [search,setSearch] = useState('');
  return (
    <>
    <SearchBar
      value={search}
      placeholder="Search Events by name"
      handleChangeText={(e:any) => setSearch(e)}
      customWidth="auto"
      />
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          All events
        </Text>
      </View>

    <View style={styles.container}>
      <Image
        source={images.boxGif}
        style={styles.gif}
      />
      <AddButton label="Add Details"/>
    </View>
    </>
  )
}

export default eventdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
  },
  gif: {
    width: 200,
    height: 200,
  },
  heading:{
    backgroundColor:'#f0f0f0',
    padding:15,
    borderBottomWidth:0.6,
  },
  headingText:{
    fontSize:16,
    fontFamily:'MontserratLight',
    fontWeight:"bold",
  }
});
