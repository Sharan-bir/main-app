import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { images } from '@/constants';
import AddButton from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';
import { Feather, Ionicons } from '@expo/vector-icons';

const eventitem = () => {
  const [search,setSearch] = useState('');
  return (
    <>
    <View  style={styles.TopOptions}>

      <SearchBar
      value={search}
      placeholder="Search items by name"
      handleChangeText={(e:any) => setSearch(e)}
      customWidth="65%"
      />
      <TouchableOpacity onPress={() => console.log('Share pressed')}>
        <Feather name="share-2" size={24} color="black" style={styles.share} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('ClipBoard pressed')}>
        <Feather name="clipboard" size={24} color="black" style={styles.clipboard} />
      </TouchableOpacity>

    </View>
    <View style={styles.container}>
      <Image
        source={images.boxGif}
        style={styles.gif}
      />
      <AddButton label="Add Items"/>
    </View>
    </>
  )
}

export default eventitem;

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
  TopOptions:{
    flexDirection: 'row',
  },
  share:{
    position:'absolute',
    marginTop:28,
    right:70,
  },
  clipboard:{
    position:'absolute',
    marginTop:28,
    right:30,
  }

});