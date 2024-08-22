import { View, StyleSheet, Image } from 'react-native'
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
});
