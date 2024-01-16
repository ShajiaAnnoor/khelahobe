import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image 
} from 'react-native';

import {
	useDispatch,
	useSelector
} from 'react-redux';

import { fetchBlogs } from '../../../redux/complex-actions/blog';
import { getBlogs } from '../../../redux/reducers';
 
const Item = ({item, onPress, backgroundColor, textColor}) => {
  const body = JSON.parse(item.content);

  return (
    <TouchableOpacity>
      <View style={styles.ItemContainer}>
        <Image style={styles.image} source={{ uri:item.images[0] }}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.paragraph}>{body.blocks[1].text}</Text>
      </View>
    </TouchableOpacity>
  );
};


const App = () => {

  const dispatch = useDispatch();
    useEffect(
      () => {
              dispatch(
                  fetchBlogs(0, 5)
              );
          
        },
    [
        dispatch,
    ]
)

const blogs = useSelector(
  state => getBlogs(state)
)
  ||
  [];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={blogs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       // extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom:20,
    padding:10
  },

  ItemContainer: {
    padding:15,
  },

  image: {
    width:'100%',
    height:200,
    borderRadius:25,
  },

  title: {
    fontSize:20,
    fontWeight:'bold',
    flexDirection:'row',
    paddingTop:10,
    justifyContent:'flex-start',
    fontFamily: "'Roboto Slab', serif",
  },

  paragraph: {
    paddingTop:10,
    fontSize:15,
    fontWeight:'normal',
    fontFamily: "'Roboto Slab', serif",
  },
});

export default App;